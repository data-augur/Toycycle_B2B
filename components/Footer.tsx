import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="tc-footer">
      <div className="tc-footer-container">
        <div className="tc-footer-content">
          <div className="tc-footer-section">
            <Link href="/" className="tc-footer-logo">
              <Image 
                src="/images/TOYCYCLE-LOGO-HQ-white.webp" 
                alt="Toycycle Logo" 
                width={120}
                height={35}
                className="tc-footer-logo-img"
              />
            </Link>
            <p className="tc-footer-tagline">
              Empowering businesses to grow sustainably while safeguarding our environment.
            </p>
          </div>

          <div className="tc-footer-section">
            <h4 className="tc-footer-heading">Solutions</h4>
            <ul className="tc-footer-links">
              <li><Link href="/b-stock-drop-ship">B-Stock Drop Ship</Link></li>
              <li><Link href="/returns-management">Returns Management</Link></li>
              <li><Link href="/resale-as-a-service">Resale as a Service</Link></li>
            </ul>
          </div>

          <div className="tc-footer-section">
            <h4 className="tc-footer-heading">Company</h4>
            <ul className="tc-footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="tc-footer-section">
            <h4 className="tc-footer-heading">Contact</h4>
            <ul className="tc-footer-links">
              <li><a href="mailto:partnerships@toycycle.com">partnerships@toycycle.com</a></li>
            </ul>
          </div>
        </div>

        <div className="tc-footer-bottom">
          <p className="tc-footer-copyright">
            © {new Date().getFullYear()} Toycycle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}


