"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    interest: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Here you would typically send the form data to your backend/API
    // For now, we'll simulate a submission
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In a real implementation, you would do:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        interest: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="tc-landing-wrapper">
      <section className="tc-hero">
        <div className="tc-content-container tc-center">
          <h1 className="tc-heading-main">Contact Our Partnerships Team</h1>
          <p className="tc-body-text-xl">
            Get in touch to learn more about becoming a Certified Partner.
          </p>
          <div className="tc-contact-form-wrapper">
            <form onSubmit={handleSubmit} className="tc-contact-form">
              <div className="tc-form-row">
                <div className="tc-form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div className="tc-form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="tc-form-row">
                <div className="tc-form-group">
                  <label htmlFor="company">Company Name *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Your Company"
                  />
                </div>
                <div className="tc-form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="tc-form-group">
                <label htmlFor="interest">I'm interested in *</label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select an option</option>
                  <option value="b-stock-dropship">B-Stock Drop Ship</option>
                  <option value="returns-management">Returns Management</option>
                  <option value="resale-service">Resale as a Service</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div className="tc-form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us about your needs and how we can help..."
                />
              </div>

              {submitStatus === "success" && (
                <div className="tc-form-success">
                  Thank you! We'll be in touch soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="tc-form-error">
                  Something went wrong. Please try again or email us directly at
                  partnerships@toycycle.com
                </div>
              )}

              <button
                type="submit"
                className="tc-btn tc-btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              <p className="tc-form-note">
                Or reach out directly at{" "}
                <a href="mailto:partnerships@toycycle.com">
                  partnerships@toycycle.com
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
