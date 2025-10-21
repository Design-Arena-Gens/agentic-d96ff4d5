import dynamic from "next/dynamic";

const HeroCanvas = dynamic(() => import("../components/HeroCanvas").then((mod) => mod.HeroCanvas), {
  ssr: false,
  loading: () => <div className="hero-canvas" aria-hidden />
});

const services = [
  {
    title: "Immersive Websites",
    description:
      "Bespoke web experiences engineered for performance, accessibility, and conversion across every device.",
    icon: "✨"
  },
  {
    title: "Interactive Product Demos",
    description:
      "Bring your product to life with WebGL, 3D storytelling, and purposeful micro-interactions that wow audiences.",
    icon: "🧭"
  },
  {
    title: "Design Systems & Branding",
    description:
      "Consistent, scalable design languages crafted to empower marketing teams and accelerate product delivery.",
    icon: "🎨"
  }
];

const process = [
  {
    step: "Discover",
    summary:
      "Workshops and strategy sprints uncover what makes your brand spark. We translate that into a clear launch plan."
  },
  {
    step: "Design",
    summary:
      "We explore visual territories, build interactive prototypes, and validate the experience with real users."
  },
  {
    step: "Develop",
    summary:
      "Our engineers craft pixel-perfect, production-ready experiences backed by modern frameworks and clean code."
  },
  {
    step: "Launch & Grow",
    summary:
      "Analytics, experimentation, and ongoing optimization keep your experience ahead of the curve long after launch."
  }
];

const portfolio = [
  {
    industry: "Fintech Platform",
    title: "LucentPay",
    copy: "Onboarded 40k new users in 4 months with an interactive dashboard experience and personalized onboarding."
  },
  {
    industry: "SaaS Intelligence",
    title: "SignalStack",
    copy: "Increased product qualified leads by 62% through motion-infused storytelling and a modular design system."
  },
  {
    industry: "Luxury Retail",
    title: "Aria Atelier",
    copy: "3D lookbooks and virtual try-on flows translating into a 4.2x lift in time spent on site."
  }
];

const testimonials = [
  {
    name: "Mara Jensen",
    role: "VP Marketing, Northwind",
    quote:
      "NovaForge didn't just ship a site — they solved a revenue problem. Our conversion curve has never looked healthier."
  },
  {
    name: "Ilan Drake",
    role: "Founder, Relay Labs",
    quote:
      "The team blends craft and technology flawlessly. They translated dense product messaging into a cinematic launch."
  },
  {
    name: "Priya Kulkarni",
    role: "CXO, Horizon Collective",
    quote:
      "We now have a living design system and interactive sales demos that close enterprise deals 2x faster."
  }
];

