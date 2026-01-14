import Link from 'next/link'
import Image from 'next/image'

export default function BStockDropShip() {
  return (
    <div className="tc-landing-wrapper">
      
      {/* Hero Section */}
      <section className="tc-home-hero">
        <div className="tc-content-container">
          <div className="tc-home-hero-grid">
            <div className="tc-home-hero-content">
              <h1 className="tc-home-hero-title">B-Stock Drop Ship</h1>
              <p className="tc-home-hero-subtitle">Sell open-box and excess inventory directly to trusted families — with no warehousing, no fulfillment overhead, and full brand control.</p>
              <div className="tc-home-hero-ctas">
                <Link href="/contact" className="tc-btn tc-btn-primary">Get Started</Link>
              </div>
            </div>
            <div className="tc-home-hero-image">
              <Image 
                src="/images/partners/Hero_DropShip.webp" 
                alt="B-Stock Drop Ship" 
                width={600}
                height={400}
                className="tc-hero-img"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Section */}
      <section className="tc-home-section-two">
        <div className="tc-content-container">
          <div className="tc-home-section-two-content">
            <h2 className="tc-section-title">What is Toycycle B-Stock DropShip?</h2>
            <p className="tc-home-section-text">
              Toycycle Inventory Connect integrates directly with your existing commerce stack—whether you&apos;re on Shopify, WooCommerce, Shopware, or a custom platform. List and sell B-stock or surplus inventory through Toycycle&apos;s trusted marketplace without disrupting your core retail or DTC operations.
            </p>
          </div>
        </div>
      </section>

      {/* Why Brands Choose Section */}
      <section className="tc-home-section-difference">
        <div className="tc-content-container">
          <div className="tc-difference-content">
            <div className="tc-difference-label">Why Choose Us</div>
            <h2 className="tc-difference-headline">Why Brands Choose Toycycle B-Stock Drop Ship</h2>
            <div className="tc-difference-pillars-grid">
              <div className="tc-difference-pillar-card">
                <div className="tc-difference-pillar-icon">⚡</div>
                <h3 className="tc-difference-pillar-title">Faster Sell-Through w/o Channel Risk</h3>
                <p className="tc-difference-pillar-text">List surplus inventory in a marketplace where buyers are motivated by quality and sustainability, not bargain chasing.</p>
              </div>
              <div className="tc-difference-pillar-card">
                <div className="tc-difference-pillar-icon">🛡️</div>
                <h3 className="tc-difference-pillar-title">Brand Value & Pricing Protection</h3>
                <p className="tc-difference-pillar-text">Products appear in a curated, brand-safe environment — no off-price dumping or unauthorized resale.</p>
              </div>
              <div className="tc-difference-pillar-card">
                <div className="tc-difference-pillar-icon">💼</div>
                <h3 className="tc-difference-pillar-title">Brands Maintain Operational Control</h3>
                <p className="tc-difference-pillar-text">You keep inventory and fulfillment in-house while Toycycle drives visibility, traffic, and conversion.</p>
              </div>
              <div className="tc-difference-pillar-card">
                <div className="tc-difference-pillar-icon">💰</div>
                <h3 className="tc-difference-pillar-title">Higher Returns Than Liquidation</h3>
                <p className="tc-difference-pillar-text">Sales often capture significantly more revenue than traditional liquidation channels—without additional operational burden.</p>
              </div>
              <div className="tc-difference-pillar-card">
                <div className="tc-difference-pillar-icon">👥</div>
                <h3 className="tc-difference-pillar-title">Qualified Customer Leads</h3>
                <p className="tc-difference-pillar-text">Connect with high-intent customers you can engage in future campaigns, DTC promotions, or loyalty programs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section - Partners */}
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

      {/* How It Works Section */}
      <section className="tc-how-it-works">
        <div className="tc-content-container" style={{textAlign: 'center'}}>
          <div className="tc-problem-label" style={{display: 'inline-block', marginBottom: '24px'}}>How It Works</div>
          <h2 className="tc-section-title">How It Works</h2>
          <div className="tc-how-it-works-grid">
            <div className="tc-how-it-works-card">
              <div className="tc-step-header">
                <div className="tc-step-number-wrapper">
                  <div className="tc-step-number">1</div>
                </div>
              </div>
              <div className="tc-step-card-content">
                <h3 className="tc-step-title">You Select the Inventory</h3>
                <p className="tc-step-description">Choose which B-stock or surplus products to list. You stay in control of inventory, pricing parameters, and fulfillment — nothing leaves your warehouse until it sells.</p>
              </div>
            </div>
            <div className="tc-how-it-works-card">
              <div className="tc-step-header">
                <div className="tc-step-number-wrapper">
                  <div className="tc-step-number">2</div>
                </div>
              </div>
              <div className="tc-step-card-content">
                <h3 className="tc-step-title">We Create the Demand</h3>
                <p className="tc-step-description">Toycycle lists and merchandises your products in our trusted off-price marketplace, reaching families actively seeking quality, sustainable toys.</p>
              </div>
            </div>
            <div className="tc-how-it-works-card">
              <div className="tc-step-header">
                <div className="tc-step-number-wrapper">
                  <div className="tc-step-number">3</div>
                </div>
              </div>
              <div className="tc-step-card-content">
                <h3 className="tc-step-title">You Ship When It Sells</h3>
                <p className="tc-step-description">When an order is placed, you ship directly to the customer. We handle the marketplace experience, payments, and customer communications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Toycycle Apart Section */}
      <section className="tc-home-section-problem">
        <div className="tc-content-container">
          <div className="tc-problem-content">
            <div className="tc-problem-label">What Sets Us Apart</div>
            <h2 className="tc-problem-headline">What Sets Toycycle Apart</h2>
            <div className="tc-problem-points-list">
              <div className="tc-problem-point-row">
                <div className="tc-problem-point-icon">🎯</div>
                <div>
                  <h3 className="tc-problem-point-title">Built for Brands, Not Bargain Hunting</h3>
                  <p className="tc-problem-point-text">Toycycle is not a discount marketplace. We serve families who value quality, longevity, and sustainability—creating demand that aligns with brand values, not price erosion.</p>
                </div>
              </div>
              <div className="tc-problem-point-row">
                <div className="tc-problem-point-icon">✨</div>
                <div>
                  <h3 className="tc-problem-point-title">Curated, Brand-Safe by Design</h3>
                  <p className="tc-problem-point-text">Every product and partner on Toycycle is vetted. Off-price inventory appears in a controlled environment that protects brand perception and avoids channel conflict.</p>
                </div>
              </div>
              <div className="tc-problem-point-row">
                <div className="tc-problem-point-icon">🌱</div>
                <div>
                  <h3 className="tc-problem-point-title">Purpose-Driven Demand You Can Trust</h3>
                  <p className="tc-problem-point-text">Toycycle&apos;s audience is built around circular commerce. Families come to Toycycle specifically to buy second-life and off-price toys—making sell-through more intentional and predictable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Looking for More Managed Solution Section */}
      <section className="tc-solutions">
        <div className="tc-content-container">
          <h2 className="tc-section-title">Looking for a More Managed Solution?</h2>
          <p className="tc-home-community-text" style={{textAlign: 'center', marginBottom: '40px', maxWidth: '900px', margin: '0 auto 40px'}}>
            Not every inventory challenge fits a single model. If you&apos;re managing returns, open-box inventory, or more complex resale needs, Toycycle offers additional programs designed to take the operational burden off your team.
          </p>
          <div className="tc-solutions-grid" style={{gridTemplateColumns: '1fr 1fr', maxWidth: '1000px', margin: '0 auto', justifyContent: 'center'}}>
            <div className="tc-solution-card">
              <div className="tc-solution-card-inner">
                <div className="tc-solution-header">
                  <div className="tc-solution-icon">🔄</div>
                  <h3 className="tc-solution-title">Returns Management</h3>
                </div>
                <p className="tc-solution-description">
                  We handle returned and open-box inventory end-to-end.
                </p>
                <div className="tc-solution-cta">
                  <Link href="/contact" className="tc-btn tc-btn-outline">Learn More</Link>
                </div>
              </div>
            </div>
            <div className="tc-solution-card">
              <div className="tc-solution-card-inner">
                <div className="tc-solution-header">
                  <div className="tc-solution-icon">🌐</div>
                  <h3 className="tc-solution-title">Resale-as-a-Service</h3>
                </div>
                <p className="tc-solution-description">
                  Fully outsourced resale operations for brands.
                </p>
                <div className="tc-solution-cta">
                  <Link href="/contact" className="tc-btn tc-btn-outline">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="tc-faq">
        <div className="tc-content-container tc-center">
          <h2 className="tc-section-title">Frequently Asked Questions</h2>
          <div className="tc-faq-grid">
            <div className="tc-faq-item">
              <span className="tc-faq-question">How does Toycycle define &quot;B-Stock&quot;?</span>
              <p className="tc-faq-answer">B-stock covers items that cannot be sold as brand new, including open-box returns, minor packaging damage, or older SKU versions that remain perfectly safe and functional.</p>
            </div>
            <div className="tc-faq-item">
              <span className="tc-faq-question">Who handles shipping and fulfillment?</span>
              <p className="tc-faq-answer">Partners maintain full control. You fulfill orders directly from your warehouse, allowing you to maintain your specific brand shipping standards.</p>
            </div>
            <div className="tc-faq-item">
              <span className="tc-faq-question">How is this different from liquidation?</span>
              <p className="tc-faq-answer">Liquidation dumps product at low prices to random buyers. Our Market is a curated, brand-approved channel that maintains value and targets sustainability-minded families.</p>
            </div>
            <div className="tc-faq-item">
              <span className="tc-faq-question">Is there a cost to join?</span>
              <p className="tc-faq-answer">We work on a performance-based model. We only succeed when you move inventory. Contact our team for specific commission and partnership details.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="tc-home-cta">
        <div className="tc-content-container tc-center">
          <h2 className="tc-cta-title">Make Excess Inventory Matter</h2>
          <p className="tc-cta-text">
            Connect your off-price and B-stock inventory with demand from engaged, sustainability-minded families — unlocking revenue and ESG impact without disruption to your core operations.
          </p>
          <Link href="/contact" className="tc-btn tc-btn-primary">Connect with Us</Link>
        </div>
      </section>

    </div>
  )
}
