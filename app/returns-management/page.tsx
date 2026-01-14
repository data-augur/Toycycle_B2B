import Link from 'next/link'
import Image from 'next/image'

export default function ReturnsManagement() {
  return (
    <div className="tc-landing-wrapper">
      
      {/* Hero Section */}
      <section className="tc-home-hero">
        <div className="tc-content-container">
          <div className="tc-home-hero-grid">
            <div className="tc-home-hero-content">
              <h1 className="tc-home-hero-title">Toycycle Returns Management</h1>
              <p className="tc-home-hero-subtitle">Seamlessly Expand Your Operations Team</p>
              <div className="tc-home-hero-ctas">
                <Link href="/contact" className="tc-btn tc-btn-primary">Contact Us</Link>
              </div>
            </div>
            <div className="tc-home-hero-image">
              <Image 
                src="/images/partners/Hero_Returns.webp" 
                alt="Toycycle Returns Management" 
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
      <section style={{padding: '60px 0', backgroundColor: 'var(--tc-light-green)'}}>
        <div className="tc-content-container">
          <div style={{maxWidth: '900px', margin: '0 auto', textAlign: 'center'}}>
            <h2 className="tc-section-title">Toycycle Returns Management — Hassle-Free Return Solutions for Toy Brands</h2>
            <p className="tc-home-section-text">
              Returns are a pain for businesses because they create logistical headaches, eat up profits, and require staffing to sort through.
            </p>
            <p className="tc-home-section-text">
              We turn your headaches into hassle-free solutions. From receiving to resale, we&apos;ve got you covered–so your team can stay focused on what drives growth.
            </p>
          </div>
        </div>
      </section>

      {/* We Do The Heavy Lifting Section */}
      <section className="tc-returns-process-section" style={{backgroundColor: '#ffffff'}}>
        <div className="tc-content-container">
          <div className="tc-returns-process-container" style={{textAlign: 'center'}}>
            <div className="tc-problem-label" style={{display: 'inline-block', marginBottom: '24px'}}>Our Process</div>
            <h2 className="tc-returns-heading">We Do The Heavy Lifting</h2>
            <div className="tc-returns-process">
              <div className="tc-returns-step">
                <div className="tc-returns-step-number">
                  <Image src="/images/returns_icons/box-check.svg" alt="Step 1 Icon" width={40} height={40} />
                  <h3>1 - Receiving</h3>
                </div>
                <p>We accept the returned item and log it into our system for processing.</p>
              </div>
              <div className="tc-returns-step">
                <div className="tc-returns-step-number">
                  <Image src="/images/returns_icons/square-check.svg" alt="Step 2 Icon" width={40} height={40} />
                  <h3>2 - Quality & Safety Check</h3>
                </div>
                <p>The item is carefully inspected to ensure it meets our safety and quality standards.</p>
              </div>
              <div className="tc-returns-step">
                <div className="tc-returns-step-number">
                  <Image src="/images/returns_icons/sort-arrows.svg" alt="Step 3 Icon" width={40} height={40} />
                  <h3>3 - Grading / Sorting</h3>
                </div>
                <p>Items are categorized based on condition and usability for efficient processing.</p>
              </div>
              <div className="tc-returns-step">
                <div className="tc-returns-step-number">
                  <Image src="/images/returns_icons/camera.svg" alt="Step 4 Icon" width={40} height={40} />
                  <h3>4 - Photography</h3>
                </div>
                <p>High-quality images are taken to showcase the product accurately for resale.</p>
              </div>
              <div className="tc-returns-step">
                <div className="tc-returns-step-number">
                  <Image src="/images/returns_icons/dollar.svg" alt="Step 5 Icon" width={40} height={40} />
                  <h3>5 - Pricing</h3>
                </div>
                <p>Each item is evaluated and priced fairly based on its condition and market demand.</p>
              </div>
              <div className="tc-returns-step">
                <div className="tc-returns-step-number">
                  <Image src="/images/returns_icons/exchange.svg" alt="Step 6 Icon" width={40} height={40} />
                  <h3>6 - Repacking</h3>
                </div>
                <p>Items are carefully repacked to ensure they meet quality and presentation.</p>
              </div>
              <div className="tc-returns-step">
                <div className="tc-returns-step-number">
                  <Image src="/images/returns_icons/storage.svg" alt="Step 7 Icon" width={40} height={40} />
                  <h3>7 - Storage</h3>
                </div>
                <p>Processed items are safely stored in our warehouse ready for resale.</p>
              </div>
              <div className="tc-returns-step">
                <div className="tc-returns-step-number">
                  <Image src="/images/returns_icons/truck.svg" alt="Step 8 Icon" width={40} height={40} />
                  <h3>8 - Resale Fulfilment</h3>
                </div>
                <p>Products are listed for sale and prepared for delivery to new customers.</p>
              </div>
              <div className="tc-returns-step">
                <div className="tc-returns-step-number">
                  <Image src="/images/returns_icons/help.svg" alt="Step 9 Icon" width={40} height={40} />
                  <h3>9 - Customer Care</h3>
                </div>
                <p>Our team is available to assist with any queries or support during the return journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Toycycle Section */}
      <section className="tc-home-section-difference" style={{backgroundColor: 'var(--tc-light-green)'}}>
        <div className="tc-content-container">
          <div className="tc-difference-content">
            <div className="tc-difference-label">Why Choose Us</div>
            <h2 className="tc-difference-headline">Why Choose Toycycle</h2>
            <div className="tc-difference-pillars-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}}>
              <div className="tc-difference-pillar-card">
                <div className="tc-difference-pillar-icon">💰</div>
                <h3 className="tc-difference-pillar-title">No Return Processing Fees</h3>
                <p className="tc-difference-pillar-text">Unlike other platforms, we do not charge for handling your returns. We only charge a percentage of the sale once we resell the item through our platform</p>
              </div>
              <div className="tc-difference-pillar-card">
                <div className="tc-difference-pillar-icon">📈</div>
                <h3 className="tc-difference-pillar-title">Maximum Value Recovery Through Resale</h3>
                <p className="tc-difference-pillar-text">Instead of discarding unsellable items, we refurbish and resell them.</p>
              </div>
              <div className="tc-difference-pillar-card">
                <div className="tc-difference-pillar-icon">🌱</div>
                <h3 className="tc-difference-pillar-title">Sustainability</h3>
                <p className="tc-difference-pillar-text">We reduce waste by extending the life of products.</p>
              </div>
              <div className="tc-difference-pillar-card">
                <div className="tc-difference-pillar-icon">🔌</div>
                <h3 className="tc-difference-pillar-title">Seamless Integration</h3>
                <p className="tc-difference-pillar-text">Real-time receipt integration for returns (API, EDI, SAP, Slack, etc.).</p>
              </div>
              <div className="tc-difference-pillar-card">
                <div className="tc-difference-pillar-icon">🛡️</div>
                <h3 className="tc-difference-pillar-title">Fraud Prevention</h3>
                <p className="tc-difference-pillar-text">Real-time notifications of fraudulent returns.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="tc-solutions" style={{background: 'var(--tc-light-green)'}}>
        <div className="tc-content-container">
          <h2 className="tc-section-title">Choose the Right Plan for Your Circular Goals</h2>
          <p className="tc-home-community-text" style={{textAlign: 'center', marginBottom: '50px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>
            Whether you&apos;re just starting out or scaling a zero-waste strategy, our flexible plans make returns management simple, sustainable, and impactful.
          </p>
          <div className="tc-pricing-grid">
            {/* Essential Plan */}
            <div className="tc-pricing-card tc-pricing-card-ribbon">
              <div className="tc-pricing-ribbon">FREE</div>
              <div className="tc-pricing-card-inner">
                <div className="tc-pricing-header">
                  <div className="tc-pricing-icon">🌿</div>
                  <h3 className="tc-pricing-title">Essential</h3>
                </div>
                <p className="tc-pricing-description">
                  Basic support for low-volume returns
                </p>
                <ul className="tc-pricing-features">
                  <li>Quality inspection</li>
                  <li>Tracking receipts</li>
                  <li>Resale by Toycycle</li>
                  <li>Basic Reporting</li>
                </ul>
                <div className="tc-pricing-cta">
                  <Link href="/contact" className="tc-btn tc-btn-outline">Contact Us</Link>
                </div>
              </div>
            </div>

            {/* Optimized Plan */}
            <div className="tc-pricing-card">
              <div className="tc-pricing-card-inner">
                <div className="tc-pricing-header">
                  <div className="tc-pricing-icon">🔧</div>
                  <h3 className="tc-pricing-title">Optimized</h3>
                </div>
                <p className="tc-pricing-description">
                  Smarter returns with enhanced visibility
                </p>
                <ul className="tc-pricing-features">
                  <li>Everything in Essential</li>
                  <li>Detailed monthly reporting</li>
                  <li>Reboxing by Toycycle</li>
                  <li>Account manager</li>
                </ul>
                <div className="tc-pricing-cta">
                  <Link href="/contact" className="tc-btn tc-btn-outline">Contact Us</Link>
                </div>
              </div>
            </div>

            {/* Insightful Plan */}
            <div className="tc-pricing-card">
              <div className="tc-pricing-card-inner">
                <div className="tc-pricing-header">
                  <div className="tc-pricing-icon">📊</div>
                  <h3 className="tc-pricing-title">Insightful</h3>
                </div>
                <p className="tc-pricing-description">
                  Advanced insights & system integration
                </p>
                <ul className="tc-pricing-features">
                  <li>Everything in Optimized</li>
                  <li>Real-time dashboards</li>
                  <li>Return API integration</li>
                  <li>Fraud alerts</li>
                </ul>
                <div className="tc-pricing-cta">
                  <Link href="/contact" className="tc-btn tc-btn-outline">Contact Us</Link>
                </div>
              </div>
            </div>

            {/* Sustainable+ Plan */}
            <div className="tc-pricing-card tc-pricing-featured">
              <div className="tc-pricing-card-inner">
                <div className="tc-pricing-header">
                  <div className="tc-pricing-icon">🌍</div>
                  <h3 className="tc-pricing-title">Sustainable+</h3>
                </div>
                <p className="tc-pricing-description">
                  Zero-waste logistics for maximum impact
                </p>
                <ul className="tc-pricing-features">
                  <li>Everything in Insightful</li>
                  <li>End-of-life solutions</li>
                  <li>Resale demographic data</li>
                  <li>Priority support</li>
                </ul>
                <div className="tc-pricing-cta">
                  <Link href="/contact" className="tc-btn tc-btn-primary">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="tc-home-cta">
        <div className="tc-content-container tc-center">
          <h2 className="tc-cta-title">Seamlessly Expand Your Operations Team</h2>
          <p className="tc-cta-text">
            Let Toycycle handle your returns so you can focus on growing your business.
          </p>
          <Link href="/contact" className="tc-btn tc-btn-primary">Contact Us</Link>
        </div>
      </section>

    </div>
  )
}
