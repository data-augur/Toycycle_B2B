import Image from 'next/image'
import Link from 'next/link'

export default function CertifiedPartnerMarket() {
  return (
    <div className="tc-landing-wrapper">
      
      <section className="tc-hero">
        <div className="tc-content-container">
          <div className="tc-hero-grid">
            <div className="tc-hero-text-content">
              <h1 className="tc-main-brand-title">Certified Partner Market</h1>
              <h2 className="tc-title-secondary">A Brand-Approved Secondary Channel for Professional B-Stock</h2>
              <p className="tc-hero-lead">Sell your excess and open-box inventory directly to families on a trusted platform that protects your brand integrity.</p>
              <Link href="/contact" className="tc-btn">Apply for Partnership</Link>
            </div>
            
            <div className="tc-hero-image-container">
              <Image 
                src="/images/hero-image.png" 
                alt="Warehouse logistics and brand toys" 
                className="tc-hero-image"
                width={800}
                height={600}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Partners */}
      <section className="tc-home-section-three">
        <div className="tc-content-container">
          <div className="tc-home-section-three-content">
            <p className="tc-home-community-text">
              Built for toy brands with safety, compliance, and brand control at the core
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

      <section className="tc-info">
        <div className="tc-content-container">
          <div className="tc-glass-card tc-center">
            <h2 className="tc-heading-main">What Is the Certified Partner Market?</h2>
            <p className="tc-body-text-xl">The Toycycle Certified Partner Market is a brand-approved secondary commerce channel that allows businesses to list and sell their B-stock or surplus inventory directly to our engaged community — without disrupting core retail or DTC operations.</p>
            <div className="tc-divider"></div>
            <p className="tc-body-text-xl" style={{fontWeight: 700, color: 'var(--tc-brand-green)'}}>You keep inventory and fulfillment. <br />We bring demand, visibility, and trust.</p>
            <p className="tc-hero-lead" style={{fontSize: '1.5rem', fontStyle: 'italic'}}>It&apos;s not clearance. It&apos;s not liquidation. It&apos;s a controlled, certified marketplace built for smarter sell-through.</p>
          </div>
        </div>
      </section>

      <section className="tc-benefits">
        <div className="tc-content-container tc-center">
          <h2 className="tc-heading-main">Why Businesses Choose the Certified Partner Market</h2>
          <div className="tc-grid-list">
            <div className="tc-card tc-center">
              <div className="tc-svg-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3>⚡ Sell-Through at Community Speed</h3>
              <p>Parents come to Toycycle for quality, sustainability, and value — not random bargains. That means faster velocity for verified B-stock.</p>
            </div>
            <div className="tc-card tc-center">
              <div className="tc-svg-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>🛡 Brand Integrity Comes First</h3>
              <p>No off-price dumping. No unauthorized resellers. Your products live in a curated marketplace aligned with your brand values.</p>
            </div>
            <div className="tc-card tc-center">
              <div className="tc-svg-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 4 23 10 17 10"></polyline>
                  <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
                </svg>
              </div>
              <h3>♻ Stronger ESG Outcomes</h3>
              <p>Turn surplus into impact you can report with confidence:</p>
              <ul>
                <li>Reduce waste</li>
                <li>Extend product lifecycles</li>
                <li>Share ESG-ready results with stakeholders</li>
              </ul>
            </div>
            <div className="tc-card tc-center">
              <div className="tc-svg-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3>💼 Keep Operations Simple</h3>
              <p>You fulfill directly from your warehouse. We handle merchandising, promotion, and checkout without touching your supply chain.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="tc-how tc-hero">
        <div className="tc-content-container tc-center">
          <h2 className="tc-heading-main">How It Works (Simple. Strategic. Seamless.)</h2>
          <div className="tc-grid-list" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'}}>
            <div className="tc-step-item tc-center">
              <div className="tc-step-circle">1</div>
              <p className="tc-step-text"><strong>Select Inventory</strong><br />B-stock, open-box, or surplus SKUs.</p>
            </div>
            <div className="tc-step-item tc-center">
              <div className="tc-step-circle">2</div>
              <p className="tc-step-text"><strong>List</strong><br />As a verified brand seller.</p>
            </div>
            <div className="tc-step-item tc-center">
              <div className="tc-step-circle">3</div>
              <p className="tc-step-text"><strong>Fulfill</strong><br />Ship directly from your warehouse.</p>
            </div>
            <div className="tc-step-item tc-center">
              <div className="tc-step-circle">4</div>
              <p className="tc-step-text"><strong>Demand</strong><br />We manage visibility and trust.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="tc-why">
        <div className="tc-content-container">
          <div className="tc-grid-list">
            <div>
              <h2 className="tc-heading-main" style={{textAlign: 'left'}}>Why Toycycle?</h2>
              <p className="tc-body-text-xl">We&apos;re not another marketplace. We&apos;re a circular commerce partner built around:</p>
              <ul className="tc-check-list" style={{marginTop: '20px'}}>
                <li>A highly engaged, values-aligned parent community</li>
                <li>Purpose-driven buying experiences</li>
                <li>Transparency and trust</li>
                <li>Intentional product featuring (no buried listings)</li>
              </ul>
            </div>
            <div className="tc-glass-card" style={{padding: '40px', background: 'var(--tc-light-green)', border: 'none'}}>
              <h3 style={{color: 'var(--tc-brand-green)', fontSize: '2rem', marginBottom: '15px'}}>Who This Program Is For</h3>
              <ul className="tc-check-list">
                <li>Have excess, B-stock, or open-box inventory</li>
                <li>Want to protect retail and DTC pricing</li>
                <li>Care about sustainability outcomes</li>
                <li>Want high SKU velocity without operational complexity</li>
                <li>Already manage their own warehousing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="tc-faq">
        <div className="tc-content-container tc-center">
          <h2 className="tc-heading-main">Frequently Asked Questions</h2>
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

      <section className="tc-cta tc-center">
        <div className="tc-content-container tc-center">
          <div className="tc-glass-card tc-center" style={{backgroundColor: 'var(--tc-light-green)', border: 'none', width: '100%'}}>
            <h2 className="tc-heading-main">Let&apos;s Make Surplus Inventory Matter</h2>
            <p className="tc-body-text-xl">Give your excess stock a second life — one that protects your brand, delivers stakeholder value, and reaches families who will truly use and love it.</p>
            <Link href="/contact" className="tc-btn">Talk to Our Partnerships Team</Link>
          </div>
        </div>
      </section>

    </div>
  )
}



