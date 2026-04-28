"use client";

import Footer from "@/components/Footer";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// DATA 

const inquireItems = [
  { icon: "real_estate_agent", title: "Priority Resident Enrollment", desc: "Be among the first to experience our flagship farm resort ecosystem." },
  { icon: "workspace_premium", title: "Exclusive Material Access",    desc: "Founding members receive proprietary bio-textile integration in their private villas." },
];

const galleryImages = [
  { id: 1, category: "Architecture", title: "Ridge Estate Villa",      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCepr3IZ5MY3BmKN3p3y5_daHUtuB5h2sQw86JRoFyIGm-1tRNdonqB7xXEokD6xULYXIugfWM9lpkySjqW1NEAHIIKeaSBYx-49upr3G0e4ggy45QfOPdaCHEfKz0gQUAzN8JXYddcns9sG1kfvdfnlcrY4MMt3xl2Pl_8rjZdqefZoYZFNpKNkqDJl_o_yNSkutu7W9V0U75f9-NVc8J6QZc3FkHJtdTlql0_EqERf1DhkGacnb1ZtOuzJgZz3NUwCJR3MIA7ZbM" },
  { id: 2, category: "Energy",       title: "Solar Infrastructure",   img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYxO9LGVq630sLcF5T6sYvFa9fqbUJRDg7AKjvwRNcQT5rNfK7grs_wyVBOlSXTjAwBnf7UF9CQLtvt9ayunNleeXBnurff8uOp4Xrc4IPt36FzUytMexTUmMvGoaoz_O3pqyyqK_Sznx1CF1uryPc021oM2WcfLL1ra-A68i2qz5Ld_2g8wofNtKhtMprQoXH3Fc9PGB27XujTfOCY0d_byXcHtRAQR2DKJL4gi0pGtr92Jsb6E_Uo8Ahcwf9AFgOA8uEnnfTOyQ" },
  { id: 3, category: "Agriculture",  title: "Precision Crop Circles", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDebbN3NwuLRmy55g1ePb3CmZ2t0vJsGhwxhtvabEwZACKHBrLyZN6aOBUTZnGY_LqFdGljyzSN5Et72fcHuGpIyvOBMJ6HrX-R5m9Y8Ygb16d17JnNGlIxYNE90ogQJ2LbCLZdHrco0h6G7MfJ0iHVvdgO3cA7-Gp4YRrKcF4T9tXmSXtMqKW4oUAkX40RACiSye6ZQn661gs6OJkpHupyqugtZhR_0VNGriyqLmTsJkt_B7O3rsfKA3gMWJ75aw5iz4epCkSXHc" },
  { id: 4, category: "Landscape",    title: "Timber Haven Forest",    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL1y_4kmTWDPOP2ga1uxCy3JknZQoHrhewAl2oKAK_qNmPG5oRulCCYoV1ROziYCjH-PGP7UxkrOYQSe6XRXNmgGwvoTE3fl2ZR3yRwmTYc-C8kcaDnc0uUVAQYb76zZ4xyjK5kjijmtETwyKw3LW9WbthnyQqKl1SWBJFkOnyez6FXDFFz_2WrkXp9LOnTKSb1ztjiWC1JrBFiFR2Djtl00bTzV5yuFeX9UXhuTeJInhPXMVIOtLC5Yd5RXFIcXVffosb8Pf-rkE" },
  { id: 5, category: "Retreat",      title: "Emerald Canopy Lodge",   img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiiRaa2LjMjk8BnUaERbt00jMcADnRgCfcq9ljYI3UNQYS7XSU9u7VNMq-WCRmYToK8pWSxkG7_H_DDKZUuyDY0y45IqXQ99GgUichNAKHBKOMTO1d2kRplBPgtit-Ni8x6YPr_PXSLCNHthl_mKIh1qDOMcVn59mYthRg9UTJA5bIzRQxpObRrqKSmHhuH0d15Uy7IOvrRtr_Un6jOUu2Kr8Am6kjxtCjls4nM9LdM_AI_B1AmpZJbfTXsde1PO89WeTwlLWBxTg" },
  { id: 6, category: "Interior",     title: "Biophilic Living Space", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwPeY19orczkCitxPeIgWKKntK2LNEUPLXZEwhRCXr2PUNWwGgnb-pw_AU3-QeCm8lbiVj7W589nOuYbuXt9pY_0TdIWKLMyJXuwOSdweC_2-pxdl8ArIa_b6uw5q6slrWpJIUB9efa3sWEeNLHPUwBA_biI05YaqMozQVsopbxwSrCoWJeFzI1QhYoce5J31NUqOlJlRUXaNANhV4dgSn4RrnrNquBSZQjZSWfdLvXCdcJo11ZLDUZ9IOffFiU4JBvyoy5KEtIoQ" },
  { id: 7, category: "Mobility",     title: "Eco-Terrain Vehicles",  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBh4a8eKc_h8VEtbHLGuMmb5xHBPZoQIfoUIoeVR_AYjNRzpOUEmu3BMxZx9dHGnC0d7I1K8I6oP2chK6-0xd6f7Pgl9AR6rWer-0xA1y5MvZAiTgtyUBGcmLKciGfA2zLK6W8eMzeDwkC41mK5c6cvG6ZS-Jd2vF-Z-XiGbnVjQdC5VdRcz3eIOf7VIkbVATUQh738RWda7IKgpZR23ul62UtsWm1Kg8EAYuEXj4Yu8WJKCTg-0LpWJM4_J7SvclgAI7iz58nXvmM" },
  { id: 8, category: "Technology",   title: "Satellite Imaging Grid", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRnjLfcKbU7CNVFtaM12HJnd12741xb2ev2eOXPUzv9VUrgYnaS4iSPhYt_LFf-MggD-Kk1_BYC1D6nFH0CQUtU01e2lY1apMhm5Ef9iNC79QbX1ptYKyBvvnvcTnpB9JN9ApFYzSIocR8q1KYN6GvaySmN5_thtBqP2eujBZthvB06HGwsnuPITR6RQq-t-Iolt5oMg0lXe0qPAn-gpq8cO09IWpc4ZffOmvNAvkn_0uSVh4Gs-nJR1tlQ6CsWC8GmyTxGKack00" },
];

export const blogs = [
  {
    id: "regenerative-farming-future",
    category: "Agriculture",
    readTime: "6 min read",
    date: "Mar 2025",
    title: "Why Regenerative Farming Is the Future of Global Food Security",
    excerpt: "Conventional agriculture is depleting the very soil it depends on. We explore how regenerative techniques are reversing this — and creating more yield per acre in the process.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDebbN3NwuLRmy55g1ePb3CmZ2t0vJsGhwxhtvabEwZACKHBrLyZN6aOBUTZnGY_LqFdGljyzSN5Et72fcHuGpIyvOBMJ6HrX-R5m9Y8Ygb16d17JnNGlIxYNE90ogQJ2LbCLZdHrco0h6G7MfJ0iHVvdgO3cA7-Gp4YRrKcF4T9tXmSXtMqKW4oUAkX40RACiSye6ZQn661gs6OJkpHupyqugtZhR_0VNGriyqLmTsJkt_B7O3rsfKA3gMWJ75aw5iz4epCkSXHc",
    featured: true,
    body: `Conventional agriculture has fed billions — but at a steep cost. Over 40% of the world's topsoil has been degraded in the last century alone.

Regenerative agriculture takes a radically different approach. Rather than treating soil as an inert growing medium, it treats it as a living ecosystem — one that, when properly managed, improves with each season rather than declining.

**What Makes Farming "Regenerative"?**

Regenerative agriculture is not a single technique but a philosophy built around several core principles:

**1. Minimal soil disturbance** — No-till and low-till practices preserve the mycelial networks that make soil fertile.

**2. Continuous ground cover** — Cover crops and perennials prevent erosion and continuously feed soil biology.

**3. Diversity** — Polyculture systems mimic nature's biodiversity, reducing pest pressure and building resilience.

**4. Integration of livestock** — Managed grazing replicates the natural relationship between grasslands and animals.

At Gugri Industries, our partner farms have recorded a 3x increase in revenue per acre within three years of transitioning to regenerative practices.

**The Carbon Premium**

Healthy, biologically active soil sequesters significantly more atmospheric carbon than degraded land. Each tonne sequestered can be sold on voluntary carbon markets, adding ₹4,000–₹12,000 per acre per year to farm revenue.

**The Investment Thesis**

For landowners and investors, regenerative land is increasingly seen as the most resilient asset class of the coming decade. While conventional farmland depreciates its underlying biological capital, regenerative land compounds it — creating a self-reinforcing cycle of ecological and financial returns.`,
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
    body: `For decades, land use has been a zero-sum game: you either farm it or you solar it. Agrivoltaics — the co-location of solar photovoltaic panels and agricultural production — is proving that false dichotomy wrong.

**Real-World Results**

Pilot projects across India, Japan, and Europe have demonstrated that agrivoltaic systems can increase total land value by 300–400% compared to conventional single-use installations.

At our Rajasthan site, a 40-acre agrivoltaic installation generates ₹2.8 lakh per acre in combined crop and energy revenue annually, versus ₹70,000 per acre from conventional dryland farming.

**Design Considerations**

Not all crops suit agrivoltaics. The best combinations include shade-tolerant crops like lettuce, spinach, kale, and floriculture where partial shade extends blooming seasons.

The future of Indian agriculture is not a choice between food and energy. It is both, from the same acre of land.`,
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
    body: `Humans evolved over 300,000 years in direct relationship with nature. Then, in roughly two centuries, we moved almost entirely indoors.

**The Science Is Settled**

- Hospital patients with window views of nature recover 8.5% faster
- Workers in nature-integrated offices report 15% higher wellbeing
- Cortisol is measurably lower in people who spend even 20 minutes in green spaces daily

**What Biophilic Design Actually Means**

True biophilic architecture is a systematic approach that includes natural light engineering, living materials, water presence, and visual connection to nature.

In our flagship estate projects, biophilic design is not an add-on. It is the brief.`,
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
    body: `The voluntary carbon credit market is growing at 30% per year and is projected to reach $50 billion by 2030.

**How Carbon Credits Work**

When land is managed regeneratively — through reforestation, regenerative agriculture, or wetland restoration — the resulting carbon storage can be verified and converted into tradeable credits. One carbon credit = one metric tonne of CO₂ equivalent removed from the atmosphere.

**What Returns Can You Expect?**

Current market prices range from $8–$45 per credit. A well-managed 100-acre regenerative farm might sequester 200–500 tonnes of CO₂ per year, generating $1,600–$22,500 annually in carbon revenue — on top of existing agricultural income.

The land does not change. The farming does not stop. The revenue simply adds.`,
  },
];

const categoryColors: Record<string, string> = {
  Agriculture:   "#4a7c59",
  Energy:        "#c5a059",
  Architecture:  "#7a6a9b",
  Sustainability:"#4a8a7a",
  Landscape:     "#6b8a4a",
  Technology:    "#4a6a8a",
  Interior:      "#8a6a5a",
  Retreat:       "#5a7a6a",
  Mobility:      "#6a7a8a",
};

//  HELPERS 

const W = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ width: "100%", maxWidth: 1440, marginLeft: "auto", marginRight: "auto", paddingLeft: "clamp(1.25rem, 5vw, 5rem)", paddingRight: "clamp(1.25rem, 5vw, 5rem)", ...style }}>
    {children}
  </div>
);

const SectionEyebrow = ({ text }: { text: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
    <span style={{ display: "inline-block", width: 48, height: 1, background: "#C5A059" }} />
    <span style={{ fontFamily: "var(--font-label)", fontSize: ".6rem", fontWeight: 700, letterSpacing: ".28em", textTransform: "uppercase", color: "#C5A059" }}>{text}</span>
    <span style={{ display: "inline-block", width: 48, height: 1, background: "#C5A059" }} />
  </div>
);
 
export default function ExperiencePage() {
  const heroRef    = useRef<HTMLElement>(null);
  const bentoRef   = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const inquireRef = useRef<HTMLElement>(null);
  const blogsRef   = useRef<HTMLElement>(null);
  const quoteRef   = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.querySelectorAll(".h-anim"),
        { y: 72, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 1.1, ease: "power3.out", delay: 0.28 });
    }

    const sections = [
      { ref: bentoRef,   sel: ".b-anim"    },
      { ref: galleryRef, sel: ".g-anim"    },
      { ref: inquireRef, sel: ".i-anim"    },
      { ref: blogsRef,   sel: ".blog-anim" },
      { ref: quoteRef,   sel: ".q-anim"    },
    ];
    sections.forEach(({ ref, sel }) => {
      if (!ref.current) return;
      ScrollTrigger.create({
        trigger: ref.current, start: "top 74%", once: true,
        onEnter: () => gsap.fromTo(ref.current!.querySelectorAll(sel),
          { y: 44, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.85, ease: "power3.out" }),
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const galleryGridStyles: React.CSSProperties[] = [
    { gridColumn: "1 / 3", gridRow: "1 / 2" },
    { gridColumn: "3 / 4", gridRow: "1 / 3" },
    { gridColumn: "4 / 5", gridRow: "1 / 2" },
    { gridColumn: "1 / 2", gridRow: "2 / 3" },
    { gridColumn: "2 / 3", gridRow: "2 / 3" },
    { gridColumn: "4 / 5", gridRow: "2 / 4" },
    { gridColumn: "1 / 3", gridRow: "3 / 4" },
    { gridColumn: "3 / 4", gridRow: "3 / 4" },
  ];
  const galleryHeights = [320, 660, 300, 300, 300, 660, 300, 300];

  return (
    <>
      <style>{`
        /*  Wrapper  */
        .exp-W { width:100%; max-width:1440px; margin:0 auto; padding-left:clamp(1.25rem,5vw,5rem); padding-right:clamp(1.25rem,5vw,5rem); }

        /* Hero  */
        .hero-content-row { display:flex; justify-content:space-between; align-items:flex-end; }
        .hero-btns { display:flex; gap:1.25rem; align-items:center; }
        @media(max-width:767px){
          .hero-content-row { flex-direction:column; align-items:flex-start; gap:2rem; }
          .hero-btns { flex-direction:column; align-items:flex-start; }
        }

        /* Bento header  */
        .bento-header { display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:3.5rem; gap:1.5rem; }
        @media(max-width:767px){ .bento-header { flex-direction:column; align-items:flex-start; } }

        /*  Bento grid*/
        .bento-grid { display:grid; grid-template-columns:7fr 5fr; gap:1.25rem; min-height:640px; }
        @media(max-width:1023px){ .bento-grid { grid-template-columns:1fr; min-height:auto; } }

        /* Bento */
        .bento-right { display:flex; flex-direction:column; gap:1.25rem; }
        @media(max-width:1023px) and (min-width:640px){ .bento-right { flex-direction:row; } }

        /* Gallery masonry */
        .gallery-masonry { display:grid; grid-template-columns:repeat(4,1fr); gap:1rem; }
        .gallery-masonry .g-anim { opacity:0; }
        @media(max-width:1023px){
          .gallery-masonry { grid-template-columns:repeat(2,1fr); }
          .gallery-masonry .g-anim { grid-column:auto!important; grid-row:auto!important; min-height:240px!important; }
        }
        @media(max-width:480px){
          .gallery-masonry { grid-template-columns:1fr; }
          .gallery-masonry .g-anim { min-height:220px!important; }
        }

        /*  Gallery header  */
        .gallery-header { display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:4rem; gap:1.5rem; }
        @media(max-width:767px){ .gallery-header { flex-direction:column; align-items:flex-start; } }

        /*  Inquire grid*/
        .inquire-grid { display:grid; grid-template-columns:1fr; gap:3rem; align-items:center; }
        @media(min-width:1024px){ .inquire-grid { grid-template-columns:1fr 1fr; gap:6rem; } }

        /* Blogs header  */
        .blogs-header { display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:4rem; gap:1.5rem; }
        @media(max-width:767px){ .blogs-header { flex-direction:column; align-items:flex-start; } }

        /* Blogs layout */
        .blogs-layout { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; align-items:start; }
        @media(max-width:1023px){ .blogs-layout { grid-template-columns:1fr; } }

        /*  Blog side card */
        .blog-side-card { display:grid; grid-template-columns:180px 1fr; min-height:180px; }
        @media(max-width:480px){ .blog-side-card { grid-template-columns:1fr; } }
        @media(max-width:480px){ .blog-side-thumb { display:none; } }

        /*  Newsletter bar  */
        .newsletter-bar { display:flex; justify-content:space-between; align-items:center; gap:2rem; flex-wrap:wrap; }
        .newsletter-input-row { display:flex; flex-shrink:0; }
        @media(max-width:767px){ .newsletter-input-row { width:100%; } }
        @media(max-width:767px){ .newsletter-input-row input { flex:1; min-width:0; } }
      `}</style>

      <div style={{ background: "#000", color: "#fff", overflowX: "hidden" }}>

        {/* HERO */}
        <section ref={heroRef} style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuApkHP08yex_lTnONCFOtPTjwwaFSKh60EOMWoSPk29izgQCg28fnxdkIYj6mkjtzcwhJAAgeXJvhJASPSLH8W3Ahxx_dtvhLprwiCQL1UUqrh17vQIPg8k_1aeQvMjd5LlrG82tWAeV5hAce41WfXYhZlCZu1W00W7OJWamgrdR2qLcqEYIJtmpk0bc7NcHbmJcxoxDjQ_NT39Rzk-g9r0rLllL_U-QeT7AwsaUeaCmszi9ThVTj4QGp5NFs69OG0ReYKPwYGFyJM"
              alt="Luxury resort" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.58 }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #000 0%, rgba(0,0,0,.7) 50%, rgba(0,0,0,.2) 100%)" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #000 0%, transparent 40%)" }} />
          </div>

          <W style={{ position: "relative", zIndex: 1, width: "100%", paddingTop: "clamp(7rem,12vw,10rem)", paddingBottom: "clamp(4rem,8vw,7rem)" }}>
            <div className="hero-content-row">
              <div style={{ maxWidth: 700 }}>
                <span className="h-anim" style={{ fontFamily: "var(--font-label)", fontSize: ".6rem", fontWeight: 700, letterSpacing: ".38em", textTransform: "uppercase", color: "#C5A059", display: "block", marginBottom: "1.5rem", opacity: 0 }}>
                  Project Vision
                </span>
                <h1 className="h-anim" style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "clamp(2.6rem, 7vw, 7rem)", textTransform: "uppercase", letterSpacing: "-.04em", lineHeight: 1.0, marginBottom: "1.5rem", opacity: 0 }}>
                  Where Nature<br />
                  <em style={{ fontStyle: "italic", fontWeight: 300, color: "#C5A059" }}>Meets</em>{" "}Luxury
                </h1>
                <p className="h-anim" style={{ color: "rgba(255,255,255,.55)", fontSize: "clamp(.88rem,1.4vw,1.15rem)", lineHeight: 1.75, maxWidth: 520, marginBottom: "2.5rem", opacity: 0 }}>
                  Our flagship project vision — a farm resort, energy park, and regenerative ecosystem woven into a single, breathtaking experience.
                </p>
              </div>
              <div className="h-anim" style={{ opacity: 0 }}>
                <div className="hero-btns">
                  <button style={{ padding: ".9rem 2.2rem", border: "1px solid rgba(255,255,255,.4)", background: "transparent", color: "#fff", fontFamily: "var(--font-label)", fontSize: ".6rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", cursor: "pointer", transition: "all .3s ease", whiteSpace: "nowrap" }}
                    onMouseEnter={e=>{const b=e.currentTarget as HTMLButtonElement;b.style.background="#fff";b.style.color="#000";b.style.borderColor="#fff";}}
                    onMouseLeave={e=>{const b=e.currentTarget as HTMLButtonElement;b.style.background="transparent";b.style.color="#fff";b.style.borderColor="rgba(255,255,255,.4)";}}>
                    Explore Retreats
                  </button>
                  <button style={{ background: "transparent", border: "none", borderBottom: "1px solid rgba(197,160,89,.35)", color: "#C5A059", fontFamily: "var(--font-label)", fontSize: ".6rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", cursor: "pointer", padding: ".9rem 0", transition: "all .3s ease", whiteSpace: "nowrap" }}>
                    View Private Gallery
                  </button>
                </div>
              </div>
            </div>
          </W>

          <div style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: ".5rem", zIndex: 1, opacity: 0.5 }}>
            <span style={{ fontFamily: "var(--font-label)", fontSize: ".52rem", letterSpacing: ".3em", textTransform: "uppercase", color: "rgba(255,255,255,.35)" }}>Discover</span>
            <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, #C5A059, transparent)" }} />
          </div>
        </section>

        {/* BENTO*/}
        <section ref={bentoRef} style={{ background: "#000", padding: "clamp(4rem,8vw,7rem) 0" }}>
          <W>
            <div className="bento-header">
              <div style={{ maxWidth: 500 }}>
                <h2 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "clamp(1.7rem,4vw,4rem)", textTransform: "uppercase", letterSpacing: "-.04em", lineHeight: 1.1, marginBottom: "1rem" }}>
                  Immerse Yourself in a <span style={{ color: "#C5A059" }}>Living Ecosystem</span>
                </h2>
                <p style={{ color: "rgba(255,255,255,.35)", fontSize: ".84rem", lineHeight: 1.8 }}>
                  Indoor beach pools, open landscape villas, nature-integrated infrastructure — every detail designed to blur the boundary between architecture and the natural world.
                </p>
              </div>
              <div style={{ display: "flex", gap: ".75rem", flexShrink: 0 }}>
                {["west", "east"].map(d => (
                  <button key={d} style={{ width: 44, height: 44, borderRadius: "50%", border: "1px solid rgba(255,255,255,.12)", background: "transparent", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background .25s" }}
                    onMouseEnter={e=>((e.currentTarget as HTMLButtonElement).style.background="rgba(255,255,255,.1)")}
                    onMouseLeave={e=>((e.currentTarget as HTMLButtonElement).style.background="transparent")}>
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{d}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bento-grid">
              {/* Large hero card */}
              <div className="b-anim" style={{ position: "relative", borderRadius: ".375rem", overflow: "hidden", background: "#131313", border: "1px solid rgba(255,255,255,.06)", opacity: 0, minHeight: 380 }}
                onMouseEnter={e=>{const img=e.currentTarget.querySelector("img") as HTMLImageElement;if(img)img.style.transform="scale(1.07)";}}
                onMouseLeave={e=>{const img=e.currentTarget.querySelector("img") as HTMLImageElement;if(img)img.style.transform="scale(1)";}}>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwPeY19orczkCitxPeIgWKKntK2LNEUPLXZEwhRCXr2PUNWwGgnb-pw_AU3-QeCm8lbiVj7W589nOuYbuXt9pY_0TdIWKLMyJXuwOSdweC_2-pxdl8ArIa_b6uw5q6slrWpJIUB9efa3sWEeNLHPUwBA_biI05YaqMozQVsopbxwSrCoWJeFzI1QhYoce5J31NUqOlJlRUXaNANhV4dgSn4RrnrNquBSZQjZSWfdLvXCdcJo11ZLDUZ9IOffFiU4JBvyoy5KEtIoQ"
                  alt="Lagoon" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: .7, transition: "transform .7s ease", position: "absolute", inset: 0 }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,.9) 0%, transparent 55%)" }} />
                <div style={{ position: "absolute", bottom: "2.5rem", left: "2.5rem", right: "2.5rem" }}>
                  <span style={{ display: "inline-block", padding: ".3rem 1rem", borderRadius: 999, background: "rgba(197,160,89,.2)", color: "#C5A059", fontFamily: "var(--font-label)", fontSize: ".55rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", marginBottom: "1rem" }}>Signature Retreat</span>
                  <h3 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "clamp(1.2rem,2.2vw,2rem)", textTransform: "uppercase", letterSpacing: "-.02em", marginBottom: ".6rem" }}>The Lagoon Sanctuary</h3>
                  <p style={{ color: "rgba(255,255,255,.38)", fontSize: ".82rem", lineHeight: 1.7, maxWidth: 380 }}>Indoor-outdoor beach pools that utilize natural bio-filtration systems for pure, mineral-rich water.</p>
                </div>
              </div>

              {/* Two stacked cards */}
              <div className="bento-right">
                {[
                  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDypP0eHa--oxOtdSXIKfVJXPUBYQarRhUs40eWW5l4efsv9m77_-n3ExWDz1b_KBaR97JAUiCYwOgehZ1iDgFvLlQkm9OS4OJribpakCwJ_44v8sg_ZsXWOqJfMn8sW8LLfKNxu18TK_v6a65xAxywMti-8Lazh5llETpfrr4ivMxA2Yu_j10LJnL4JModklxbgr24rBOIsc6SFwrQb5H63_F9ElQ5l-5HFmtrFqXWp0Kvf03Aa_CCQvhEmNaBcY799y2FtvXKG0M", title: "Open Landscape Villas", sub: "Blurring the boundary of home." },
                  { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYxO9LGVq630sLcF5T6sYvFa9fqbUJRDg7AKjvwRNcQT5rNfK7grs_wyVBOlSXTjAwBnf7UF9CQLtvt9ayunNleeXBnurff8uOp4Xrc4IPt36FzUytMexTUmMvGoaoz_O3pqyyqK_Sznx1CF1uryPc021oM2WcfLL1ra-A68i2qz5Ld_2g8wofNtKhtMprQoXH3Fc9PGB27XujTfOCY0d_byXcHtRAQR2DKJL4gi0pGtr92Jsb6E_Uo8Ahcwf9AFgOA8uEnnfTOyQ", title: "Nature-Integrated Infrastructure", sub: "Powering a living ecosystem." },
                ].map(card => (
                  <div key={card.title} className="b-anim" style={{ flex: 1, position: "relative", borderRadius: ".375rem", overflow: "hidden", background: "#131313", border: "1px solid rgba(255,255,255,.06)", minHeight: 240, opacity: 0 }}
                    onMouseEnter={e=>{const img=e.currentTarget.querySelector("img") as HTMLImageElement;if(img)img.style.transform="scale(1.07)";}}
                    onMouseLeave={e=>{const img=e.currentTarget.querySelector("img") as HTMLImageElement;if(img)img.style.transform="scale(1)";}}>
                    <img src={card.img} alt={card.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: .7, transition: "transform .7s ease", position: "absolute", inset: 0 }} />
                    <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.45)" }} />
                    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "2rem 2.25rem" }}>
                      <h3 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "-.015em", marginBottom: ".35rem" }}>{card.title}</h3>
                      <p style={{ fontFamily: "var(--font-label)", fontSize: ".52rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(255,255,255,.38)" }}>{card.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </W>
        </section>

        {/* PROJECT GALLERY */}
        <section ref={galleryRef} style={{ background: "#050505", padding: "clamp(4rem,8vw,8rem) 0", borderTop: "1px solid rgba(255,255,255,.05)" }}>
          <W>
            <div className="gallery-header">
              <div>
                <SectionEyebrow text="Project Galleries" />
                <h2 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 5rem)", textTransform: "uppercase", letterSpacing: "-.04em", lineHeight: 1.05 }}>
                  Glimpses of a <em style={{ fontStyle: "normal", color: "#C5A059" }}>Living World</em>
                </h2>
              </div>
              <button style={{ display: "inline-flex", alignItems: "center", gap: ".65rem", padding: ".85rem 2rem", border: "1px solid rgba(255,255,255,.18)", background: "transparent", color: "rgba(255,255,255,.7)", fontFamily: "var(--font-label)", fontSize: ".6rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", cursor: "pointer", borderRadius: ".15rem", whiteSpace: "nowrap", transition: "all .3s", flexShrink: 0 }}
                onMouseEnter={e=>{const b=e.currentTarget as HTMLButtonElement;b.style.borderColor="#C5A059";b.style.color="#C5A059";}}
                onMouseLeave={e=>{const b=e.currentTarget as HTMLButtonElement;b.style.borderColor="rgba(255,255,255,.18)";b.style.color="rgba(255,255,255,.7)";}}>
                View Full Gallery
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
              </button>
            </div>

            <div className="gallery-masonry">
              {galleryImages.map((img, i) => (
                <div key={img.id} className="g-anim"
                  style={{ ...galleryGridStyles[i], position: "relative", borderRadius: ".375rem", overflow: "hidden", background: "#131313", minHeight: galleryHeights[i], cursor: "pointer", border: "1px solid rgba(255,255,255,.05)" }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    const imgEl = el.querySelector("img") as HTMLImageElement;
                    const ov = el.querySelector(".gal-overlay") as HTMLDivElement;
                    const info = el.querySelector(".gal-info") as HTMLDivElement;
                    if (imgEl) imgEl.style.transform = "scale(1.08)";
                    if (ov) ov.style.opacity = "1";
                    if (info) info.style.transform = "translateY(0)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    const imgEl = el.querySelector("img") as HTMLImageElement;
                    const ov = el.querySelector(".gal-overlay") as HTMLDivElement;
                    const info = el.querySelector(".gal-info") as HTMLDivElement;
                    if (imgEl) imgEl.style.transform = "scale(1)";
                    if (ov) ov.style.opacity = "0";
                    if (info) info.style.transform = "translateY(8px)";
                  }}>
                  <img src={img.img} alt={img.title} style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0, transition: "transform .7s cubic-bezier(.4,0,.2,1)" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,.75) 0%, transparent 50%)" }} />
                  <div className="gal-overlay" style={{ position: "absolute", inset: 0, background: "rgba(197,160,89,.12)", backdropFilter: "blur(1px)", opacity: 0, transition: "opacity .4s" }} />
                  <div style={{ position: "absolute", top: "1.25rem", left: "1.25rem" }}>
                    <span style={{ display: "inline-block", padding: ".28rem .75rem", borderRadius: 999, background: `${categoryColors[img.category] ?? "#C5A059"}33`, border: `1px solid ${categoryColors[img.category] ?? "#C5A059"}55`, color: categoryColors[img.category] ?? "#C5A059", fontFamily: "var(--font-label)", fontSize: ".5rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", backdropFilter: "blur(8px)" }}>
                      {img.category}
                    </span>
                  </div>
                  <div className="gal-info" style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", right: "1.5rem", transform: "translateY(8px)", transition: "transform .4s cubic-bezier(.4,0,.2,1)" }}>
                    <h4 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "clamp(.9rem,1.4vw,1.2rem)", textTransform: "uppercase", letterSpacing: "-.01em", color: "#fff" }}>{img.title}</h4>
                  </div>
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
                    <div className="gal-overlay" style={{ width: 48, height: 48, borderRadius: "50%", border: "1px solid rgba(255,255,255,.5)", background: "rgba(0,0,0,.3)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity .4s" }}>
                      <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: 20 }}>open_in_full</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem", gap: "2rem", alignItems: "center" }}>
              <div style={{ height: 1, flex: 1, background: "rgba(255,255,255,.06)" }} />
              <span style={{ fontFamily: "var(--font-label)", fontSize: ".55rem", fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(255,255,255,.25)", whiteSpace: "nowrap" }}>8 of 64 images shown</span>
              <div style={{ height: 1, flex: 1, background: "rgba(255,255,255,.06)" }} />
            </div>
          </W>
        </section>

        {/* INQUIRE*/}
        <section ref={inquireRef} style={{ background: "#fff", color: "#000", padding: "clamp(4rem,8vw,8rem) 0" }}>
          <W>
            <div className="inquire-grid">
              <div>
                <span className="i-anim" style={{ fontFamily: "var(--font-label)", fontSize: ".57rem", fontWeight: 700, letterSpacing: ".42em", textTransform: "uppercase", color: "#C5A059", display: "block", marginBottom: "1.75rem", opacity: 0 }}>Direct Access</span>
                <h3 className="i-anim" style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "clamp(2rem,5vw,5.5rem)", textTransform: "uppercase", letterSpacing: "-.04em", lineHeight: 1.0, marginBottom: "1.75rem", opacity: 0 }}>
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
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCepr3IZ5MY3BmKN3p3y5_daHUtuB5h2sQw86JRoFyIGm-1tRNdonqB7xXEokD6xULYXIugfWM9lpkySjqW1NEAHIIKeaSBYx-49upr3G0e4ggy45QfOPdaCHEfKz0gQUAzN8JXYddcns9sG1kfvdfnlcrY4MMt3xl2Pl_8rjZdqefZoYZFNpKNkqDJl_o_yNSkutu7W9V0U75f9-NVc8J6QZc3FkHJtdTlql0_EqERf1DhkGacnb1ZtOuzJgZz3NUwCJR3MIA7ZbM"
                  alt="Luxury retreat" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .7s" }}
                  onMouseEnter={e=>((e.currentTarget as HTMLImageElement).style.transform="scale(1.04)")}
                  onMouseLeave={e=>((e.currentTarget as HTMLImageElement).style.transform="scale(1)")} />
              </div>
            </div>
          </W>
        </section>

        {/* BLOGS */}
        <section ref={blogsRef} style={{ background: "#000", padding: "clamp(4rem,8vw,8rem) 0" }}>
          <W>
            <div className="blogs-header">
              <div>
                <SectionEyebrow text="Journal" />
                <h2 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 5rem)", textTransform: "uppercase", letterSpacing: "-.04em", lineHeight: 1.05 }}>
                  Ideas That <em style={{ fontStyle: "normal", color: "#C5A059" }}>Regenerate</em>
                </h2>
              </div>
              <Link href="/blogs" style={{ display: "inline-flex", alignItems: "center", gap: ".65rem", padding: ".85rem 2rem", border: "1px solid rgba(255,255,255,.18)", background: "transparent", color: "rgba(255,255,255,.7)", fontFamily: "var(--font-label)", fontSize: ".6rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", textDecoration: "none", borderRadius: ".15rem", whiteSpace: "nowrap", flexShrink: 0, transition: "all .3s" }}
                onMouseEnter={e=>{const a=e.currentTarget as HTMLAnchorElement;a.style.borderColor="#C5A059";a.style.color="#C5A059";}}
                onMouseLeave={e=>{const a=e.currentTarget as HTMLAnchorElement;a.style.borderColor="rgba(255,255,255,.18)";a.style.color="rgba(255,255,255,.7)";}}>
                All Articles <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
              </Link>
            </div>

            <div className="blogs-layout">
              {/* Featured */}
              {(() => {
                const feat = blogs.find(b => b.featured)!;
                return (
                  <Link key={feat.id} href={`/blogs/${feat.id}`} className="blog-anim"
                    style={{ display: "flex", flexDirection: "column", borderRadius: ".375rem", overflow: "hidden", background: "#0a0a0a", border: "1px solid rgba(255,255,255,.07)", textDecoration: "none", color: "inherit", opacity: 0, cursor: "pointer", transition: "border-color .3s" }}
                    onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(197,160,89,.3)";const img=(e.currentTarget as HTMLElement).querySelector("img") as HTMLImageElement;if(img)img.style.transform="scale(1.05)";}}
                    onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,.07)";const img=(e.currentTarget as HTMLElement).querySelector("img") as HTMLImageElement;if(img)img.style.transform="scale(1)";}}>
                    <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/10", flexShrink: 0 }}>
                      <img src={feat.img} alt={feat.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .7s ease" }} />
                      <div style={{ position: "absolute", top: "1.25rem", left: "1.25rem" }}>
                        <span style={{ display: "inline-block", padding: ".3rem .85rem", borderRadius: 999, background: `${categoryColors[feat.category]}33`, border: `1px solid ${categoryColors[feat.category]}55`, color: categoryColors[feat.category], fontFamily: "var(--font-label)", fontSize: ".52rem", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase" }}>{feat.category}</span>
                      </div>
                      <div style={{ position: "absolute", top: "1.25rem", right: "1.25rem", padding: ".28rem .75rem", borderRadius: 999, background: "rgba(0,0,0,.5)", backdropFilter: "blur(8px)" }}>
                        <span style={{ fontFamily: "var(--font-label)", fontSize: ".5rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.55)" }}>Featured</span>
                      </div>
                    </div>
                    <div style={{ padding: "2.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
                        <span style={{ fontFamily: "var(--font-label)", fontSize: ".52rem", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(255,255,255,.28)" }}>{feat.date}</span>
                        <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(255,255,255,.2)", display: "inline-block" }} />
                        <span style={{ fontFamily: "var(--font-label)", fontSize: ".52rem", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(255,255,255,.28)" }}>{feat.readTime}</span>
                      </div>
                      <h3 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "clamp(1.2rem, 2.2vw, 2rem)", textTransform: "uppercase", letterSpacing: "-.03em", lineHeight: 1.1, marginBottom: "1rem", color: "#fff" }}>{feat.title}</h3>
                      <p style={{ color: "rgba(255,255,255,.42)", fontSize: ".88rem", lineHeight: 1.8, flex: 1, marginBottom: "2rem" }}>{feat.excerpt}</p>
                      <div style={{ display: "flex", alignItems: "center", gap: ".6rem", color: "#C5A059" }}>
                        <span style={{ fontFamily: "var(--font-label)", fontSize: ".58rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase" }}>Read Article</span>
                        <span className="material-symbols-outlined" style={{ fontSize: 15 }}>arrow_forward</span>
                      </div>
                    </div>
                  </Link>
                );
              })()}

              {/*  blog cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {blogs.filter(b => !b.featured).map(blog => (
                  <Link key={blog.id} href={`/blogs/${blog.id}`} className="blog-anim blog-side-card"
                    style={{ borderRadius: ".375rem", overflow: "hidden", background: "#0a0a0a", border: "1px solid rgba(255,255,255,.07)", textDecoration: "none", color: "inherit", opacity: 0, cursor: "pointer", transition: "border-color .3s" }}
                    onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(197,160,89,.3)";const img=(e.currentTarget as HTMLElement).querySelector("img") as HTMLImageElement;if(img)img.style.transform="scale(1.06)";}}
                    onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,.07)";const img=(e.currentTarget as HTMLElement).querySelector("img") as HTMLImageElement;if(img)img.style.transform="scale(1)";}}>
                    <div className="blog-side-thumb" style={{ position: "relative", overflow: "hidden" }}>
                      <img src={blog.img} alt={blog.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .6s ease" }} />
                      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.25)" }} />
                    </div>
                    <div style={{ padding: "1.75rem 2rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: ".75rem", marginBottom: ".85rem", flexWrap: "wrap" }}>
                          <span style={{ display: "inline-block", padding: ".22rem .6rem", borderRadius: 999, background: `${categoryColors[blog.category]}22`, border: `1px solid ${categoryColors[blog.category]}44`, color: categoryColors[blog.category], fontFamily: "var(--font-label)", fontSize: ".48rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase" }}>{blog.category}</span>
                          <span style={{ fontFamily: "var(--font-label)", fontSize: ".48rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.22)" }}>{blog.date}</span>
                          <span style={{ fontFamily: "var(--font-label)", fontSize: ".48rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.22)" }}>{blog.readTime}</span>
                        </div>
                        <h4 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "clamp(.9rem, 1.4vw, 1.15rem)", textTransform: "uppercase", letterSpacing: "-.02em", lineHeight: 1.2, color: "#fff", marginBottom: ".65rem" }}>{blog.title}</h4>
                        <p style={{ color: "rgba(255,255,255,.35)", fontSize: ".78rem", lineHeight: 1.7 }}>{blog.excerpt.slice(0, 90)}…</p>
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

            {/* Newsletter */}
            <div style={{ marginTop: "5rem", padding: "clamp(1.5rem,4vw,3rem) clamp(1.5rem,4vw,4rem)", background: "rgba(197,160,89,.04)", border: "1px solid rgba(197,160,89,.12)", borderRadius: ".375rem" }}>
              <div className="newsletter-bar">
                <div>
                  <h4 style={{ fontFamily: "var(--font-epilogue), sans-serif", fontWeight: 900, fontSize: "clamp(1rem,1.5vw,1.5rem)", textTransform: "uppercase", letterSpacing: "-.02em", marginBottom: ".5rem" }}>
                    Stay ahead of the <span style={{ color: "#C5A059" }}>regenerative curve.</span>
                  </h4>
                  <p style={{ color: "rgba(255,255,255,.38)", fontSize: ".84rem", lineHeight: 1.7 }}>Monthly insights on sustainable land use, agrivoltaics, and regenerative investment.</p>
                </div>
                <div className="newsletter-input-row">
                  <input type="email" placeholder="your@email.com"
                    style={{ padding: ".85rem 1.5rem", background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.14)", borderRight: "none", borderRadius: ".15rem 0 0 .15rem", color: "#fff", fontFamily: "var(--font-label)", fontSize: ".6rem", letterSpacing: ".1em", outline: "none", width: 240, minWidth: 0 }} />
                  <button style={{ padding: ".85rem 1.75rem", background: "#C5A059", border: "1px solid #C5A059", borderRadius: "0 .15rem .15rem 0", color: "#000", fontFamily: "var(--font-label)", fontSize: ".6rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", cursor: "pointer", whiteSpace: "nowrap", transition: "filter .25s" }}
                    onMouseEnter={e=>((e.currentTarget as HTMLButtonElement).style.filter="brightness(1.12)")}
                    onMouseLeave={e=>((e.currentTarget as HTMLButtonElement).style.filter="none")}>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </W>
        </section>

        {/* QUOTE*/}
        <section ref={quoteRef} style={{ background: "#000", padding: "clamp(5rem,10vw,8rem) 0", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div aria-hidden style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", userSelect: "none" }}>
            <span style={{ fontFamily: "var(--font-epilogue),sans-serif", fontWeight: 900, fontSize: "clamp(5rem,18vw,22rem)", color: "rgba(255,255,255,.018)", textTransform: "uppercase", letterSpacing: "-.05em", lineHeight: 1, whiteSpace: "nowrap" }}>ECOSYSTEM</span>
          </div>
          <W style={{ position: "relative", zIndex: 1 }}>
            <span className="q-anim material-symbols-outlined" style={{ color: "#C5A059", fontSize: 48, display: "block", marginBottom: "2.5rem", opacity: 0 }}>format_quote</span>
            <blockquote className="q-anim" style={{ fontFamily: "var(--font-epilogue), sans-serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.5rem, 4vw, 4.5rem)", lineHeight: 1.2, maxWidth: 820, margin: "0 auto 2.5rem", opacity: 0 }}>
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
    </>
  );
}