import { useState, useEffect } from 'react'
import logoImg from '../../assets/logo-ts-cropped.png'
import rawLogo from '../../assets/WhatsApp Image 2026-10-17 at 6,01,05 PM-Picsart-BackgroundRemover.jpeg'
import './Header.css'

export default function Header({ onOpenSidebar }) {
  const [isSticky, setIsSticky] = useState(false)
  const [activeNav, setActiveNav] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`orynex-header-container ${isSticky ? 'is-sticky' : ''}`}>
      {/* Top Slogan Banner - Preserved */}
      <div className="header-top-slogan-wrapper">
        <div className="header-top-slogan">
          <span>YOUR PEOPLE. OUR PRIORITY.</span>
        </div>
      </div>

      {/* Main Reference Header Bar */}
      <div className="orynex-header-bar">
        <div className="orynex-header-inner">
          {/* Left: Brand Logo & Name */}
          <div className="orynex-logo-col">
            <a href="#home" className="orynex-logo-link" onClick={() => setActiveNav('#home')}>
              <div className="orynex-logo-badge">
                <img src={logoImg || rawLogo} alt="T&S Consulting Group" className="orynex-logo-img" />
              </div>

            </a>
          </div>

          {/* Center: Dark Capsule Navigation Pill */}
          <nav className="orynex-nav-col">
            <div className="orynex-nav-capsule">
              <a
                href="#home"
                className={`orynex-nav-item ${activeNav === '#home' ? 'active' : ''}`}
                onClick={() => setActiveNav('#home')}
              >
                Home
              </a>
              <a
                href="#about"
                className={`orynex-nav-item ${activeNav === '#about' ? 'active' : ''}`}
                onClick={() => setActiveNav('#about')}
              >
                About
              </a>

              {/* Service Dropdown */}
              <div className="orynex-dropdown-wrapper">
                <a
                  href="#services"
                  className={`orynex-nav-item has-arrow ${activeNav === '#services' ? 'active' : ''}`}
                  onClick={() => setActiveNav('#services')}
                >
                  <span>Service</span>
                  <svg className="orynex-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </a>
                <div className="orynex-dropdown-menu service-dropdown">
                  <a href="#services" className="orynex-dropdown-item">
                    <div className="dropdown-item-icon">
                      <img src="/assets/images/service/01.svg" alt="icon" />
                    </div>
                    <div>
                      <h6>Recruitment &amp; Talent Acquisition</h6>
                      <p>Targeted hiring matching organizational culture</p>
                    </div>
                  </a>
                  <a href="#features" className="orynex-dropdown-item">
                    <div className="dropdown-item-icon">
                      <img src="/assets/images/service/02.svg" alt="icon" />
                    </div>
                    <div>
                      <h6>HR Consulting</h6>
                      <p>Workforce planning, performance, and structure</p>
                    </div>
                  </a>
                  <a href="#training" className="orynex-dropdown-item">
                    <div className="dropdown-item-icon">
                      <img src="/assets/images/service/03.svg" alt="icon" />
                    </div>
                    <div>
                      <h6>Training &amp; Development</h6>
                      <p>Custom capability and leadership building</p>
                    </div>
                  </a>
                  <a href="#faq" className="orynex-dropdown-item">
                    <div className="dropdown-item-icon">
                      <img src="/assets/images/service/04.svg" alt="icon" />
                    </div>
                    <div>
                      <h6>Terms &amp; Replacement Policy</h6>
                      <p>8.33% fee &amp; 90-day guarantee</p>
                    </div>
                  </a>
                </div>
              </div>

              <a
                href="#blog"
                className={`orynex-nav-item ${activeNav === '#blog' ? 'active' : ''}`}
                onClick={() => setActiveNav('#blog')}
              >
                Blog
              </a>

              {/* Pages Dropdown */}
              <div className="orynex-dropdown-wrapper">
                <a
                  href="#projects"
                  className={`orynex-nav-item has-arrow ${activeNav === '#pages' ? 'active' : ''}`}
                  onClick={() => setActiveNav('#pages')}
                >
                  <span>Pages</span>
                  <svg className="orynex-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </a>
                <div className="orynex-dropdown-menu pages-dropdown">
                  <a href="#projects" className="orynex-dropdown-subitem">Why Choose Us</a>
                  <a href="#industries" className="orynex-dropdown-subitem">Industries We Serve</a>
                  <a href="#team" className="orynex-dropdown-subitem">Leadership &amp; Team</a>
                  <a href="#faq" className="orynex-dropdown-subitem">Frequently Asked Questions</a>
                </div>
              </div>
            </div>
          </nav>

          {/* Right: Let's Talk Button & Mobile Toggle */}
          <div className="orynex-action-col">
            <a href="#contact" className="orynex-talk-btn">
              Let's Talk
            </a>

            <button
              className="circle-grid-menu-btn"
              onClick={onOpenSidebar}
              aria-label="Toggle Menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.5" y="2.5" width="5.5" height="5.5" rx="1.5" stroke="currentColor" strokeWidth="2" />
                <rect x="12" y="2.5" width="5.5" height="5.5" rx="1.5" stroke="currentColor" strokeWidth="2" />
                <rect x="2.5" y="12" width="5.5" height="5.5" rx="1.5" stroke="currentColor" strokeWidth="2" />
                <rect x="12" y="12" width="5.5" height="5.5" rx="1.5" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
