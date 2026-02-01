import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteUrl } from "@/lib/seo";

const PLANTOYS_COLLECTION_URL = "https://toycycle.co/collections/plantoys";

const pageTitle =
  "Case Study: PlanToys & Toycycle — Closing the Loop Across the Full Product Lifecycle";
const pageDescription =
  "How PlanToys partnered with Toycycle for circular returns and resale: sustainability beyond manufacturing, waste reduction, and brand integrity across the full product lifecycle.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "PlanToys",
    "Toycycle",
    "case study",
    "circular economy",
    "returns management",
    "sustainable toys",
    "resale",
    "B2B",
    "inventory recovery",
  ],
  openGraph: {
    type: "article",
    title: pageTitle,
    description: pageDescription,
    url: `${siteUrl}/success-stories/plantoys`,
    siteName: "Toycycle for Brands",
    images: [
      {
        url: `${siteUrl}/images/plantoys_hero.webp`,
        width: 1200,
        height: 630,
        alt: "PlanToys and Toycycle circular resale partnership – closing the loop across the full product lifecycle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
  alternates: { canonical: `${siteUrl}/success-stories/plantoys` },
  robots: { index: true, follow: true },
};

export default function SuccessStoryPlanToys() {
  return (
    <article className="tc-landing-wrapper" aria-label="PlanToys case study">
      {/* Hero – single H1 for the page */}
      <section
        className="tc-home-hero tc-case-study-hero"
        aria-labelledby="case-study-title"
      >
        <div className="tc-content-container">
          <div className="tc-home-hero-grid">
            <div className="tc-home-hero-content">
              <p className="tc-case-study-label">Case Study</p>
              <h1 id="case-study-title" className="tc-home-hero-title">
                PlanToys & Toycycle — Closing the Loop Across the Full Product
                Lifecycle
              </h1>
              <p className="tc-home-hero-subtitle">
                How a sustainability-first toy brand extended its mission beyond
                manufacturing into returns and circular resale.
              </p>
              <div className="tc-home-hero-ctas">
                <Link
                  href="/contact"
                  className="tc-btn tc-btn-primary"
                  title="Contact Toycycle for Brands about returns and resale"
                >
                  Talk to Our Team
                </Link>
                <Link
                  href="/returns-management"
                  className="tc-btn tc-btn-secondary"
                  title="Learn about Toycycle Returns Management for toy brands"
                >
                  Returns Management
                </Link>
                <a
                  href={PLANTOYS_COLLECTION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tc-btn tc-btn-outline"
                  title="Shop PlanToys sustainable wood toys on Toycycle (opens in new tab)"
                >
                  Shop PlanToys →
                </a>
              </div>
            </div>
            <figure className="tc-home-hero-image">
              <Image
                src="/images/plantoys_hero.webp"
                alt="PlanToys sustainable wood toys and Toycycle circular resale partnership – closing the loop across the full product lifecycle"
                width={600}
                height={400}
                className="tc-hero-img"
                priority
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Partner Snapshot */}
      <section
        className="tc-case-study-section"
        aria-labelledby="partner-snapshot-heading"
      >
        <div className="tc-content-container">
          <div className="tc-case-study-partner-card tc-case-study-card">
            <div className="tc-case-study-partner-logo">
              <Image
                src="/images/partners/PlanToys_Logo.webp"
                alt="PlanToys – sustainable wood toys brand logo"
                width={160}
                height={48}
              />
            </div>
            <h2 id="partner-snapshot-heading" className="tc-case-study-heading">
              Partner Snapshot: PlanToys
            </h2>
            <p className="tc-home-section-text">
              PlanToys is a globally respected toy brand known for its deep
              commitment to sustainability, ethical manufacturing, and child
              development. From responsibly sourced rubberwood to non-toxic dyes
              and energy-efficient production, sustainability is embedded into
              every stage of its manufacturing process. For PlanToys,
              environmental responsibility does not end at the factory — it
              extends through the full lifecycle of every toy they create.
            </p>
            <a
              href={PLANTOYS_COLLECTION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tc-case-study-shop-link"
              title="Shop PlanToys sustainable wood toys on Toycycle (opens in new tab)"
            >
              Shop PlanToys on Toycycle →
            </a>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section
        className="tc-case-study-section-alt"
        aria-labelledby="challenge-heading"
      >
        <div className="tc-content-container">
          <div className="tc-case-study-content">
            <h2 id="challenge-heading" className="tc-case-study-heading">
              The Challenge: Sustainability Beyond the Factory
            </h2>
            <p className="tc-home-section-text">
              Despite building one of the most responsible manufacturing systems
              in the toy industry, PlanToys faced a challenge common to many
              growing brands: excess inventory, open-box items, and customer
              returns.
            </p>
            <p className="tc-home-section-text">
              As a sustainability-first company, PlanToys viewed these products
              as part of their responsibility — not as waste to be discarded.
              Leaving usable toys idle in storage or sending them to landfills
              conflicted directly with the brand&apos;s values. PlanToys needed
              a solution that ensured products remained safe, professionally
              handled, and ultimately played with by children.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section
        className="tc-case-study-section"
        aria-labelledby="solution-heading"
      >
        <div className="tc-content-container">
          <div className="tc-case-study-content">
            <h2 id="solution-heading" className="tc-case-study-heading">
              The Solution: A Circular Returns & Resale Partnership with
              Toycycle
            </h2>
            <p className="tc-home-section-text">
              Toycycle partnered with PlanToys to extend their sustainability
              mission beyond manufacturing and into inventory and returns
              management. What began with excess and open-box inventory has
              since expanded to include customer returns, all managed through a
              structured circular workflow:
            </p>
            <ul className="tc-case-study-list">
              <li>
                <strong>Inspection & Safety Review:</strong> Every returned or
                excess item is carefully inspected to meet quality and safety
                standards.
              </li>
              <li>
                <strong>Grading & Preparation:</strong> Products are graded,
                priced appropriately, and repackaged when needed.
              </li>
              <li>
                <strong>Circular Resale:</strong> Items are relisted and sold to
                new families through Toycycle&apos;s marketplace.
              </li>
              <li>
                <strong>End-to-End Management:</strong> Toycycle manages
                storage, fulfillment, and post-sale customer service, ensuring a
                brand-safe, professional experience.
              </li>
            </ul>
            <p className="tc-home-section-text">
              By entrusting Toycycle with both excess inventory and customer
              returns, PlanToys ensured its products stayed in circulation while
              remaining aligned with its sustainability commitments.
            </p>
          </div>
        </div>
      </section>

      {/* The Impact */}
      <section
        className="tc-case-study-section-alt"
        aria-labelledby="impact-heading"
      >
        <div className="tc-content-container">
          <div className="tc-case-study-content">
            <h2 id="impact-heading" className="tc-case-study-heading">
              The Impact: Keeping Toys in Play, Not in Landfills
            </h2>
            <p className="tc-home-section-text">
              Through its partnership with Toycycle, PlanToys transformed a
              potential waste stream into a meaningful extension of its mission:
            </p>
            <div className="tc-case-study-outcome-grid">
              <div className="tc-case-study-outcome-card tc-case-study-card">
                <h3>Closed-Loop Responsibility</h3>
                <p>
                  Excess inventory and customer returns remain in active use
                  rather than being discarded.
                </p>
              </div>
              <div className="tc-case-study-outcome-card tc-case-study-card">
                <h3>Waste Reduction</h3>
                <p>
                  More toys are diverted from landfills and kept in circulation.
                </p>
              </div>
              <div className="tc-case-study-outcome-card tc-case-study-card">
                <h3>Cost Recovery</h3>
                <p>Previously idle inventory now generates recovered value.</p>
              </div>
              <div className="tc-case-study-outcome-card tc-case-study-card">
                <h3>Brand Integrity</h3>
                <p>
                  Sustainability commitments are upheld across the entire
                  product lifecycle — including returns.
                </p>
              </div>
            </div>
            <p className="tc-home-section-text" style={{ marginTop: "1.5rem" }}>
              What was once a challenge became a tangible expression of
              PlanToys&apos; environmental and social responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Matters + CTA */}
      <section
        className="tc-case-study-cta-section"
        aria-labelledby="why-it-matters-heading"
      >
        <div className="tc-content-container">
          <div className="tc-case-study-content tc-case-study-cta">
            <h2 id="why-it-matters-heading" className="tc-case-study-heading">
              Why It Matters: Sustainability That Extends to Returns
            </h2>
            <p className="tc-home-section-text">
              For PlanToys, sustainability is not a marketing claim — it is a
              responsibility that spans a product&apos;s entire journey. By
              partnering with Toycycle to manage both excess inventory and
              customer returns, PlanToys ensures that more toys reach
              children&apos;s hands instead of landfills. Together, PlanToys and
              Toycycle demonstrate that circular commerce can deliver
              environmental impact, brand integrity, and financial recovery —
              without compromise.
            </p>
            <div className="tc-case-study-cta-buttons">
              <Link
                href="/contact"
                className="tc-btn tc-btn-primary"
                title="Contact Toycycle for Brands"
              >
                Talk to Our Team
              </Link>
              <Link
                href="/returns-management"
                className="tc-btn tc-btn-secondary"
                title="Toycycle Returns Management for toy brands"
              >
                Learn About Returns Management
              </Link>
              <a
                href={PLANTOYS_COLLECTION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="tc-btn tc-btn-outline"
                title="Shop PlanToys on Toycycle (opens in new tab)"
              >
                Shop PlanToys →
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
