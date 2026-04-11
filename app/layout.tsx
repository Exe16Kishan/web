import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
// import AppShell from "@/components/AppShell";

export const metadata: Metadata = {
  title: "GUGRI INDUSTRIES | The Regenerative Architect",
  description: "Pioneering sustainable luxury through regenerative architectural partnerships.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,300;0,400;0,600;0,700;0,800;0,900;1,300;1,400;1,700;1,800;1,900&family=Manrope:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}