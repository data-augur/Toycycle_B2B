import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteUrl, defaultOgImage, mainBrandUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "Toy Inventory Recovery & Returns Management | Toycycle",
  },
  description:
    "Turn B-stock, excess, and returned toys into revenue without liquidation or grey-market risk. Safe, traceable resale solutions for toy brands.",
  openGraph: {
    title: "Toy Inventory Recovery & Returns Management | Toycycle",
    description:
      "Turn B-stock, excess, and returned toys into revenue without liquidation or grey-market risk. Safe, traceable resale solutions for toy brands.",
    url: siteUrl,
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Toycycle for Brands",
      },
    ],
  },
  alternates: { canonical: siteUrl },
};

function buildJsonLd(base: string) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Toycycle",
      url: mainBrandUrl,
      logo: `${base}/images/partners/toycycle_logo.webp`,
      description:
        "Inventory recovery and resale solutions for toy brands. Turn B-stock, returns, and excess inventory into cash—without liquidation or grey market risk.",
      sameAs: [mainBrandUrl, base],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        url: `${base}/contact`,
        areaServed: "US",
        name: "Toycycle for Brands",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Toycycle for Brands",
      url: base,
      description:
        "B2B inventory recovery and resale solutions for toy brands.",
      publisher: { "@id": `${mainBrandUrl}/#organization` },
    },
    getFaqSchema(base),
  ];
}

function getFaqSchema(pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: pageUrl,
    mainEntity: [
      {
        "@type": "Question",
        name: "Will our toys be sold through liquidation or grey-market channels?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Toycycle provides a brand-safe alternative to toy liquidation. Your B-stock, returns, and excess inventory are sold only through approved channels — never liquidators, brokers, or uncontrolled secondary marketplaces. This protects brand value, pricing integrity, and customer trust.",
        },
      },
      {
        "@type": "Question",
        name: "Who controls resale pricing and discounts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You do. Brands maintain full pricing and discount control across all Toycycle resale programs. We operate within guardrails you approve, ensuring resale supports your primary sales channels rather than competing with them.",
        },
      },
      {
        "@type": "Question",
        name: "Do we have to ship inventory to Toycycle?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not necessarily. Toycycle Resale Direct™ lets brands sell B-stock and excess inventory by dropshipping directly from their own warehouse. End-to-End Returns Management allows you to ship customer returns to Toycycle, where we manage QA, resale, and reporting. Many brands start with dropship and expand as volume grows.",
        },
      },
      {
        "@type": "Question",
        name: "How does Toycycle handle toy safety, QA, and recalls?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Toycycle is built specifically for toy and children's product resale. Our processes are safety-first, recall-aware, and traceability-driven, ensuring only approved inventory reaches families. This category-specific approach is critical for brands with strict compliance requirements.",
        },
      },
      {
        "@type": "Question",
        name: "What types of toy inventory can be resold?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Toycycle is designed for B-stock and open-box toys, customer returns, and excess or aging inventory. We work with your team to determine eligibility, pricing strategy, and resale positioning for each inventory type.",
        },
      },
      {
        "@type": "Question",
        name: "How much does Toycycle cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There are no upfront platform fees to get started. Commercial terms vary based on inventory type, volume, and service level — and are structured to recover more value than traditional toy liquidation or wholesale offloading.",
        },
      },
      {
        "@type": "Question",
        name: "How is Toycycle different from liquidation or general recommerce platforms?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Liquidation moves inventory quickly, but sacrifices control. Toycycle helps brands recover value from toy returns and excess inventory while maintaining control over pricing, channels, and brand presentation — with no grey-market exposure.",
        },
      },
    ],
  };
}

