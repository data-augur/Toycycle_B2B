import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteUrl } from "@/lib/seo";

const LOOG_COLLECTION_URL = "https://toycycle.co/collections/loog-guitars";

export const metadata: Metadata = {
  title: "Case Study: Loog & Toycycle — Turning Returns into Opportunity",
  description:
    "How Loog partnered with Toycycle for end-to-end returns management: inspection, grading, repackaging, and resale—turning returns from a cost center into revenue recovery and brand safety.",
  openGraph: {
    title: "Case Study: Loog & Toycycle | Toycycle for Brands",
    description:
      "Streamlined returns management for Loog. Revenue recovery, cost savings, and brand-safe resale.",
    url: `${siteUrl}/success-stories/loog`,
  },
  alternates: { canonical: `${siteUrl}/success-stories/loog` },
};

export default function SuccessStoryLoog() {
  return (
    <div className="tc-landing-wrapper">
      {/* Hero */}
      <section className="tc-home-hero tc-case-study-hero">
        <div className="tc-content-container">
          <div className="tc-home-hero-grid">
            <div className="tc-home-hero-content">
              <p className="tc-case-study-label">Case Study</p>
              <h1 className="tc-home-hero-title">
                Loog & Toycycle — Turning Returns into Opportunity
              </h1>
              <p className="tc-home-hero-subtitle">
                How a leading children&apos;s instrument brand turned returns
                management into revenue recovery and brand protection.
              </p>
              <div className="tc-home-hero-ctas">
                <Link href="/contact" className="tc-btn tc-btn-primary">
                  Talk to Our Team
                </Link>
                <Link
                  href="/returns-management"
                  className="tc-btn tc-btn-secondary"
                >
                  Returns Management
                </Link>
                <a
                  href={LOOG_COLLECTION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tc-btn tc-btn-outline"
                >
                  Shop Loog Guitars →
                </a>
              </div>
            </div>
            <div className="tc-home-hero-image">
              <Image
                src="/images/loog_hero.webp"
                alt="Loog guitars and Toycycle returns management partnership – turning returns into opportunity"
                width={600}
                height={400}
                className="tc-hero-img"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partner Snapshot */}
      <section className="tc-case-study-section">
        <div className="tc-content-container">
          <div className="tc-case-study-partner-card tc-case-study-card">
            <div className="tc-case-study-partner-logo">
              <Image
                src="/images/partners/Loog_Logo.webp"
                alt="Loog"
                width={140}
                height={48}
              />
            </div>
            <h2 className="tc-case-study-heading">Partner Snapshot: Loog</h2>
            <p className="tc-home-section-text">
              Loog began as a Master&apos;s thesis project in 2010 at New York
              University, founded by Rafael Atijas to create a truly
              child-friendly guitar. Today, Loog designs guitars and pianos that
              are safe, durable, and genuinely playable for children — not just
              scaled-down adult instruments. With responsibly sourced wood and
              rigorous safety standards, Loog combines quality, innovation, and
              sustainability to inspire young learners worldwide.
            </p>
            <a
              href={LOOG_COLLECTION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tc-case-study-shop-link"
            >
              Shop open-box Loog guitars on Toycycle →
            </a>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="tc-case-study-section-alt">
        <div className="tc-content-container">
          <div className="tc-case-study-content">
            <h2 className="tc-case-study-heading">
              The Challenge: Returns Were Costly and Complex
            </h2>
            <p className="tc-home-section-text">
              Managing returns was a major operational headache for Loog. While
              their 3PL providers handled storage and fulfillment efficiently,
              they weren&apos;t equipped to process returns. Most returned
              instruments were open-box and could not be sold as new, leaving
              Loog with wasted inventory, safety concerns, and mounting
              administrative costs. Returns became a storage liability with no
              clear path to recovery or resale.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="tc-case-study-section">
        <div className="tc-content-container">
          <div className="tc-case-study-content">
            <h2 className="tc-case-study-heading">
              The Solution: Streamlined Returns with Toycycle
            </h2>
            <p className="tc-home-section-text">
              Loog began directing all customer returns to Toycycle,
              transforming a challenging process into a seamless workflow:
            </p>
            <ul className="tc-case-study-list">
              <li>
                <strong>Inspection & Safety:</strong> Each returned instrument
                is carefully checked for condition and compliance.
              </li>
              <li>
                <strong>Real-Time Notification:</strong> Loog is updated on
                every return via a mutually agreed communication channel.
              </li>
              <li>
                <strong>Grading & Repackaging:</strong> Items are graded,
                priced, and repackaged as needed.
              </li>
              <li>
                <strong>Storage, Relisting & Fulfillment:</strong> Toycycle
                manages inventory, listings, and shipping, with full visibility
                through Loog&apos;s dedicated dashboard.
              </li>
              <li>
                <strong>Revenue Sharing & Customer Service:</strong> Sales
                revenue is shared transparently, and Toycycle handles all
                post-sale customer support to protect Loog&apos;s brand.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Impact */}
      <section className="tc-case-study-section-alt">
        <div className="tc-content-container">
          <div className="tc-case-study-content">
            <h2 className="tc-case-study-heading">
              The Impact: Recovering Value and Protecting the Brand
            </h2>
            <p className="tc-home-section-text">
              Partnering with Toycycle turned returns from a cost center into a
              source of value:
            </p>
            <div className="tc-case-study-outcome-grid">
              <div className="tc-case-study-outcome-card tc-case-study-card">
                <h3>Revenue Recovery</h3>
                <p>
                  Open-box instruments are graded and resold instead of
                  discarded.
                </p>
              </div>
              <div className="tc-case-study-outcome-card tc-case-study-card">
                <h3>Cost Savings</h3>
                <p>
                  Reduced administrative burden and inefficiencies compared to
                  handling returns internally.
                </p>
              </div>
              <div className="tc-case-study-outcome-card tc-case-study-card">
                <h3>Brand Safety & Peace of Mind</h3>
                <p>
                  Each item is managed professionally, protecting Loog&apos;s
                  reputation.
                </p>
              </div>
              <div className="tc-case-study-outcome-card tc-case-study-card">
                <h3>Sustainability</h3>
                <p>
                  More instruments are kept out of landfills, supporting
                  Loog&apos;s eco-conscious mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters + CTA */}
      <section className="tc-case-study-cta-section">
        <div className="tc-content-container">
          <div className="tc-case-study-content tc-case-study-cta">
            <h2 className="tc-case-study-heading">
              Why It Matters: A Partner You Can Trust
            </h2>
            <p className="tc-home-section-text">
              For brands like Loog, Toycycle provides a reliable, end-to-end
              solution for returns management. By recovering value from returned
              inventory, ensuring brand-safe handling, and keeping products out
              of landfills, Toycycle delivers efficiency, impact, and peace of
              mind. What was once an operational headache is now a strategic
              opportunity for growth and sustainability.
            </p>
            <div className="tc-case-study-cta-buttons">
              <Link href="/contact" className="tc-btn tc-btn-primary">
                Talk to Our Team
              </Link>
              <Link
                href="/returns-management"
                className="tc-btn tc-btn-secondary"
              >
                Learn About Returns Management
              </Link>
              <a
                href={LOOG_COLLECTION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="tc-btn tc-btn-outline"
              >
                Shop Loog Guitars →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
