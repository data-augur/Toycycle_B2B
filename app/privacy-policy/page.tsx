import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Toycycle collects, uses, and protects information on our B2B site (brands.toycycle.co).",
  openGraph: {
    title: "Privacy Policy | Toycycle for Brands",
    url: `${siteUrl}/privacy-policy`,
  },
  alternates: { canonical: `${siteUrl}/privacy-policy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="tc-landing-wrapper">
      <section className="tc-hero">
        <div className="tc-content-container">
          <div className="tc-hero-text-content">
            <h1 className="tc-heading-main">Privacy Policy</h1>
            <p className="tc-body-text-xl">
              This policy explains how Toycycle collects, uses, and protects
              information on our B2B site.
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
              This Privacy Policy explains how Toycycle Inc.
              (&quot;Toycycle,&quot; &quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;) collects, uses, and protects information obtained
              through <strong>https://brands.toycycle.co</strong>.
            </p>
            <p>
              This Site is designed for <strong>B2B interactions only</strong>.
            </p>

            <h2>1. Information We Collect</h2>
            <h3>Information You Provide</h3>
            <ul>
              <li>Name, title, and company name</li>
              <li>Business email address and phone number</li>
              <li>Information submitted via contact forms or demo requests</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <ul>
              <li>IP address</li>
              <li>Browser type and device information</li>
              <li>Pages visited and interaction data</li>
            </ul>

            <h2>2. How We Use Information</h2>
            <p>We use collected information to:</p>
            <ul>
              <li>Respond to inquiries and demo requests</li>
              <li>Evaluate potential partnerships</li>
              <li>Communicate about Toycycle services</li>
              <li>Improve Site performance and usability</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>
              We do <strong>not</strong> sell personal data.
            </p>

            <h2>3. Cookies &amp; Analytics</h2>
            <p>
              We may use cookies and analytics tools to understand Site usage.
              These tools collect aggregated, non-identifiable data.
            </p>
            <p>You may disable cookies through your browser settings.</p>

            <h2>4. Data Sharing</h2>
            <p>We may share information with:</p>
            <ul>
              <li>Internal teams</li>
              <li>Service providers supporting Site operations</li>
              <li>Legal authorities if required by law</li>
            </ul>
            <p>
              We do not share Brand data with consumer marketplaces or third
              parties for marketing purposes.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We implement reasonable administrative and technical safeguards to
              protect your information. However, no system is completely secure.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              We retain information only as long as necessary for legitimate
              business purposes or legal requirements.
            </p>

            <h2>7. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have rights to:</p>
            <ul>
              <li>Access or correct your information</li>
              <li>Request deletion</li>
              <li>Opt out of marketing communications</li>
            </ul>
            <p>
              Requests can be sent to{" "}
              <a href="mailto:privacy@toycycle.co">privacy@toycycle.co</a>.
            </p>

            <h2>8. Children’s Privacy</h2>
            <p>
              This Site is not intended for individuals under 18. We do not
              knowingly collect children’s data.
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Updates will be
              posted on this page with a revised effective date.
            </p>

            <h2>10. Contact</h2>
            <p>For privacy-related questions:</p>
            <p>
              <strong>Toycycle Inc.</strong>
              <br />
              Email:{" "}
              <a href="mailto:privacy@toycycle.co">privacy@toycycle.co</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