export default function Home() {
  return (
    <div className="tc-landing-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildJsonLd(siteUrl)),
        }}
      />
      {/* Hero Section */}
      <section className="tc-home-hero">
        <div className="tc-content-container">
          <div className="tc-home-hero-grid">
            <div className="tc-home-hero-content">
              <h1 className="tc-home-hero-title">
                Inventory Recovery for Toy Brands
              </h1>
              <p className="tc-home-hero-subtitle">
                Turn B-stock, returns, and excess inventory into cash–without
                liquidation or grey market risk.
              </p>
              <div className="tc-home-hero-ctas">
                <Link href="/contact" className="tc-btn tc-btn-primary">
                  👉 Talk to Our Team
                </Link>
                <Link href="#services" className="tc-btn tc-btn-secondary">
                  Explore Solutions
                </Link>
              </div>
            </div>
            <div className="tc-home-hero-image">
              <Image
                src="/images/partners/Hero_Home.webp"
                alt="Inventory Recovery & Resale Infrastructure"
                width={600}
                height={400}
                className="tc-hero-img"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="tc-home-section-three">
        <div className="tc-content-container">
          <div className="tc-home-section-three-content">
            <p className="tc-home-community-text">
              Built for toy brands with safety, compliance, and brand control at
              the core
            </p>
            <div className="tc-partners-wrapper">
              <div className="tc-partners-grid">
                <div className="tc-partner-logo">
                  <Image
                    src="/images/partners/HABA_Logo.webp"
                    alt="HABA"
                    width={220}
                    height={90}
                    className="tc-partner-img"
                  />
                </div>
                <div className="tc-partner-logo">
                  <Image
                    src="/images/partners/waytoplay_logo.webp"
                    alt="Way to Play"
                    width={180}
                    height={90}
                    className="tc-partner-img"
                  />
                </div>
                <div className="tc-partner-logo">
                  <Image
                    src="/images/partners/Ekobo.webp"
                    alt="Ekobo"
                    width={180}
                    height={90}
                    className="tc-partner-img"
                  />
                </div>
                <div className="tc-partner-logo">
                  <Image
                    src="/images/partners/Janod_Logo.webp"
                    alt="Janod"
                    width={180}
                    height={90}
                    className="tc-partner-img"
                  />
                </div>
                <div className="tc-partner-logo">
                  <Image
                    src="/images/partners/Loog_Logo.webp"
                    alt="Loog"
                    width={180}
                    height={90}
                    className="tc-partner-img"
                  />
                </div>
                <div className="tc-partner-logo">
                  <Image
                    src="/images/partners/PlanToys_Logo.webp"
                    alt="PlanToys"
                    width={180}
                    height={90}
                    className="tc-partner-img"
                  />
                </div>
                <div className="tc-partner-logo">
                  <Image
                    src="/images/partners/tytantoys_logo.webp"
                    alt="Tytan Toys"
                    width={180}
                    height={90}
                    className="tc-partner-img"
                  />
                </div>
                {/* Duplicate logos for seamless loop */}
                <div className="tc-partner-logo">
                  <Image
                    src="/images/partners/HABA_Logo.webp"
                    alt="HABA"
                    width={220}
                    height={90}
                    className="tc-partner-img"
                  />
                </div>
                <div className="tc-partner-logo">
                  <Image
                    src="/images/partners/waytoplay_logo.webp"
                    alt="Way to Play"
                    width={180}
                    height={90}
                    className="tc-partner-img"
                  />
                </div>
                <div className="tc-partner-logo">
                  <Image
                    src="/images/partners/Ekobo.webp"
                    alt="Ekobo"
                    width={180}
                    height={90}
                    className="tc-partner-img"
                  />
                </div>
                <div className="tc-partner-logo">
                  <Image
                    src="/images/partners/Janod_Logo.webp"
                    alt="Janod"
                    width={180}
                    height={90}
                    className="tc-partner-img"
                  />
                </div>
                <div className="tc-partner-logo">
                  <Image
                    src="/images/partners/Loog_Logo.webp"
                    alt="Loog"
                    width={180}
                    height={90}
                    className="tc-partner-img"
                  />
                </div>
                <div className="tc-partner-logo">
                  <Image
                    src="/images/partners/PlanToys_Logo.webp"
                    alt="PlanToys"
                    width={180}
                    height={90}
                    className="tc-partner-img"
                  />
                </div>
                <div className="tc-partner-logo">
                  <Image
                    src="/images/partners/tytantoys_logo.webp"
                    alt="Tytan Toys"
                    width={180}
                    height={90}
                    className="tc-partner-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - The Problem */}
      <section className="tc-home-section-problem">
        <div className="tc-content-container">
          <div className="tc-problem-content">
            <div className="tc-problem-label">The Problem</div>
            <div className="tc-problem-points-list">
              <div className="tc-problem-point-row">
                <div className="tc-problem-point-icon">📉</div>
                <p className="tc-problem-point-text">
                  Returns, open-box, and excess inventory pile up, cost money
                  and drain margin
                </p>
              </div>
              <div className="tc-problem-point-row">
                <div className="tc-problem-point-icon">✅</div>
                <p className="tc-problem-point-text">
                  Not all 3PL’s can handle toys that demand higher QA,
                  traceability, and trust
                </p>
              </div>
              <div className="tc-problem-point-row">
                <div className="tc-problem-point-icon">💸</div>
                <p className="tc-problem-point-text">
                  The high cost of returns leads some brands to give product
                  away for free
                </p>
              </div>
              <div className="tc-problem-point-row">
                <div className="tc-problem-point-icon">⚠️</div>
                <p className="tc-problem-point-text">
                  Liquidation removes control, and erodes brand value and
                  pricing integrity
                </p>
              </div>
              <div className="tc-problem-point-row">
                <div className="tc-problem-point-icon">🔒</div>
                <p className="tc-problem-point-text">
                  Uncontrolled secondary markets introduce grey-market and
                  safety risk
                </p>
              </div>
            </div>
            <h2 className="tc-problem-headline">
              Demand Exists.
              <br />
              The challenge is finding the right partner for inventory recovery
            </h2>
          </div>
        </div>
      </section>

      {/* Fourth Section - The Toycycle Difference */}
      <section className="tc-home-section-difference">
        <div className="tc-content-container">
          <div className="tc-difference-content">
            <div className="tc-difference-label">The Toycycle Difference</div>
            <h2 className="tc-difference-headline">
              Purpose-Built Inventory Recovery
            </h2>
            <div className="tc-difference-pillars-grid">
              <div className="tc-difference-pillar-card">
                <div className="tc-difference-pillar-icon">🛡️</div>
                <h3 className="tc-difference-pillar-title">
                  Category-Specific QA
                </h3>
                <p className="tc-difference-pillar-text">
                  Safety and recall-aware workflows
                </p>
              </div>
              <div className="tc-difference-pillar-card">
                <div className="tc-difference-pillar-icon">🔐</div>
                <h3 className="tc-difference-pillar-title">
                  Brand-Safe Resale
                </h3>
                <p className="tc-difference-pillar-text">
                  No uncontrolled secondary channels
                </p>
              </div>
              <div className="tc-difference-pillar-card">
                <div className="tc-difference-pillar-icon">👨‍👩‍👧‍👦</div>
                <h3 className="tc-difference-pillar-title">Built-In Demand</h3>
                <p className="tc-difference-pillar-text">
                  From a trusted parent marketplace
                </p>
              </div>
            </div>
            <p className="tc-difference-footer-text">
              Choose the level of support you need — from no-overhead dropship
              to end-to-end resale management.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Overview Section - Section 5 */}
      <section className="tc-solutions" id="services">
        <div className="tc-content-container">
          <h2 className="tc-section-title">Solutions Overview</h2>

          <div className="tc-solutions-grid">
            {/* Solution 1: Toycycle Resale Direct™ */}
            <div className="tc-solution-card">
              <div className="tc-solution-badge">
                <span className="tc-badge-star">⭐</span>
                <span>Most brands start here</span>
              </div>
              <div className="tc-solution-card-inner">
                <div className="tc-solution-header">
                  <div className="tc-solution-icon">📦</div>
                  <h3 className="tc-solution-title">
                    Toycycle Resale Direct
                    <sup
                      style={{
                        fontSize: "0.55em",
                        verticalAlign: "super",
                        marginLeft: "3px",
                      }}
                    >
                      TM
                    </sup>
                  </h3>
                </div>
                <p className="tc-solution-description">
                  No risk solution enables brands to sell b-stock or excess
                  inventory and dropship directly from their warehouse.
                </p>
                <ul className="tc-solution-features">
                  <li>Maintain pricing and channel control</li>
                  <li>Reach real families, not liquidators</li>
                  <li>Reduce loss from returns</li>
                  <li>Eliminate grey-market and safety risks</li>
                </ul>
                <div className="tc-solution-cta">
                  <Link
                    href="/b-stock-drop-ship"
                    className="tc-btn tc-btn-primary"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

            {/* Solution 2: Returns Management */}
            <div className="tc-solution-card">
              <div className="tc-solution-card-inner">
                <div className="tc-solution-header">
                  <div className="tc-solution-icon">🔄</div>
                  <h3 className="tc-solution-title">
                    End to End Returns Management
                  </h3>
                </div>
                <p className="tc-solution-description">
                  Seamlessly expand your operations team by shipping customer
                  returns directly to us. We&apos;ll handle the rest.
                  <br />
                  Get the same benefits as Toycycle Resale Direct plus:
                </p>
                <ul className="tc-solution-features">
                  <li>Full-Cycle Logistics</li>
                  <li>Zero-Fee Processing</li>
                  <li>Resale by Toycycle</li>
                </ul>
                <div className="tc-solution-cta">
                  <Link
                    href="/returns-management"
                    className="tc-btn tc-btn-primary"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resale-as-a-Service Section */}
      <section className="tc-resale-service-section">
        <div className="tc-content-container">
          <h2 className="tc-section-title">
            Looking for a complete resale solution?
          </h2>
          <p className="tc-resale-service-description">
            We offer a brand-owned Resale-as-a-Service program with white label
            tech and ops. Turnkey solution, zero grey-market exposure, growth
            through resale.
          </p>
          <div className="tc-resale-service-cta">
            <Link
              href="/resale-as-a-service"
              className="tc-btn tc-btn-primary"
              title="Learn about Toycycle Resale-as-a-Service for toy brands"
            >
              Learn more about Resale as a Service
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="tc-testimonials">
        <div className="tc-content-container">
          <h2 className="tc-section-title">What our Partners Say</h2>
          <div className="tc-testimonials-grid">
            <div className="tc-testimonial-card">
              <div className="tc-testimonial-header">
                <div className="tc-testimonial-logo">
                  <Image
                    src="/images/partners/PlanToys_Logo.webp"
                    alt="PlanToys"
                    width={120}
                    height={60}
                    className="tc-testimonial-logo-img"
                  />
                </div>
                <div className="tc-testimonial-quote">
                  &ldquo;Turnkey Solution&rdquo;
                </div>
              </div>
              <p className="tc-testimonial-text">
                &ldquo;Working with Toycycle has been an absolute game-changer
                for PlanToys. From the very beginning, the onboarding process
                was seamless and straightforward, allowing us to get started
                without any delays. Their team excels in clear and consistent
                communication, keeping us informed every step of the way.
              </p>
              <p className="tc-testimonial-text">
                The monthly reports on sales and inventory are comprehensive and
                easy to understand, providing us with valuable insights to make
                informed decisions on what consumers were looking for in
                recommerce. What truly sets Toycycle apart is their turnkey
                solution for giving products a second life. They have an
                exceptional ability to find these items a new, loving home,
                ensuring they stay in circulation and continue to bring joy to
                new families.
              </p>
              <p className="tc-testimonial-text">
                We couldn&apos;t be more pleased with the partnership and look
                forward to continuing our collaboration.&rdquo;
              </p>
              <div className="tc-testimonial-author">
                — Rudy Valenta, VP of Americas, PlanToys
              </div>
            </div>

            <div className="tc-testimonial-card">
              <div className="tc-testimonial-header">
                <div className="tc-testimonial-logo">
                  <Image
                    src="/images/partners/Loog_Logo.webp"
                    alt="Loog"
                    width={120}
                    height={60}
                    className="tc-testimonial-logo-img"
                  />
                </div>
                <div className="tc-testimonial-quote">
                  &ldquo;Win-Win for Everyone&rdquo;
                </div>
              </div>
              <p className="tc-testimonial-text">
                &ldquo;Working with Toycycle has been a seamless and rewarding
                experience. Their team is consistently responsive and
                solution-oriented, making it easy to address any needs we have.
                The simplicity of their returns process has allowed us to
                maintain the integrity of our new inventory while adding value
                to our returned products, ensuring that nothing goes to waste.
              </p>
              <p className="tc-testimonial-text">
                Our collaboration with Toycycle is truly a win-win for everyone
                involved. Our customers benefit from knowing their returns are
                given a second life, we enjoy a streamlined returns process, and
                Toycycle continues to excel in their mission of sustainability.
                We couldn&apos;t ask for a better partner in this
                endeavor.&rdquo;
              </p>
              <div className="tc-testimonial-author">
                — Edgard Barilas, Founder and COO, Loog
              </div>
            </div>

            <div className="tc-testimonial-card">
              <div className="tc-testimonial-header">
                <div className="tc-testimonial-logo">
                  <Image
                    src="/images/partners/Janod_Logo.webp"
                    alt="Janod"
                    width={120}
                    height={60}
                    className="tc-testimonial-logo-img"
                  />
                </div>
                <div className="tc-testimonial-quote">
                  &ldquo;Positive Impact&rdquo;
                </div>
              </div>
              <p className="tc-testimonial-text">
                &ldquo;We are thrilled to partner with Toycycle. Their
                dedication to giving toys a second life perfectly aligns with
                our company&apos;s sustainability efforts. The convenience of
                their platform makes it easy for us to offer our toys, ensuring
                a seamless experience.
              </p>
              <p className="tc-testimonial-text">
                They handle everything from ordering to selling, making the
                process hassle-free for us. We look forward to continuing our
                collaboration with Toycycle and making a positive impact
                together.&rdquo;
              </p>
              <div className="tc-testimonial-author">
                — Sebastian Tolosa, Marketing Coordinator Juratoys
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="tc-faq" aria-labelledby="faq-heading">
        <div className="tc-content-container tc-center">
          <h2 id="faq-heading" className="tc-section-title">
            Frequently Asked Questions
          </h2>
          <p className="tc-faq-intro">
            Questions about toy returns, B-stock resale, or excess inventory
            recovery? Here&apos;s how Toycycle helps brands recover value without
            liquidation risk.
          </p>
          <div className="tc-faq-grid">
            <div className="tc-faq-item">
              <span className="tc-faq-question">
                Will our toys be sold through liquidation or grey-market
                channels?
              </span>
              <p className="tc-faq-answer">
                No. Toycycle provides a brand-safe alternative to toy
                liquidation. Your B-stock, returns, and excess inventory are
                sold only through approved channels — never liquidators, brokers,
                or uncontrolled secondary marketplaces. This protects brand
                value, pricing integrity, and customer trust.
              </p>
            </div>
            <div className="tc-faq-item">
              <span className="tc-faq-question">
                Who controls resale pricing and discounts?
              </span>
              <p className="tc-faq-answer">
                You do. Brands maintain full pricing and discount control across
                all Toycycle resale programs. We operate within guardrails you
                approve, ensuring resale supports your primary sales channels
                rather than competing with them.
              </p>
            </div>
            <div className="tc-faq-item">
              <span className="tc-faq-question">
                Do we have to ship inventory to Toycycle?
              </span>
              <p className="tc-faq-answer">
                Not necessarily. Toycycle Resale Direct™ lets brands sell
                B-stock and excess inventory by dropshipping directly from their
                own warehouse. End-to-End Returns Management allows you to ship
                customer returns to Toycycle, where we manage QA, resale, and
                reporting. Many brands start with dropship and expand as volume
                grows.
              </p>
            </div>
            <div className="tc-faq-item">
              <span className="tc-faq-question">
                How does Toycycle handle toy safety, QA, and recalls?
              </span>
              <p className="tc-faq-answer">
                Toycycle is built specifically for toy and children&apos;s
                product resale. Our processes are safety-first, recall-aware,
                and traceability-driven, ensuring only approved inventory reaches
                families. This category-specific approach is critical for brands
                with strict compliance requirements.
              </p>
            </div>
            <div className="tc-faq-item">
              <span className="tc-faq-question">
                What types of toy inventory can be resold?
              </span>
              <p className="tc-faq-answer">
                Toycycle is designed for B-stock and open-box toys, customer
                returns, and excess or aging inventory. We work with your team to
                determine eligibility, pricing strategy, and resale positioning
                for each inventory type.
              </p>
            </div>
            <div className="tc-faq-item">
              <span className="tc-faq-question">
                How much does Toycycle cost?
              </span>
              <p className="tc-faq-answer">
                There are no upfront platform fees to get started. Commercial
                terms vary based on inventory type, volume, and service level —
                and are structured to recover more value than traditional toy
                liquidation or wholesale offloading.
              </p>
            </div>
            <div className="tc-faq-item">
              <span className="tc-faq-question">
                How is Toycycle different from liquidation or general recommerce
                platforms?
              </span>
              <p className="tc-faq-answer">
                Liquidation moves inventory quickly, but sacrifices control.
                Toycycle helps brands recover value from toy returns and excess
                inventory while maintaining control over pricing, channels, and
                brand presentation — with no grey-market exposure.
              </p>
            </div>
          </div>
          <p className="tc-faq-cta-text">
            Have a specific returns or excess inventory challenge?{" "}
            <Link href="/contact" className="tc-faq-cta-link">
              👉 Talk to our team
            </Link>{" "}
            to explore the right recovery model for your brand.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="tc-home-cta">
        <div className="tc-content-container tc-center">
          <h2 className="tc-cta-title">
            Start Recovering Value from Your Inventory
          </h2>
          <p className="tc-cta-text">
            Join leading toy and baby brands who trust Toycycle to transform
            returns and excess inventory into revenue—without the risks of
            liquidation or grey markets.
          </p>
          <div className="tc-cta-buttons">
            <Link href="/contact" className="tc-btn tc-btn-primary">
              Talk to Our Team
            </Link>
            <Link href="#services" className="tc-btn tc-btn-secondary">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
