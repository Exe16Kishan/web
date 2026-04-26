"use client";

import Footer from "@/components/Footer";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const W = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 5rem", ...style }}>{children}</div>
);

const SectionEyebrow = ({ text, dark = true }: { text: string; dark?: boolean }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
    <span style={{ display: "inline-block", width: 48, height: 1, background: "#C5A059" }} />
    <span
      style={{
        fontFamily: "var(--font-label)",
        fontSize: ".6rem",
        fontWeight: 700,
        letterSpacing: ".28em",
        textTransform: "uppercase",
        color: "#C5A059",
      }}
    >
      {text}
    </span>
    <span style={{ display: "inline-block", width: 48, height: 1, background: "#C5A059" }} />
  </div>
);

// DATA 

const inquireItems = [
  { icon: "real_estate_agent", title: "Priority Resident Enrollment", desc: "Be among the first to experience our flagship farm resort ecosystem." },
  { icon: "workspace_premium", title: "Exclusive Material Access", desc: "Founding members receive proprietary bio-textile integration in their private villas." },
];

const galleryImages = [
  {
    id: 1,
    category: "Architecture",
    title: "Ridge Estate Villa",
    aspect: "tall",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCepr3IZ5MY3BmKN3p3y5_daHUtuB5h2sQw86JRoFyIGm-1tRNdonqB7xXEokD6xULYXIugfWM9lpkySjqW1NEAHIIKeaSBYx-49upr3G0e4ggy45QfOPdaCHEfKz0gQUAzN8JXYddcns9sG1kfvdfnlcrY4MMt3xl2Pl_8rjZdqefZoYZFNpKNkqDJl_o_yNSkutu7W9V0U75f9-NVc8J6QZc3FkHJtdTlql0_EqERf1DhkGacnb1ZtOuzJgZz3NUwCJR3MIA7ZbM",
  },
  {
    id: 2,
    category: "Energy",
    title: "Solar Infrastructure Array",
    aspect: "wide",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYxO9LGVq630sLcF5T6sYvFa9fqbUJRDg7AKjvwRNcQT5rNfK7grs_wyVBOlSXTjAwBnf7UF9CQLtvt9ayunNleeXBnurff8uOp4Xrc4IPt36FzUytMexTUmMvGoaoz_O3pqyyqK_Sznx1CF1uryPc021oM2WcfLL1ra-A68i2qz5Ld_2g8wofNtKhtMprQoXH3Fc9PGB27XujTfOCY0d_byXcHtRAQR2DKJL4gi0pGtr92Jsb6E_Uo8Ahcwf9AFgOA8uEnnfTOyQ",
  },
  {
    id: 3,
    category: "Agriculture",
    title: "Precision Crop Circles",
    aspect: "square",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDebbN3NwuLRmy55g1ePb3CmZ2t0vJsGhwxhtvabEwZACKHBrLyZN6aOBUTZnGY_LqFdGljyzSN5Et72fcHuGpIyvOBMJ6HrX-R5m9Y8Ygb16d17JnNGlIxYNE90ogQJ2LbCLZdHrco0h6G7MfJ0iHVvdgO3cA7-Gp4YRrKcF4T9tXmSXtMqKW4oUAkX40RACiSye6ZQn661gs6OJkpHupyqugtZhR_0VNGriyqLmTsJkt_B7O3rsfKA3gMWJ75aw5iz4epCkSXHc",
  },
  {
    id: 4,
    category: "Landscape",
    title: "Timber Haven Forest",
    aspect: "square",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL1y_4kmTWDPOP2ga1uxCy3JknZQoHrhewAl2oKAK_qNmPG5oRulCCYoV1ROziYCjH-PGP7UxkrOYQSe6XRXNmgGwvoTE3fl2ZR3yRwmTYc-C8kcaDnc0uUVAQYb76zZ4xyjK5kjijmtETwyKw3LW9WbthnyQqKl1SWBJFkOnyez6FXDFFz_2WrkXp9LOnTKSb1ztjiWC1JrBFiFR2Djtl00bTzV5yuFeX9UXhuTeJInhPXMVIOtLC5Yd5RXFIcXVffosb8Pf-rkE",
  },
  {
    id: 5,
    category: "Retreat",
    title: "Emerald Canopy Lodge",
    aspect: "wide",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiiRaa2LjMjk8BnUaERbt00jMcADnRgCfcq9ljYI3UNQYS7XSU9u7VNMq-WCRmYToK8pWSxkG7_H_DDKZUuyDY0y45IqXQ99GgUichNAKHBKOMTO1d2kRplBPgtit-Ni8x6YPr_PXSLCNHthl_mKIh1qDOMcVn59mYthRg9UTJA5bIzRQxpObRrqKSmHhuH0d15Uy7IOvrRtr_Un6jOUu2Kr8Am6kjxtCjls4nM9LdM_AI_B1AmpZJbfTXsde1PO89WeTwlLWBxTg",
  },
  {
    id: 6,
    category: "Interior",
    title: "Biophilic Living Space",
    aspect: "tall",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwPeY19orczkCitxPeIgWKKntK2LNEUPLXZEwhRCXr2PUNWwGgnb-pw_AU3-QeCm8lbiVj7W589nOuYbuXt9pY_0TdIWKLMyJXuwOSdweC_2-pxdl8ArIa_b6uw5q6slrWpJIUB9efa3sWEeNLHPUwBA_biI05YaqMozQVsopbxwSrCoWJeFzI1QhYoce5J31NUqOlJlRUXaNANhV4dgSn4RrnrNquBSZQjZSWfdLvXCdcJo11ZLDUZ9IOffFiU4JBvyoy5KEtIoQ",
  },
  {
    id: 7,
    category: "Mobility",
    title: "Eco-Terrain Vehicles",
    aspect: "square",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBh4a8eKc_h8VEtbHLGuMmb5xHBPZoQIfoUIoeVR_AYjNRzpOUEmu3BMxZx9dHGnC0d7I1K8I6oP2chK6-0xd6f7Pgl9AR6rWer-0xA1y5MvZAiTgtyUBGcmLKciGfA2zLK6W8eMzeDwkC41mK5c6cvG6ZS-Jd2vF-Z-XiGbnVjQdC5VdRcz3eIOf7VIkbVATUQh738RWda7IKgpZR23ul62UtsWm1Kg8EAYuEXj4Yu8WJKCTg-0LpWJM4_J7SvclgAI7iz58nXvmM",
  },
  {
    id: 8,
    category: "Technology",
    title: "Satellite Imaging Grid",
    aspect: "wide",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRnjLfcKbU7CNVFtaM12HJnd12741xb2ev2eOXPUzv9VUrgYnaS4iSPhYt_LFf-MggD-Kk1_BYC1D6nFH0CQUtU01e2lY1apMhm5Ef9iNC79QbX1ptYKyBvvnvcTnpB9JN9ApFYzSIocR8q1KYN6GvaySmN5_thtBqP2eujBZthvB06HGwsnuPITR6RQq-t-Iolt5oMg0lXe0qPAn-gpq8cO09IWpc4ZffOmvNAvkn_0uSVh4Gs-nJR1tlQ6CsWC8GmyTxGKack00",
  },
];

