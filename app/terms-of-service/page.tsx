import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms for using Toycycle's B2B site for brands. Scope of services, eligibility, and use of the site.",
  openGraph: {
    title: "Terms of Service | Toycycle for Brands",
    url: `${siteUrl}/terms-of-service`,
  },
  alternates: { canonical: `${siteUrl}/terms-of-service` },
  robots: { index: true, follow: true },
};

export default function TermsOfServicePage() {
  return (
    <div className="tc-landing-wrapper">
      <section className="tc-hero">
        <div className="tc-content-container">
          <div className="tc-hero-text-content">
            <h1 className="tc-heading-main">Terms of Service</h1>
            <p className="tc-body-text-xl">
              Please review these terms for using Toycycle&apos;s B2B site for
              brands.
            </p>
          </div>
        </div>
      </section>

      <section className="tc-home-section-three">
        <div className="tc-content-container">
          <div
            className="tc-home-section-three-content"
            style={{ maxWidth: "800px", margin: "0 auto", textAlign: "left" }}
          >
            <p>
              <strong>Last Updated:</strong> January 27, 2026
            </p>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern access to and
              use of the Toycycle Brands website located at{" "}
              <strong>https://brands.toycycle.co</strong> (the
              &quot;Site&quot;), operated by Toycycle Inc.
              (&quot;Toycycle,&quot; &quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;).
            </p>
            <p>
              This Site is intended for <strong>business users only</strong>,
              including toy and baby gear brands, manufacturers, and retailers
              (&quot;Brands,&quot; &quot;you&quot;). By accessing or using the
              Site, you agree to be bound by these Terms.
            </p>

            <h2>1. Scope of Services</h2>
            <p>
              The Site provides information about Toycycle’s enterprise
              offerings, including but not limited to:
            </p>
            <ul>
              <li>B-Stock Drop Ship</li>
              <li>Returns Management</li>
              <li>Resale-as-a-Service</li>
            </ul>
            <p>
              Any commercial relationship, pilot, or program referenced on the
              Site is subject to a <strong>separate written agreement</strong>{" "}
              executed between Toycycle and the Brand. Nothing on this Site
              constitutes a binding offer or contract.
            </p>

            <h2>2. Eligibility</h2>
            <p>You represent that you are:</p>
            <ul>
              <li>Acting on behalf of a legitimate business entity</li>
              <li>Authorized to bind that entity</li>
              <li>At least 18 years old</li>
            </ul>
            <p>
              Toycycle does not offer services to consumers through this Site.
            </p>

            <h2>3. Use of the Site</h2>
            <p>
              You agree to use the Site only for lawful business purposes. You
              may not:
            </p>
            <ul>
              <li>Misrepresent your identity or business affiliation</li>
              <li>Attempt to access restricted systems or data</li>
              <li>Interfere with the Site’s operation or security</li>
              <li>
                Use the Site to compete with or reverse engineer Toycycle’s
                services
              </li>
            </ul>
            <p>
              Toycycle reserves the right to suspend or restrict access at its
              discretion.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              All content on the Site, including text, graphics, logos,
              trademarks, and proprietary workflows, is owned by or licensed to
              Toycycle and protected under applicable intellectual property
              laws.
            </p>
            <p>
              You may not copy, reproduce, distribute, or create derivative
              works without prior written consent.
            </p>

            <h2>5. Confidential Information</h2>
            <p>
              Any non-public information shared by Toycycle during discussions,
              demos, or evaluations is considered confidential unless otherwise
              stated in writing.
            </p>

            <h2>6. Disclaimers</h2>
            <p>
              The Site and its content are provided &quot;as is&quot; and
              &quot;as available.&quot; Toycycle makes no warranties regarding:
            </p>
            <ul>
              <li>Revenue outcomes</li>
              <li>Inventory sell-through</li>
              <li>Brand performance</li>
              <li>Marketplace demand</li>
            </ul>
            <p>
              Actual results depend on inventory quality, pricing, seasonality,
              and market conditions.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Toycycle shall not be
              liable for any indirect, incidental, consequential, or lost-profit
              damages arising from use of the Site.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of California,
              without regard to conflict of law principles.
            </p>

            <h2>9. Contact</h2>
            <p>Questions regarding these Terms may be directed to:</p>
            <p>
              <strong>Toycycle Inc.</strong>
              <br />
              Email: <a href="mailto:legal@toycycle.co">legal@toycycle.co</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
