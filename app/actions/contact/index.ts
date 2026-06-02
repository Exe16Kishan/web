"use server";

import { google } from "googleapis";
import nodemailer from "nodemailer";
import { z } from "zod";

// Validation Schema 
const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional().default(""),
  projectType: z.enum(["res", "com", "regen", "press"]).refine(
    (val) => val,
    { message: "Please select a project type" }
  ),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

// Google Sheets  
async function appendToGoogleSheet(data: {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  timestamp: string;
}) {
  try {
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const projectTypeMap: Record<string, string> = {
      res: "Residential Masterpiece",
      com: "Sustainable Commercial Space",
      regen: "Regenerative Strategy",
      press: "Press & Media",
    };

    const rowData = [
      data.timestamp,
      data.fullName,
      data.email,
      data.phone || "N/A",
      projectTypeMap[data.projectType] || data.projectType,
      data.message,
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: process.env.GOOGLE_SHEETS_RANGE || "Sheet1!A:F",
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [rowData] },
    });

    return { success: true };
  } catch (error) {
    console.error("Google Sheets Error:", error);
    throw new Error("Failed to save to Google Sheets");
  }
}

// Email Notification 
async function sendOwnerEmail(data: {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  const projectTypeMap: Record<string, string> = {
    res: "Residential Masterpiece",
    com: "Sustainable Commercial Space",
    regen: "Regenerative Strategy",
    press: "Press & Media",
  };

  const mailOptions = {
    from: `"GUGRI Contact Form" <${process.env.SMTP_USER}>`,
    to: process.env.OWNER_EMAIL,
    subject: `New Inquiry: ${data.fullName} — ${projectTypeMap[data.projectType] || "General"}`,
    replyTo: data.email,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
            .header { background: #000; padding: 30px; text-align: center; }
            .header h1 { color: #C5A059; margin: 0; font-size: 22px; font-weight: 600; letter-spacing: 0.05em; }
            .content { padding: 30px; }
            .field { margin-bottom: 20px; }
            .field-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #888; margin-bottom: 6px; font-weight: 600; }
            .field-value { font-size: 15px; color: #222; line-height: 1.5; }
            .message-box { background: #f9f9f9; border-left: 3px solid #C5A059; padding: 15px; border-radius: 0 4px 4px 0; }
            .footer { background: #fafafa; padding: 20px; text-align: center; font-size: 12px; color: #999; border-top: 1px solid #eee; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>NEW CONSULTATION INQUIRY</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Full Name</div>
                <div class="field-value">${data.fullName}</div>
              </div>
              <div class="field">
                <div class="field-label">Email Address</div>
                <div class="field-value">${data.email}</div>
              </div>
              <div class="field">
                <div class="field-label">Phone</div>
                <div class="field-value">${data.phone || "Not provided"}</div>
              </div>
              <div class="field">
                <div class="field-label">Project Type</div>
                <div class="field-value">${projectTypeMap[data.projectType] || "Not selected"}</div>
              </div>
              <div class="field">
                <div class="field-label">Message</div>
                <div class="message-box">${data.message.replace(/\n/g, "<br>")}</div>
              </div>
            </div>
            <div class="footer">
              Received via GUGRI Contact Form &bull; ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
New Inquiry Received

Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Project Type: ${projectTypeMap[data.projectType] || "Not selected"}

Message:
${data.message}

---
Received: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
    `.trim(),
  };

  await transporter.sendMail(mailOptions);
}

// Main 
export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  try {
    // Extract and validate form data
    const rawData = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || "",
      projectType: (formData.get("projectType") as string) || "",
      message: formData.get("message") as string,
    };

    // Custom validation for empty projectType since z.enum doesn't allow ""
    if (!rawData.projectType) {
      return {
        success: false,
        message: "Please fix the errors below",
        errors: { projectType: ["Please select a project type"] },
      };
    }

    const validation = contactSchema.safeParse(rawData);

    if (!validation.success) {
      return {
        success: false,
        message: "Please fix the errors below",
        errors: validation.error.flatten().fieldErrors,
      };
    }

    const data = validation.data;

    // Run both operations concurrently
    await Promise.all([
      appendToGoogleSheet({
        ...data,
        timestamp: new Date().toISOString(),
      }),
      sendOwnerEmail(data),
    ]);

    return {
      success: true,
      message: "Thank you. Your inquiry has been received and our team will contact you shortly.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong. Please try again or contact us directly at connect@gugri.in",
    };
  }
}