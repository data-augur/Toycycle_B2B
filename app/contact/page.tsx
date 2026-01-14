export default function ContactPage() {
  return (
    <div className="tc-landing-wrapper">
      <section className="tc-hero">
        <div className="tc-content-container tc-center">
          <h1 className="tc-heading-main">Contact Our Partnerships Team</h1>
          <p className="tc-body-text-xl">
            Get in touch to learn more about becoming a Certified Partner.
          </p>
          <div
            className="tc-glass-card"
            style={{ maxWidth: "600px", marginTop: "40px" }}
          >
            <p style={{ fontSize: "1.6rem", marginBottom: "20px" }}>
              Please reach out to us at{" "}
              <strong>partnerships@toycycle.com</strong> or fill out the form
              below.
            </p>
            <p style={{ fontSize: "1.5rem", color: "#666" }}>
              Contact form coming soon...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
