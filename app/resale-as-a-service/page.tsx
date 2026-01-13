import Link from 'next/link'
import Image from 'next/image'

export default function ResaleAsAService() {
  return (
    <div className="tc-landing-wrapper">
      
      {/* Hero Section */}
      <section className="tc-home-hero">
        <div className="tc-content-container">
          <div className="tc-home-hero-grid">
            <div className="tc-home-hero-content">
              <h1 className="tc-home-hero-title">Powering Resale for Toy Brands</h1>
              <p className="tc-home-hero-subtitle">Unlock revenue, reduce waste, and grow customer loyalty with Toycycle&apos;s end-to-end resale solution.</p>
              <div className="tc-home-hero-ctas">
                <Link href="/contact" className="tc-btn tc-btn-primary">Let&apos;s Talk</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resale Imperative Section */}
      <section className="tc-resale-imperative">
        <div className="tc-content-container">
          <h2 className="tc-section-title">Resale Has Become a Strategic Imperative</h2>
          <p className="tc-home-section-text" style={{textAlign: 'center', maxWidth: '900px', margin: '0 auto 16px'}}>
            As tariffs rise and customer values shift, brands need more than liquidation.
          </p>
          <p className="tc-home-section-text" style={{textAlign: 'center', maxWidth: '900px', margin: '0 auto 48px'}}>
            Resale recovers margins, moves inventory, and proves your commitment to sustainability.
          </p>
          <div className="tc-resale-cards">
            <div className="tc-resale-card">
              <Image 
                src="/images/resale-icons/icon-doller.png" 
                alt="Dollar Icon" 
                width={64}
                height={64}
                className="tc-resale-icon"
              />
              <h3 className="tc-resale-card-title">Resale to reach $325B by 2031</h3>
            </div>
            <div className="tc-resale-card">
              <Image 
                src="/images/resale-icons/icon-growth.png" 
                alt="Growth Icon" 
                width={64}
                height={64}
                className="tc-resale-icon"
              />
              <h3 className="tc-resale-card-title">82% of Americans bought secondhand items last year</h3>
            </div>
            <div className="tc-resale-card">
              <Image 
                src="/images/resale-icons/icon-loyalty.png" 
                alt="Loyalty Icon" 
                width={64}
                height={64}
                className="tc-resale-icon"
              />
              <h3 className="tc-resale-card-title">Sustainability Builds Loyalty</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Resale Solutions Section */}
      <section className="tc-resale-solutions">
        <div className="tc-content-container">
          <h2 className="tc-section-title">Toycycle Resale Solutions — End-to-End Recommerce for Toy Brands</h2>
          <p className="tc-resale-solutions-subtitle">
            Unlock new revenue streams and sustainability with no tech or infrastructure investment.
          </p>
          <div className="tc-resale-solutions-grid">
            <div className="tc-resale-solution-card">
              <Image 
                src="/images/resale-icons/Trade-In.svg" 
                alt="Trade In Icon" 
                width={40}
                height={40}
                className="tc-resale-solution-icon"
              />
              <h3 className="tc-resale-solution-title">Trade - In</h3>
              <p className="tc-resale-solution-text">Toy return for credit: a simple way to grow loyalty</p>
            </div>
            <div className="tc-resale-solution-card">
              <Image 
                src="/images/resale-icons/Resale-Storefront.svg" 
                alt="Resale Storefront Icon" 
                width={40}
                height={40}
                className="tc-resale-solution-icon"
              />
              <h3 className="tc-resale-solution-title">Resale Storefront</h3>
              <p className="tc-resale-solution-text">We run your resale site - you earn with every sale</p>
            </div>
            <div className="tc-resale-solution-card">
              <Image 
                src="/images/resale-icons/Sell-with-Toycycle.svg" 
                alt="Sell Icon" 
                width={40}
                height={40}
                className="tc-resale-solution-icon"
              />
              <h3 className="tc-resale-solution-title">Sell with Toycycle</h3>
              <p className="tc-resale-solution-text">Sell fast to eco conscious customers</p>
            </div>
            <div className="tc-resale-solution-card">
              <Image 
                src="/images/resale-icons/Bulk-Inventory.svg" 
                alt="Bulk Inventory Icon" 
                width={40}
                height={40}
                className="tc-resale-solution-icon"
              />
              <h3 className="tc-resale-solution-title">Bulk Inventory</h3>
              <p className="tc-resale-solution-text">Ship us unsold stock; we manage it all</p>
            </div>
          </div>
          <div className="tc-resale-solutions-cta">
            <Link href="/contact" className="tc-btn tc-btn-primary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="tc-process-section" style={{background: 'var(--color-bg-white)'}}>
        <div className="tc-content-container">
          <h2 className="tc-section-title">We Expertly Manage Your Recommerce Journey</h2>
          <p className="tc-home-community-text" style={{textAlign: 'center', marginBottom: '50px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>
            Toycycle takes care of the entire resale process—from pickup to delivery— so you don&apos;t have to. You earn from your outgrown toys while helping reduce waste and bring joy to new families.
          </p>
          <div className="tc-process-grid">
            <div className="tc-process-step">
              <Image 
                src="/images/resale-steps/step01.png" 
                alt="Build Website" 
                width={120}
                height={120}
                className="tc-process-step-image"
              />
              <div className="tc-process-step-number">01</div>
              <div className="tc-process-step-title">Build &amp; Run Website</div>
              <div className="tc-process-step-desc">Custom-branded resale site setup and management.</div>
            </div>
            <div className="tc-process-step">
              <Image 
                src="/images/resale-steps/step02.png" 
                alt="Inventory Sourcing" 
                width={120}
                height={120}
                className="tc-process-step-image"
              />
              <div className="tc-process-step-number">02</div>
              <div className="tc-process-step-title">Inventory Sourcing</div>
              <div className="tc-process-step-desc">We collect quality toys from families nationwide.</div>
            </div>
            <div className="tc-process-step">
              <Image 
                src="/images/resale-steps/step03.png" 
                alt="Processing" 
                width={120}
                height={120}
                className="tc-process-step-image"
              />
              <div className="tc-process-step-number">03</div>
              <div className="tc-process-step-title">Processing &amp; Quality Check</div>
              <div className="tc-process-step-desc">Every item is carefully inspected before listing.</div>
            </div>
            <div className="tc-process-step">
              <Image 
                src="/images/resale-steps/step04.png" 
                alt="Photography" 
                width={120}
                height={120}
                className="tc-process-step-image"
              />
              <div className="tc-process-step-number">04</div>
              <div className="tc-process-step-title">Photography</div>
              <div className="tc-process-step-desc">Professional photos help your items shine online.</div>
            </div>
            <div className="tc-process-step">
              <Image 
                src="/images/resale-steps/step05.png" 
                alt="Pricing" 
                width={120}
                height={120}
                className="tc-process-step-image"
              />
              <div className="tc-process-step-number">05</div>
              <div className="tc-process-step-title">Pricing</div>
              <div className="tc-process-step-desc">Smart pricing ensures value and faster resale.</div>
            </div>
            <div className="tc-process-step">
              <Image 
                src="/images/resale-steps/step06.png" 
                alt="Storage" 
                width={120}
                height={120}
                className="tc-process-step-image"
              />
              <div className="tc-process-step-number">06</div>
              <div className="tc-process-step-title">Product Storage</div>
              <div className="tc-process-step-desc">Secure warehousing until your item is sold.</div>
            </div>
            <div className="tc-process-step">
              <Image 
                src="/images/resale-steps/step07.png" 
                alt="Fulfillment" 
                width={120}
                height={120}
                className="tc-process-step-image"
              />
              <div className="tc-process-step-number">07</div>
              <div className="tc-process-step-title">Order Fulfillment</div>
              <div className="tc-process-step-desc">We handle packaging and shipping to buyers.</div>
            </div>
            <div className="tc-process-step">
              <Image 
                src="/images/resale-steps/step08.png" 
                alt="Returns" 
                width={120}
                height={120}
                className="tc-process-step-image"
              />
              <div className="tc-process-step-number">08</div>
              <div className="tc-process-step-title">Returns</div>
              <div className="tc-process-step-desc">Customer returns are processed with care.</div>
            </div>
            <div className="tc-process-step">
              <Image 
                src="/images/resale-steps/step09.png" 
                alt="Payouts" 
                width={120}
                height={120}
                className="tc-process-step-image"
              />
              <div className="tc-process-step-number">09</div>
              <div className="tc-process-step-title">Payouts</div>
              <div className="tc-process-step-desc">Earnings are automatically distributed to sellers.</div>
            </div>
            <div className="tc-process-step">
              <Image 
                src="/images/resale-steps/step10.png" 
                alt="Customer Care" 
                width={120}
                height={120}
                className="tc-process-step-image"
              />
              <div className="tc-process-step-number">10</div>
              <div className="tc-process-step-title">Customer Care</div>
              <div className="tc-process-step-desc">Support teams ensure smooth service for everyone.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Section */}
      <section className="tc-home-section-problem" style={{background: 'var(--tc-light-green)'}}>
        <div className="tc-content-container">
          <div className="tc-problem-content">
            <h2 className="tc-problem-headline">Why Leading Brands Trust Toycycle</h2>
            <p className="tc-home-community-text" style={{textAlign: 'center', marginBottom: '50px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>
              We deliver seamless, sustainable resale that protects your brand and delights eco-conscious customers.
            </p>
            <div className="tc-trust-features-grid">
              <div className="tc-trust-feature">
                <div className="tc-trust-feature-icon">📦</div>
                <h3 className="tc-trust-feature-title">End-to-End Fulfillment</h3>
                <p className="tc-trust-feature-text">From receiving to resale, we handle it all efficiently</p>
              </div>
              <div className="tc-trust-feature">
                <div className="tc-trust-feature-icon">🌱</div>
                <h3 className="tc-trust-feature-title">Sustainability-Driven</h3>
                <p className="tc-trust-feature-text">Reuse, refurbish, and donate with minimal waste</p>
              </div>
              <div className="tc-trust-feature">
                <div className="tc-trust-feature-icon">📊</div>
                <h3 className="tc-trust-feature-title">Transparency & Reporting</h3>
                <p className="tc-trust-feature-text">Real-time dashboards, resale data, and customer</p>
              </div>
              <div className="tc-trust-feature">
                <div className="tc-trust-feature-icon">⚙️</div>
                <h3 className="tc-trust-feature-title">Flexible Models</h3>
                <p className="tc-trust-feature-text">Marketplace, co-branded store, or white-label</p>
              </div>
              <div className="tc-trust-feature">
                <div className="tc-trust-feature-icon">📦</div>
                <h3 className="tc-trust-feature-title">Amazon Returns Friendly</h3>
                <p className="tc-trust-feature-text">Send FBA returns to Toycycle and avoid Amazon fees.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="tc-home-cta">
        <div className="tc-content-container tc-center">
          <h2 className="tc-cta-title">Ready to Unlock Growth Through Resale?</h2>
          <p className="tc-cta-text">
            Whether you&apos;re just getting started or ready to sell, we tailor seamless resale solutions to fit your goals and timeline—making every step effortless.
          </p>
          <Link href="/contact" className="tc-btn tc-btn-primary">Contact our team</Link>
        </div>
      </section>

    </div>
  )
}