const blogs = [
  {
    id: "regenerative-farming-future",
    category: "Agriculture",
    readTime: "6 min read",
    date: "Mar 2025",
    title: "Why Regenerative Farming Is the Future of Global Food Security",
    excerpt: "Conventional agriculture is depleting the very soil it depends on. We explore how regenerative techniques are reversing this — and creating more yield per acre in the process.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDebbN3NwuLRmy55g1ePb3CmZ2t0vJsGhwxhtvabEwZACKHBrLyZN6aOBUTZnGY_LqFdGljyzSN5Et72fcHuGpIyvOBMJ6HrX-R5m9Y8Ygb16d17JnNGlIxYNE90ogQJ2LbCLZdHrco0h6G7MfJ0iHVvdgO3cA7-Gp4YRrKcF4T9tXmSXtMqKW4oUAkX40RACiSye6ZQn661gs6OJkpHupyqugtZhR_0VNGriyqLmTsJkt_B7O3rsfKA3gMWJ75aw5iz4epCkSXHc",
    featured: true,
  },
  {
    id: "agrivoltaics-dual-land-use",
    category: "Energy",
    readTime: "4 min read",
    date: "Feb 2025",
    title: "Agrivoltaics: When Solar Panels and Crops Grow Together",
    excerpt: "Dual-use land is no longer a concept — it's a reality generating 3x more value per hectare than conventional single-use agriculture.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYxO9LGVq630sLcF5T6sYvFa9fqbUJRDg7AKjvwRNcQT5rNfK7grs_wyVBOlSXTjAwBnf7UF9CQLtvt9ayunNleeXBnurff8uOp4Xrc4IPt36FzUytMexTUmMvGoaoz_O3pqyyqK_Sznx1CF1uryPc021oM2WcfLL1ra-A68i2qz5Ld_2g8wofNtKhtMprQoXH3Fc9PGB27XujTfOCY0d_byXcHtRAQR2DKJL4gi0pGtr92Jsb6E_Uo8Ahcwf9AFgOA8uEnnfTOyQ",
    featured: false,
  },
  {
    id: "biophilic-architecture-wellness",
    category: "Architecture",
    readTime: "5 min read",
    date: "Jan 2025",
    title: "Biophilic Architecture: How Nature-Integrated Design Transforms Mental Health",
    excerpt: "Studies show that living in nature-integrated spaces reduces cortisol by up to 28%. Here's how our design philosophy is reshaping what luxury means.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCepr3IZ5MY3BmKN3p3y5_daHUtuB5h2sQw86JRoFyIGm-1tRNdonqB7xXEokD6xULYXIugfWM9lpkySjqW1NEAHIIKeaSBYx-49upr3G0e4ggy45QfOPdaCHEfKz0gQUAzN8JXYddcns9sG1kfvdfnlcrY4MMt3xl2Pl_8rjZdqefZoYZFNpKNkqDJl_o_yNSkutu7W9V0U75f9-NVc8J6QZc3FkHJtdTlql0_EqERf1DhkGacnb1ZtOuzJgZz3NUwCJR3MIA7ZbM",
    featured: false,
  },
  {
    id: "carbon-credits-land",
    category: "Sustainability",
    readTime: "7 min read",
    date: "Dec 2024",
    title: "Carbon Credits: How Your Land Can Generate Passive Revenue While Healing the Planet",
    excerpt: "Every acre managed regeneratively sequesters carbon that can be monetised. We break down the verified carbon credit marketplace and how to enter it.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL1y_4kmTWDPOP2ga1uxCy3JknZQoHrhewAl2oKAK_qNmPG5oRulCCYoV1ROziYCjH-PGP7UxkrOYQSe6XRXNmgGwvoTE3fl2ZR3yRwmTYc-C8kcaDnc0uUVAQYb76zZ4xyjK5kjijmtETwyKw3LW9WbthnyQqKl1SWBJFkOnyez6FXDFFz_2WrkXp9LOnTKSb1ztjiWC1JrBFiFR2Djtl00bTzV5yuFeX9UXhuTeJInhPXMVIOtLC5Yd5RXFIcXVffosb8Pf-rkE",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  Agriculture:   "#4a7c59",
  Energy:        "#c5a059",
  Architecture:  "#7a6a9b",
  Sustainability:"#4a8a7a",
  Landscape:     "#6b8a4a",
  Technology:    "#4a6a8a",
};

export default function ExperiencePage() {
  const heroRef    = useRef<HTMLElement>(null);
  const bentoRef   = useRef<HTMLElement>(null);
  const inquireRef = useRef<HTMLElement>(null);
  const quoteRef   = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const blogsRef   = useRef<HTMLElement>(null);

  useGSAP(() => {
    /* Hero */
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll(".h-anim"),
        { y: 72, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 1.1, ease: "power3.out", delay: 0.28 }
      );
    }

    /* Bento */
    if (bentoRef.current) {
      ScrollTrigger.create({
        trigger: bentoRef.current, start: "top 72%", once: true,
        onEnter: () => gsap.fromTo(
          bentoRef.current!.querySelectorAll(".b-anim"),
          { y: 48, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.14, duration: 0.88, ease: "power3.out" }
        ),
      });
    }

    /* Inquire */
    if (inquireRef.current) {
      ScrollTrigger.create({
        trigger: inquireRef.current, start: "top 70%", once: true,
        onEnter: () => gsap.fromTo(
          inquireRef.current!.querySelectorAll(".i-anim"),
          { y: 36, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.78, ease: "power3.out" }
        ),
      });
    }

    /* Gallery */
    if (galleryRef.current) {
      ScrollTrigger.create({
        trigger: galleryRef.current, start: "top 74%", once: true,
        onEnter: () => gsap.fromTo(
          galleryRef.current!.querySelectorAll(".g-anim"),
          { y: 40, opacity: 0, scale: 0.97 },
          { y: 0, opacity: 1, scale: 1, stagger: 0.08, duration: 0.75, ease: "power3.out" }
        ),
      });
    }

    /* Blogs */
    if (blogsRef.current) {
      ScrollTrigger.create({
        trigger: blogsRef.current, start: "top 74%", once: true,
        onEnter: () => gsap.fromTo(
          blogsRef.current!.querySelectorAll(".blog-anim"),
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.12, duration: 0.85, ease: "power3.out" }
        ),
      });
    }

    /* Quote */
    if (quoteRef.current) {
      ScrollTrigger.create({
        trigger: quoteRef.current, start: "top 78%", once: true,
        onEnter: () => gsap.fromTo(
          quoteRef.current!.querySelectorAll(".q-anim"),
          { y: 36, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out" }
        ),
      });
    }

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div style={{ background: "#000", color: "#fff" }}>

      {/* HERO*/}
      <section
        ref={heroRef}
        style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}
      >
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuApkHP08yex_lTnONCFOtPTjwwaFSKh60EOMWoSPk29izgQCg28fnxdkIYj6mkjtzcwhJAAgeXJvhJASPSLH8W3Ahxx_dtvhLprwiCQL1UUqrh17vQIPg8k_1aeQvMjd5LlrG82tWAeV5hAce41WfXYhZlCZu1W00W7OJWamgrdR2qLcqEYIJtmpk0bc7NcHbmJcxoxDjQ_NT39Rzk-g9r0rLllL_U-QeT7AwsaUeaCmszi9ThVTj4QGp5NFs69OG0ReYKPwYGFyJM"
            alt="Luxury biophilic resort"
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.58 }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #000 0%, rgba(0,0,0,.7) 50%, rgba(0,0,0,.2) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #000 0%, transparent 40%)" }} />
        </div>

        <W style={{ position: "relative", zIndex: 1, width: "100%", paddingTop: "10rem", paddingBottom: "7rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", minHeight: "calc(100vh - 17rem)" }}>
            <div style={{ maxWidth: 700 }}>
              <span className="h-anim" style={{ fontFamily: "var(--font-label)", fontSize: ".6rem", fontWeight: 700, letterSpacing: ".38em", textTransform: "uppercase", color: "#C5A059", display: "block", marginBottom: "1.5rem", opacity: 0 }}>
                Project Vision
              </span>
              <h1 className="h-anim" style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "clamp(3rem, 7vw, 7rem)", textTransform: "uppercase", letterSpacing: "-.04em", lineHeight: 1.0, marginBottom: "1.5rem", opacity: 0 }}>
                Where Nature<br />
                <em style={{ fontStyle: "italic", fontWeight: 300, color: "#C5A059" }}>Meets</em>{" "}Luxury
              </h1>
              <p className="h-anim" style={{ color: "rgba(255,255,255,.55)", fontSize: "clamp(.9rem,1.4vw,1.15rem)", lineHeight: 1.75, maxWidth: 520, marginBottom: "2.5rem", opacity: 0 }}>
                Our flagship project vision — a farm resort, energy park, and regenerative ecosystem woven into a single, breathtaking experience.
              </p>
            </div>
            <div className="h-anim" style={{ opacity: 0, marginBottom: "2rem" }}>
              <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
                <button
                  style={{ padding: ".9rem 2.2rem", border: "1px solid rgba(255,255,255,.4)", background: "transparent", color: "#fff", fontFamily: "var(--font-label)", fontSize: ".6rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", cursor: "pointer", transition: "all .3s ease", whiteSpace: "nowrap" }}
                  onMouseEnter={e=>{const b=e.currentTarget as HTMLButtonElement;b.style.background="#fff";b.style.color="#000";b.style.borderColor="#fff";}}
                  onMouseLeave={e=>{const b=e.currentTarget as HTMLButtonElement;b.style.background="transparent";b.style.color="#fff";b.style.borderColor="rgba(255,255,255,.4)";}}
                >
                  Explore Retreats
                </button>
                <button
                  style={{ background: "transparent", border: "none", borderBottom: "1px solid rgba(197,160,89,.35)", color: "#C5A059", fontFamily: "var(--font-label)", fontSize: ".6rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", cursor: "pointer", padding: ".9rem 0", transition: "all .3s ease", whiteSpace: "nowrap" }}
                  onMouseEnter={e=>{const b=e.currentTarget as HTMLButtonElement;b.style.borderBottomColor="#C5A059";b.style.transform="translateX(-4px)";}}
                  onMouseLeave={e=>{const b=e.currentTarget as HTMLButtonElement;b.style.borderBottomColor="rgba(197,160,89,.35)";b.style.transform="translateX(0)";}}
                >
                  View Private Gallery
                </button>
              </div>
            </div>
          </div>
        </W>

        <div style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: ".5rem", zIndex: 1 }}>
          <span style={{ fontFamily: "var(--font-label)", fontSize: ".52rem", letterSpacing: ".3em", textTransform: "uppercase", color: "rgba(255,255,255,.35)" }}>Discover</span>
          <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, #C5A059, transparent)" }} />
        </div>
      </section>

      {/* BENTO GRID*/}
      <section ref={bentoRef} style={{ background: "#000", padding: "7rem 0" }}>
        <W>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3.5rem" }}>
            <div style={{ maxWidth: 500 }}>
              <h2 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,4rem)", textTransform: "uppercase", letterSpacing: "-.04em", lineHeight: 1.1, marginBottom: "1rem" }}>
                Immerse Yourself in a{" "}
                <span style={{ color: "#C5A059" }}>Living Ecosystem</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,.35)", fontSize: ".84rem", lineHeight: 1.8 }}>
                Indoor beach pools, open landscape villas, nature-integrated infrastructure — every detail designed to blur the boundary between architecture and the natural world.
              </p>
            </div>
            <div style={{ display: "flex", gap: ".75rem", flexShrink: 0 }}>
              {["west", "east"].map(d => (
                <button key={d} style={{ width: 44, height: 44, borderRadius: "50%", border: "1px solid rgba(255,255,255,.12)", background: "transparent", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background .25s" }}
                  onMouseEnter={e=>((e.currentTarget as HTMLButtonElement).style.background="rgba(255,255,255,.1)")}
                  onMouseLeave={e=>((e.currentTarget as HTMLButtonElement).style.background="transparent")}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{d}</span>
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "7fr 5fr", gap: "1.25rem", minHeight: 640 }}>
            <div
              className="b-anim"
              style={{ position: "relative", borderRadius: ".375rem", overflow: "hidden", background: "#131313", border: "1px solid rgba(255,255,255,.06)", opacity: 0 }}
              onMouseEnter={e=>{const img=e.currentTarget.querySelector("img") as HTMLImageElement;if(img)img.style.transform="scale(1.07)";}}
              onMouseLeave={e=>{const img=e.currentTarget.querySelector("img") as HTMLImageElement;if(img)img.style.transform="scale(1)";}}
            >
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwPeY19orczkCitxPeIgWKKntK2LNEUPLXZEwhRCXr2PUNWwGgnb-pw_AU3-QeCm8lbiVj7W589nOuYbuXt9pY_0TdIWKLMyJXuwOSdweC_2-pxdl8ArIa_b6uw5q6slrWpJIUB9efa3sWEeNLHPUwBA_biI05YaqMozQVsopbxwSrCoWJeFzI1QhYoce5J31NUqOlJlRUXaNANhV4dgSn4RrnrNquBSZQjZSWfdLvXCdcJo11ZLDUZ9IOffFiU4JBvyoy5KEtIoQ"
                alt="Lagoon sanctuary"
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: .7, transition: "transform .7s ease", minHeight: 500 }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,.9) 0%, transparent 55%)" }} />
              <div style={{ position: "absolute", bottom: "2.5rem", left: "2.5rem", right: "2.5rem" }}>
                <div style={{ marginBottom: "1rem" }}>
                  <span style={{ display: "inline-block", padding: ".3rem 1rem", borderRadius: 999, background: "rgba(197,160,89,.2)", color: "#C5A059", fontFamily: "var(--font-label)", fontSize: ".55rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", backdropFilter: "blur(8px)" }}>
                    Signature Retreat
                  </span>
                </div>
                <h3 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "clamp(1.3rem,2.2vw,2rem)", textTransform: "uppercase", letterSpacing: "-.02em", marginBottom: ".6rem" }}>
                  The Lagoon Sanctuary
                </h3>
                <p style={{ color: "rgba(255,255,255,.38)", fontSize: ".82rem", lineHeight: 1.7, maxWidth: 380 }}>
                  Indoor-outdoor beach pools that utilize natural bio-filtration systems for pure, mineral-rich water.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDypP0eHa--oxOtdSXIKfVJXPUBYQarRhUs40eWW5l4efsv9m77_-n3ExWDz1b_KBaR97JAUiCYwOgehZ1iDgFvLlQkm9OS4OJribpakCwJ_44v8sg_ZsXWOqJfMn8sW8LLfKNxu18TK_v6a65xAxywMti-8Lazh5llETpfrr4ivMxA2Yu_j10LJnL4JModklxbgr24rBOIsc6SFwrQb5H63_F9ElQ5l-5HFmtrFqXWp0Kvf03Aa_CCQvhEmNaBcY799y2FtvXKG0M", title: "Open Landscape Villas", sub: "Blurring the boundary of home." },
                { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYxO9LGVq630sLcF5T6sYvFa9fqbUJRDg7AKjvwRNcQT5rNfK7grs_wyVBOlSXTjAwBnf7UF9CQLtvt9ayunNleeXBnurff8uOp4Xrc4IPt36FzUytMexTUmMvGoaoz_O3pqyyqK_Sznx1CF1uryPc021oM2WcfLL1ra-A68i2qz5Ld_2g8wofNtKhtMprQoXH3Fc9PGB27XujTfOCY0d_byXcHtRAQR2DKJL4gi0pGtr92Jsb6E_Uo8Ahcwf9AFgOA8uEnnfTOyQ", title: "Nature-Integrated Infrastructure", sub: "Powering a living ecosystem." },
              ].map(card => (
                <div key={card.title} className="b-anim" style={{ flex: 1, position: "relative", borderRadius: ".375rem", overflow: "hidden", background: "#131313", border: "1px solid rgba(255,255,255,.06)", minHeight: 280, opacity: 0 }}
                  onMouseEnter={e=>{const img=e.currentTarget.querySelector("img") as HTMLImageElement;if(img)img.style.transform="scale(1.07)";const ov=e.currentTarget.querySelector(".ov") as HTMLDivElement;if(ov)ov.style.background="rgba(0,0,0,.25)";}}
                  onMouseLeave={e=>{const img=e.currentTarget.querySelector("img") as HTMLImageElement;if(img)img.style.transform="scale(1)";const ov=e.currentTarget.querySelector(".ov") as HTMLDivElement;if(ov)ov.style.background="rgba(0,0,0,.42)";}}
                >
                  <img src={card.img} alt={card.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: .7, transition: "transform .7s ease", position: "absolute", inset: 0 }} />
                  <div className="ov" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.42)", transition: "background .4s" }} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "2rem 2.25rem" }}>
                    <h3 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "1.15rem", textTransform: "uppercase", letterSpacing: "-.015em", marginBottom: ".35rem" }}>{card.title}</h3>
                    <p style={{ fontFamily: "var(--font-label)", fontSize: ".55rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(255,255,255,.38)" }}>{card.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </W>
      </section>

      {/*PROJECT GALLERY*/}
      <section ref={galleryRef} style={{ background: "#050505", padding: "8rem 0", borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <W>
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem" }}>
            <div>
              <SectionEyebrow text="Project Galleries" />
              <h2
                style={{
                  fontFamily: "var(--font-epilogue), sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2.5rem, 5vw, 5rem)",
                  textTransform: "uppercase",
                  letterSpacing: "-.04em",
                  lineHeight: 1.05,
                }}
              >
                Glimpses of a{" "}
                <em style={{ fontStyle: "normal", color: "#C5A059" }}>Living World</em>
              </h2>
            </div>
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: ".65rem",
                padding: ".85rem 2rem",
                border: "1px solid rgba(255,255,255,.18)",
                background: "transparent",
                color: "rgba(255,255,255,.7)",
                fontFamily: "var(--font-label)",
                fontSize: ".6rem",
                fontWeight: 700,
                letterSpacing: ".2em",
                textTransform: "uppercase",
                cursor: "pointer",
                borderRadius: ".15rem",
                whiteSpace: "nowrap",
                transition: "all .3s",
                flexShrink: 0,
              }}
              onMouseEnter={e=>{const b=e.currentTarget as HTMLButtonElement;b.style.borderColor="#C5A059";b.style.color="#C5A059";}}
              onMouseLeave={e=>{const b=e.currentTarget as HTMLButtonElement;b.style.borderColor="rgba(255,255,255,.18)";b.style.color="rgba(255,255,255,.7)";}}
            >
              View Full Gallery
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
            </button>
          </div>

          {/* Masonry-style grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: "auto",
              gap: "1rem",
            }}
          >
            {galleryImages.map((img, i) => {
              // Specific sizing for bento masonry feel
              const gridStyles: React.CSSProperties[] = [
                { gridColumn: "1 / 3", gridRow: "1 / 2" }, // wide
                { gridColumn: "3 / 4", gridRow: "1 / 3" }, // tall
                { gridColumn: "4 / 5", gridRow: "1 / 2" }, // normal
                { gridColumn: "1 / 2", gridRow: "2 / 3" }, // normal
                { gridColumn: "2 / 3", gridRow: "2 / 3" }, // normal
                { gridColumn: "4 / 5", gridRow: "2 / 4" }, // tall
                { gridColumn: "1 / 3", gridRow: "3 / 4" }, // wide
                { gridColumn: "3 / 4", gridRow: "3 / 4" }, // normal
              ];
              const heights = [320, 660, 300, 300, 300, 660, 300, 300];

              return (
                <div
                  key={img.id}
                  className="g-anim"
                  style={{
                    ...gridStyles[i],
                    position: "relative",
                    borderRadius: ".375rem",
                    overflow: "hidden",
                    background: "#131313",
                    minHeight: heights[i],
                    cursor: "pointer",
                    opacity: 0,
                    border: "1px solid rgba(255,255,255,.05)",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    const imgEl = el.querySelector("img") as HTMLImageElement;
                    const overlay = el.querySelector(".gal-overlay") as HTMLDivElement;
                    const info = el.querySelector(".gal-info") as HTMLDivElement;
                    if (imgEl) imgEl.style.transform = "scale(1.08)";
                    if (overlay) overlay.style.opacity = "1";
                    if (info) info.style.transform = "translateY(0)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    const imgEl = el.querySelector("img") as HTMLImageElement;
                    const overlay = el.querySelector(".gal-overlay") as HTMLDivElement;
                    const info = el.querySelector(".gal-info") as HTMLDivElement;
                    if (imgEl) imgEl.style.transform = "scale(1)";
                    if (overlay) overlay.style.opacity = "0";
                    if (info) info.style.transform = "translateY(8px)";
                  }}
                >
                  <img
                    src={img.img}
                    alt={img.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      position: "absolute",
                      inset: 0,
                      transition: "transform .7s cubic-bezier(.4,0,.2,1)",
                    }}
                  />
                  {/*  bottom info */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,.75) 0%, transparent 50%)" }} />

                  {/* Hover overlay */}
                  <div
                    className="gal-overlay"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(197,160,89,.12)",
                      backdropFilter: "blur(1px)",
                      opacity: 0,
                      transition: "opacity .4s",
                    }}
                  />

                  {/* Category badge  */}
                  <div style={{ position: "absolute", top: "1.25rem", left: "1.25rem" }}>
                    <span
                      style={{
                        display: "inline-block",
                        padding: ".28rem .75rem",
                        borderRadius: 999,
                        background: categoryColors[img.category] ? `${categoryColors[img.category]}33` : "rgba(197,160,89,.2)",
                        border: `1px solid ${categoryColors[img.category] ?? "#C5A059"}55`,
                        color: categoryColors[img.category] ?? "#C5A059",
                        fontFamily: "var(--font-label)",
                        fontSize: ".5rem",
                        fontWeight: 700,
                        letterSpacing: ".18em",
                        textTransform: "uppercase",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {img.category}
                    </span>
                  </div>

                  {/* Info */}
                  <div
                    className="gal-info"
                    style={{
                      position: "absolute",
                      bottom: "1.5rem",
                      left: "1.5rem",
                      right: "1.5rem",
                      transform: "translateY(8px)",
                      transition: "transform .4s cubic-bezier(.4,0,.2,1)",
                    }}
                  >
                    <h4
                      style={{
                        fontFamily: "var(--font-epilogue), sans-serif",
                        fontWeight: 900,
                        fontSize: "clamp(.95rem,1.4vw,1.2rem)",
                        textTransform: "uppercase",
                        letterSpacing: "-.01em",
                        color: "#fff",
                        marginBottom: ".3rem",
                      }}
                    >
                      {img.title}
                    </h4>
                  </div>

                  {/* icon  */}
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      className="gal-overlay"
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        border: "1px solid rgba(255,255,255,.5)",
                        background: "rgba(0,0,0,.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: 0,
                        transition: "opacity .4s",
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: 20 }}>open_in_full</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Gallery count */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem", gap: "2rem", alignItems: "center" }}>
            <div style={{ height: 1, flex: 1, background: "rgba(255,255,255,.06)" }} />
            <span style={{ fontFamily: "var(--font-label)", fontSize: ".55rem", fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(255,255,255,.25)", whiteSpace: "nowrap" }}>
              8 of 64 images shown
            </span>
            <div style={{ height: 1, flex: 1, background: "rgba(255,255,255,.06)" }} />
          </div>
        </W>
      </section>

      {/* INQUIRE  */}
      <section ref={inquireRef} style={{ background: "#fff", color: "#000", padding: "8rem 0" }}>
        <W>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
            <div>
              <span className="i-anim" style={{ fontFamily: "var(--font-label)", fontSize: ".57rem", fontWeight: 700, letterSpacing: ".42em", textTransform: "uppercase", color: "#C5A059", display: "block", marginBottom: "1.75rem", opacity: 0 }}>
                Direct Access
              </span>
              <h3 className="i-anim" style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem,5vw,5.5rem)", textTransform: "uppercase", letterSpacing: "-.04em", lineHeight: 1.0, marginBottom: "1.75rem", opacity: 0 }}>
                Inquire About<br />The Project
              </h3>
              <p className="i-anim" style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, marginBottom: "3rem", maxWidth: 460, opacity: 0 }}>
                Secure your place within the most ambitious regenerative living environment ever conceived. Exclusive access is currently open for private membership.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {inquireItems.map(item => (
                  <div key={item.title} className="i-anim" style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem", opacity: 0 }}>
                    <div style={{ flexShrink: 0, width: 52, height: 52, borderRadius: ".5rem", background: "#f5f5f5", border: "1px solid rgba(0,0,0,.07)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span className="material-symbols-outlined" style={{ color: "#C5A059", fontSize: 26 }}>{item.icon}</span>
                    </div>
                    <div>
                      <h4 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 700, fontSize: ".95rem", textTransform: "uppercase", letterSpacing: "-.01em", color: "#000", marginBottom: ".4rem" }}>{item.title}</h4>
                      <p style={{ color: "#999", fontSize: ".84rem", lineHeight: 1.7 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="i-anim" style={{ borderRadius: ".375rem", overflow: "hidden", aspectRatio: "4/5", opacity: 0 }}>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCepr3IZ5MY3BmKN3p3y5_daHUtuB5h2sQw86JRoFyIGm-1tRNdonqB7xXEokD6xULYXIugfWM9lpkySjqW1NEAHIIKeaSBYx-49upr3G0e4ggy45QfOPdaCHEfKz0gQUAzN8JXYddcns9sG1kfvdfnlcrY4MMt3xl2Pl_8rjZdqefZoYZFNpKNkqDJl_o_yNSkutu7W9V0U75f9-NVc8J6QZc3FkHJtdTlql0_EqERf1DhkGacnb1ZtOuzJgZz3NUwCJR3MIA7ZbM"
                alt="Luxury forest retreat"
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .7s" }}
                onMouseEnter={e=>((e.currentTarget as HTMLImageElement).style.transform="scale(1.04)")}
                onMouseLeave={e=>((e.currentTarget as HTMLImageElement).style.transform="scale(1)")}
              />
            </div>
          </div>
        </W>
      </section>

      {/* BLOGS */}
      <section ref={blogsRef} style={{ background: "#000", padding: "8rem 0" }}>
        <W>
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem" }}>
            <div>
              <SectionEyebrow text="Journal" />
              <h2
                style={{
                  fontFamily: "var(--font-epilogue), sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2.5rem, 5vw, 5rem)",
                  textTransform: "uppercase",
                  letterSpacing: "-.04em",
                  lineHeight: 1.05,
                }}
              >
                Ideas That{" "}
                <em style={{ fontStyle: "normal", color: "#C5A059" }}>Regenerate</em>
              </h2>
            </div>
            <Link
              href="/blogs"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: ".65rem",
                padding: ".85rem 2rem",
                border: "1px solid rgba(255,255,255,.18)",
                background: "transparent",
                color: "rgba(255,255,255,.7)",
                fontFamily: "var(--font-label)",
                fontSize: ".6rem",
                fontWeight: 700,
                letterSpacing: ".2em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: ".15rem",
                whiteSpace: "nowrap",
                flexShrink: 0,
                transition: "all .3s",
              }}
              onMouseEnter={e=>{const a=e.currentTarget as HTMLAnchorElement;a.style.borderColor="#C5A059";a.style.color="#C5A059";}}
              onMouseLeave={e=>{const a=e.currentTarget as HTMLAnchorElement;a.style.borderColor="rgba(255,255,255,.18)";a.style.color="rgba(255,255,255,.7)";}}
            >
              All Articles
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
            </Link>
          </div>

          {/* Featured blog  */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", alignItems: "start" }}>

            {/* Featured */}
            {(() => {
              const feat = blogs.find(b => b.featured)!;
              return (
                <Link
                  key={feat.id}
                  href={`/blogs/${feat.id}`}
                  className="blog-anim"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gridRow: "1 / 3",
                    borderRadius: ".375rem",
                    overflow: "hidden",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,.07)",
                    textDecoration: "none",
                    color: "inherit",
                    opacity: 0,
                    cursor: "pointer",
                    transition: "border-color .3s",
                  }}
                  onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(197,160,89,.3)";const img=(e.currentTarget as HTMLElement).querySelector("img") as HTMLImageElement;if(img)img.style.transform="scale(1.05)";}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,.07)";const img=(e.currentTarget as HTMLElement).querySelector("img") as HTMLImageElement;if(img)img.style.transform="scale(1)";}}
                >
                  <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/10", flexShrink: 0 }}>
                    <img
                      src={feat.img}
                      alt={feat.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .7s ease" }}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,.5) 100%)" }} />
                    <div style={{ position: "absolute", top: "1.25rem", left: "1.25rem" }}>
                      <span style={{ display: "inline-block", padding: ".3rem .85rem", borderRadius: 999, background: `${categoryColors[feat.category]}33`, border: `1px solid ${categoryColors[feat.category]}55`, color: categoryColors[feat.category], fontFamily: "var(--font-label)", fontSize: ".52rem", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase" }}>
                        {feat.category}
                      </span>
                    </div>
                    <div style={{ position: "absolute", top: "1.25rem", right: "1.25rem", padding: ".28rem .75rem", borderRadius: 999, background: "rgba(0,0,0,.5)", backdropFilter: "blur(8px)" }}>
                      <span style={{ fontFamily: "var(--font-label)", fontSize: ".5rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.55)" }}>Featured</span>
                    </div>
                  </div>
                  <div style={{ padding: "2.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                      <span style={{ fontFamily: "var(--font-label)", fontSize: ".52rem", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(255,255,255,.28)" }}>{feat.date}</span>
                      <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(255,255,255,.2)", display: "inline-block" }} />
                      <span style={{ fontFamily: "var(--font-label)", fontSize: ".52rem", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(255,255,255,.28)" }}>{feat.readTime}</span>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "clamp(1.4rem, 2.2vw, 2rem)", textTransform: "uppercase", letterSpacing: "-.03em", lineHeight: 1.1, marginBottom: "1rem", color: "#fff" }}>
                      {feat.title}
                    </h3>
                    <p style={{ color: "rgba(255,255,255,.42)", fontSize: ".88rem", lineHeight: 1.8, flex: 1, marginBottom: "2rem" }}>
                      {feat.excerpt}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: ".6rem", color: "#C5A059" }}>
                      <span style={{ fontFamily: "var(--font-label)", fontSize: ".58rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase" }}>Read Article</span>
                      <span className="material-symbols-outlined" style={{ fontSize: 15 }}>arrow_forward</span>
                    </div>
                  </div>
                </Link>
              );
            })()}

            {/*  blog cards stacked */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {blogs.filter(b => !b.featured).map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blogs/${blog.id}`}
                  className="blog-anim"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "180px 1fr",
                    borderRadius: ".375rem",
                    overflow: "hidden",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,.07)",
                    textDecoration: "none",
                    color: "inherit",
                    opacity: 0,
                    cursor: "pointer",
                    transition: "border-color .3s",
                    minHeight: 180,
                  }}
                  onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(197,160,89,.3)";const img=(e.currentTarget as HTMLElement).querySelector("img") as HTMLImageElement;if(img)img.style.transform="scale(1.06)";}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,.07)";const img=(e.currentTarget as HTMLElement).querySelector("img") as HTMLImageElement;if(img)img.style.transform="scale(1)";}}
                >
                  {/* Thumbnail */}
                  <div style={{ position: "relative", overflow: "hidden", flexShrink: 0 }}>
                    <img
                      src={blog.img}
                      alt={blog.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .6s ease" }}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.25)" }} />
                  </div>

                  {/* Text */}
                  <div style={{ padding: "1.75rem 2rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: ".75rem", marginBottom: ".85rem", flexWrap: "wrap" }}>
                        <span style={{ display: "inline-block", padding: ".22rem .6rem", borderRadius: 999, background: `${categoryColors[blog.category]}22`, border: `1px solid ${categoryColors[blog.category]}44`, color: categoryColors[blog.category], fontFamily: "var(--font-label)", fontSize: ".48rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase" }}>
                          {blog.category}
                        </span>
                        <span style={{ fontFamily: "var(--font-label)", fontSize: ".48rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.22)" }}>{blog.date}</span>
                        <span style={{ fontFamily: "var(--font-label)", fontSize: ".48rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.22)" }}>{blog.readTime}</span>
                      </div>
                      <h4 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "clamp(.95rem, 1.4vw, 1.15rem)", textTransform: "uppercase", letterSpacing: "-.02em", lineHeight: 1.2, color: "#fff", marginBottom: ".65rem" }}>
                        {blog.title}
                      </h4>
                      <p style={{ color: "rgba(255,255,255,.35)", fontSize: ".78rem", lineHeight: 1.7 }}>
                        {blog.excerpt.slice(0, 90)}…
                      </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: ".5rem", color: "#C5A059", marginTop: "1rem" }}>
                      <span style={{ fontFamily: "var(--font-label)", fontSize: ".52rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase" }}>Read</span>
                      <span className="material-symbols-outlined" style={{ fontSize: 14 }}>arrow_forward</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* newsletter teaser */}
          <div
            style={{
              marginTop: "5rem",
              padding: "3rem 4rem",
              background: "rgba(197,160,89,.04)",
              border: "1px solid rgba(197,160,89,.12)",
              borderRadius: ".375rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <div>
              <h4 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "1.5rem", textTransform: "uppercase", letterSpacing: "-.02em", marginBottom: ".5rem" }}>
                Stay ahead of the <span style={{ color: "#C5A059" }}>regenerative curve.</span>
              </h4>
              <p style={{ color: "rgba(255,255,255,.38)", fontSize: ".84rem", lineHeight: 1.7 }}>
                Monthly insights on sustainable land use, agrivoltaics, and regenerative investment.
              </p>
            </div>
            <div style={{ display: "flex", gap: 0, flexShrink: 0 }}>
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  padding: ".85rem 1.5rem",
                  background: "rgba(255,255,255,.04)",
                  border: "1px solid rgba(255,255,255,.14)",
                  borderRight: "none",
                  borderRadius: ".15rem 0 0 .15rem",
                  color: "#fff",
                  fontFamily: "var(--font-label)",
                  fontSize: ".6rem",
                  letterSpacing: ".1em",
                  outline: "none",
                  width: 240,
                }}
              />
              <button
                style={{
                  padding: ".85rem 1.75rem",
                  background: "#C5A059",
                  border: "1px solid #C5A059",
                  borderRadius: "0 .15rem .15rem 0",
                  color: "#000",
                  fontFamily: "var(--font-label)",
                  fontSize: ".6rem",
                  fontWeight: 700,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "filter .25s",
                }}
                onMouseEnter={e=>((e.currentTarget as HTMLButtonElement).style.filter="brightness(1.12)")}
                onMouseLeave={e=>((e.currentTarget as HTMLButtonElement).style.filter="none")}
              >
                Subscribe
              </button>
            </div>
          </div>
        </W>
      </section>

      {/* QUOTE */}
      <section ref={quoteRef} style={{ background: "#000", padding: "8rem 0", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", userSelect: "none" }}>
          <span style={{ fontFamily: "var(--font-epilogue),sans-serif", fontWeight: 900, fontSize: "clamp(6rem,18vw,22rem)", color: "rgba(255,255,255,.018)", textTransform: "uppercase", letterSpacing: "-.05em", lineHeight: 1, whiteSpace: "nowrap" }}>ECOSYSTEM</span>
        </div>
        <W style={{ position: "relative", zIndex: 1 }}>
          <span className="q-anim material-symbols-outlined" style={{ color: "#C5A059", fontSize: 48, display: "block", marginBottom: "2.5rem", opacity: 0, fontVariationSettings: "'FILL' 1" }}>
            format_quote
          </span>
          <blockquote
            className="q-anim"
            style={{
              fontFamily: "var(--font-epilogue), sans-serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(1.8rem, 4vw, 4.5rem)",
              lineHeight: 1.2,
              maxWidth: 820,
              margin: "0 auto 2.5rem",
              opacity: 0,
            }}
          >
            &ldquo;Luxury is no longer about excess. It is about the{" "}
            <strong style={{ color: "#C5A059", fontWeight: 900, fontStyle: "italic" }}>unfiltered connection</strong>{" "}
            between the soul and the earth.&rdquo;
          </blockquote>
          <cite className="q-anim" style={{ fontFamily: "var(--font-label)", fontSize: ".57rem", fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(255,255,255,.35)", fontStyle: "normal", opacity: 0 }}>
            — Utkarsh Gugri, Founder
          </cite>
        </W>
      </section>

      <Footer />
    </div>
  );
}