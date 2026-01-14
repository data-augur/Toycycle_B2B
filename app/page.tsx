import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="tc-landing-wrapper">
      
      {/* Hero Section */}
      <section className="tc-home-hero">
        <div className="tc-content-container">
          <div className="tc-home-hero-grid">
            <div className="tc-home-hero-content">
              <h1 className="tc-home-hero-title">Inventory Recovery & Resale Infrastructure for Toy</h1>
              <p className="tc-home-hero-subtitle">Recover value from B-stock, returns, and excess inventory — without liquidation, grey markets, or brand risk.</p>
              <div className="tc-home-hero-ctas">
                <Link href="/contact" className="tc-btn tc-btn-primary">👉 Talk to Our Team</Link>
                <Link href="#services" className="tc-btn tc-btn-secondary">Explore Solutions</Link>
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
              Built for toy & baby brands with safety, compliance, and brand control at the core
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
                    alt="waytoplay" 
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
                    alt="waytoplay" 
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
            <h2 className="tc-problem-headline">Demand exists. The challenge is getting inventory to the right channel.</h2>
            <div className="tc-problem-points-list">
              <div className="tc-problem-point-row">
                <div className="tc-problem-point-icon">📉</div>
                <p className="tc-problem-point-text">Returns, open-box, and excess inventory quietly drain margin</p>
              </div>
              <div className="tc-problem-point-row">
                <div className="tc-problem-point-icon">⚠️</div>
                <p className="tc-problem-point-text">Liquidation erodes brand value and pricing integrity</p>
              </div>
              <div className="tc-problem-point-row">
                <div className="tc-problem-point-icon">🔒</div>
                <p className="tc-problem-point-text">Secondary marketplaces introduce grey-market and safety risk</p>
              </div>
              <div className="tc-problem-point-row">
                <div className="tc-problem-point-icon">✅</div>
                <p className="tc-problem-point-text">Toys & baby gear demand higher QA, traceability, and trust</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section - The Toycycle Difference */}
      <section className="tc-home-section-difference">
        <div className="tc-content-container">
          <div className="tc-difference-content">
            <div className="tc-difference-label">The Toycycle Difference</div>
            <h2 className="tc-difference-headline">Purpose-Built Inventory Recovery</h2>
            <div className="tc-difference-pillars-grid">
              <div className="tc-difference-pillar-card">
                <div className="tc-difference-pillar-icon">🛡️</div>
                <h3 className="tc-difference-pillar-title">Category-Specific QA</h3>
                <p className="tc-difference-pillar-text">Safety and recall-aware workflows</p>
              </div>
              <div className="tc-difference-pillar-card">
                <div className="tc-difference-pillar-icon">🔐</div>
                <h3 className="tc-difference-pillar-title">Brand-Safe Resale</h3>
                <p className="tc-difference-pillar-text">No uncontrolled secondary channels</p>
              </div>
              <div className="tc-difference-pillar-card">
                <div className="tc-difference-pillar-icon">👨‍👩‍👧‍👦</div>
                <h3 className="tc-difference-pillar-title">Built-In Demand</h3>
                <p className="tc-difference-pillar-text">From a trusted parent marketplace</p>
              </div>
            </div>
            <p className="tc-difference-footer-text">Choose the level of support you need — from no-overhead dropship to end-to-end resale management.</p>
          </div>
        </div>
      </section>

      {/* Solutions Overview Section - Section 5 */}
      <section className="tc-solutions" id="services">
        <div className="tc-content-container">
          <h2 className="tc-section-title">Solutions Overview</h2>
          
          <div className="tc-solutions-grid">
            {/* Solution 1: B-Stock Drop Ship (Primary) */}
            <div className="tc-solution-card tc-solution-featured">
              <div className="tc-solution-badge">
                <span className="tc-badge-star">⭐</span>
                <span>Most brands start here</span>
              </div>
              <div className="tc-solution-card-inner">
                <div className="tc-solution-header">
                  <div className="tc-solution-icon">📦</div>
                  <h3 className="tc-solution-title">B-Stock Drop Ship</h3>
                </div>
                <p className="tc-solution-description">
                  Recover value from open-box and excess inventory — without warehousing or liquidation.
                </p>
                <ul className="tc-solution-features">
                  <li>Ship directly from your warehouse</li>
                  <li>Maintain pricing and channel control</li>
                  <li>Reach real families, not liquidators</li>
                </ul>
                <div className="tc-solution-cta">
                  <Link href="/contact" className="tc-btn tc-btn-primary">Get Started →</Link>
                </div>
              </div>
            </div>

            {/* Solution 2: Returns Management */}
            <div className="tc-solution-card">
              <div className="tc-solution-card-inner">
                <div className="tc-solution-header">
                  <div className="tc-solution-icon">🔄</div>
                  <h3 className="tc-solution-title">Returns Management</h3>
                </div>
                <p className="tc-solution-description">
                  Seamlessly expand your operations team.
                </p>
                <ul className="tc-solution-features">
                  <li>Full-Cycle Logistics</li>
                  <li>Zero-Fee Processing</li>
                  <li>Resale by Toycycle</li>
                </ul>
                <div className="tc-solution-cta">
                  <Link href="/contact" className="tc-btn tc-btn-outline">Learn more →</Link>
                </div>
              </div>
            </div>

            {/* Solution 3: Resale-as-a-Service */}
            <div className="tc-solution-card">
              <div className="tc-solution-card-inner">
                <div className="tc-solution-header">
                  <div className="tc-solution-icon">🌐</div>
                  <h3 className="tc-solution-title">Resale-as-a-Service</h3>
                </div>
                <p className="tc-solution-description">
                  Launch a fully brand-owned resale program with white-labeled tech and ops.
                </p>
                <ul className="tc-solution-features">
                  <li>End to End Resale Solution</li>
                  <li>Zero grey-market exposure</li>
                  <li>Growth Through Resale</li>
                </ul>
                <div className="tc-solution-cta">
                  <Link href="/contact" className="tc-btn tc-btn-outline">Learn more →</Link>
                </div>
              </div>
            </div>
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
                <div className="tc-testimonial-quote">&ldquo;Turnkey Solution&rdquo;</div>
              </div>
              <p className="tc-testimonial-text">
                &ldquo;Working with Toycycle has been an absolute game-changer for PlanToys. From the very beginning, the onboarding process was seamless and straightforward, allowing us to get started without any delays. Their team excels in clear and consistent communication, keeping us informed every step of the way.
              </p>
              <p className="tc-testimonial-text">
                The monthly reports on sales and inventory are comprehensive and easy to understand, providing us with valuable insights to make informed decisions on what consumers were looking for in recommerce. What truly sets Toycycle apart is their turnkey solution for giving products a second life. They have an exceptional ability to find these items a new, loving home, ensuring they stay in circulation and continue to bring joy to new families.
              </p>
              <p className="tc-testimonial-text">
                We couldn&apos;t be more pleased with the partnership and look forward to continuing our collaboration.&rdquo;
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
                <div className="tc-testimonial-quote">&ldquo;Win-Win for Everyone&rdquo;</div>
              </div>
              <p className="tc-testimonial-text">
                &ldquo;Working with Toycycle has been a seamless and rewarding experience. Their team is consistently responsive and solution-oriented, making it easy to address any needs we have. The simplicity of their returns process has allowed us to maintain the integrity of our new inventory while adding value to our returned products, ensuring that nothing goes to waste.
              </p>
              <p className="tc-testimonial-text">
                Our collaboration with Toycycle is truly a win-win for everyone involved. Our customers benefit from knowing their returns are given a second life, we enjoy a streamlined returns process, and Toycycle continues to excel in their mission of sustainability. We couldn&apos;t ask for a better partner in this endeavor.&rdquo;
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
                <div className="tc-testimonial-quote">&ldquo;Positive Impact&rdquo;</div>
              </div>
              <p className="tc-testimonial-text">
                &ldquo;We are thrilled to partner with Toycycle. Their dedication to giving toys a second life perfectly aligns with our company&apos;s sustainability efforts. The convenience of their platform makes it easy for us to offer our toys, ensuring a seamless experience.
              </p>
              <p className="tc-testimonial-text">
                They handle everything from ordering to selling, making the process hassle-free for us. We look forward to continuing our collaboration with Toycycle and making a positive impact together.&rdquo;
              </p>
              <div className="tc-testimonial-author">
                — Sebastian Tolosa, Marketing Coordinator Juratoys
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="tc-home-cta">
        <div className="tc-content-container tc-center">
          <h2 className="tc-cta-title">Start Recovering Value from Your Inventory</h2>
          <p className="tc-cta-text">
            Join leading toy and baby brands who trust Toycycle to transform returns and excess inventory into revenue—without the risks of liquidation or grey markets.
          </p>
          <div className="tc-cta-buttons">
            <Link href="/contact" className="tc-btn tc-btn-primary">Talk to Our Team</Link>
            <Link href="#services" className="tc-btn tc-btn-secondary">Explore Solutions</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