const partners = [
  "Vanta",
  "Linear",
  "Amplitude",
  "Framer",
  "Supabase",
  "Sanity"
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-overlay" />
        <HeroCanvas />
        <div className="inner" style={{ position: "relative", zIndex: 2 }}>
          <div className="hero-content">
            <span className="pill">NovaForge Studios</span>
            <h1 className="hero-title">
              Web experiences engineered to feel futuristic, yet unmistakably human.
            </h1>
            <p className="hero-subtitle">
              We design and develop immersive digital platforms, 3D product stories, and lightning-fast web apps
              that convert curiosity into customers.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              <a className="cta-button" href="#contact">
                Start a project
              </a>
              <a
                className="cta-button" style={{ background: "rgba(8, 16, 43, 0.75)", color: "#f1f7ff", border: "1px solid rgba(142, 197, 255, 0.4)", boxShadow: "none" }}
                href="#work"
              >
                Explore our work
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <strong>+120</strong>
                <span>Launches deployed</span>
              </div>
              <div className="hero-stat">
                <strong>2.8x</strong>
                <span>Average ROI</span>
              </div>
              <div className="hero-stat">
                <strong>98%</strong>
                <span>Client retention</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="inner">
          <div className="section-heading">
            <span className="section-label">WHAT WE DO</span>
            <h2 className="section-title">An end-to-end team for digital flagship experiences</h2>
            <p className="section-description">
              Strategy, design, and engineering working in harmony to craft interactive destinations your audience won&apos;t forget.
            </p>
          </div>
          <div className="grid grid-3">
            {services.map((service) => (
              <article key={service.title} className="glass-card shine">
                <span style={{ fontSize: "2rem" }}>{service.icon}</span>
                <h3 style={{ fontSize: "1.4rem", marginBottom: "12px" }}>{service.title}</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" style={{ paddingTop: 40 }}>
        <div className="inner">
          <div
            className="glass-card gradient-border"
            style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center", justifyContent: "space-between" }}
          >
            <p style={{ color: "var(--text-secondary)", maxWidth: 260 }}>
              Trusted by product teams building the next generation of digital products.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "18px", flex: 1 }}>
              {partners.map((partner) => (
                <span key={partner} className="badge" style={{ justifySelf: "center" }}>
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="approach">
        <div className="inner">
          <div className="split">
            <div>
              <div className="section-heading">
                <span className="section-label">OUR APPROACH</span>
                <h2 className="section-title">Proven playbooks, tailored to your ambition</h2>
                <p className="section-description">
                  A collaborative process centered on clarity, velocity, and iterative experimentation — because the
                  best experiences are never born from guesswork.
                </p>
              </div>
              <div className="process-steps">
                {process.map((item) => (
                  <div key={item.step} className="process-step">
                    <strong>{item.step}</strong>
                    <p>{item.summary}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="illustration">
              <div className="glass-card" style={{ padding: "38px", position: "relative", zIndex: 1 }}>
                <div style={{ display: "grid", gap: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="badge">Live dashboard</span>
                    <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Collaboration feed</span>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gap: "14px",
                      background: "rgba(9, 16, 41, 0.75)",
                      borderRadius: "18px",
                      padding: "24px",
                      border: "1px solid rgba(142, 197, 255, 0.25)"
                    }}
                  >
                    {[
                      {
                        title: "Experience audit",
                        detail: "Friction score improved from 76 → 91"
                      },
                      {
                        title: "Prototype validation",
                        detail: "User delight rating +34%"
                      },
                      {
                        title: "Launch readiness",
                        detail: "Content pipeline approved"
                      }
                    ].map((entry) => (
                      <div key={entry.title} style={{ display: "grid", gap: "4px" }}>
                        <span style={{ fontWeight: 600 }}>{entry.title}</span>
                        <span style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>{entry.detail}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ color: "var(--accent)", fontWeight: 600 }}>Velocity Mode</span>
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>Sprints every 2 weeks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work">
        <div className="inner">
          <div className="section-heading">
            <span className="section-label">FEATURED WORK</span>
            <h2 className="section-title">Stories we&apos;re proud of</h2>
            <p className="section-description">
              Crafted for forward-thinking companies redefining finance, storytelling, commerce, and SaaS.
            </p>
          </div>
          <div className="portfolio-grid">
            {portfolio.map((project) => (
              <article key={project.title} className="portfolio-card">
                <span>{project.industry}</span>
                <h4>{project.title}</h4>
                <p>{project.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="inner">
          <div className="section-heading">
            <span className="section-label">CLIENT LOVE</span>
            <h2 className="section-title">Teams that scale with NovaForge</h2>
          </div>
          <div className="testimonials">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="testimonial">
                <blockquote>{testimonial.quote}</blockquote>
                <figcaption>
                  <cite>{testimonial.name}</cite>
                  <span>{testimonial.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="inner">
          <div className="cta-section">
            <span className="pill" style={{ margin: "0 auto" }}>
              Let&apos;s build something magnetic
            </span>
            <h2>Ready to prototype your next launch?</h2>
            <p>
              Tell us about your roadmap and we&apos;ll craft a custom growth plan with shippable solutions in under two weeks.
            </p>
            <a className="cta-button" href="mailto:hello@novaforge.studio">
              hello@novaforge.studio
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="inner">
          <div className="footer-content">
            <span>© {new Date().getFullYear()} NovaForge Studios. All rights reserved.</span>
            <div className="footer-links">
              <a href="#services">Services</a>
              <a href="#work">Work</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
