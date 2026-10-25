import './Hero.css'

export default function Hero({ onOpenVideo: _onOpenVideo }) {
  const tickerItems = [
    'HR CONSULTING',
    'TALENT STRATEGY',
    'LEARNING & DEVELOPMENT',
    'WORKFORCE SOLUTIONS',
    'RECRUITMENT',
    'EXECUTIVE SEARCH',
    'PERFORMANCE ADVISORY',
  ]

  return (
    <div id="home" className="banner-parallax-wrapper">
      {/* Parallax background banner with hero content */}
      <div className="banner-bg-attach-agency">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-style-one-wrapper-inner">
                <span className="pre-title">YOUR PEOPLE. OUR PRIORITY.</span>
                <h1 className="title">
                  Empowering Businesses Through People &amp; Strategy
                </h1>
                <p className="disc">
                  T&amp;S Consulting Group helps businesses grow with the right talent, strategic HR solutions,
                  and customized employee training.
                </p>
                <div className="button-wrapper">
                  <a href="#services" className="rts-btn btn-primary btn-white">
                    Explore Our Services
                  </a>
                  <a href="#contact" className="rts-btn btn-primary">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width continuous Marquee / Ticker Bar (Brand Blue & White, No Cutoff) */}
      <div className="hero-ticker-wrapper">
        <div className="hero-ticker-track">
          <div className="hero-ticker-group">
            {tickerItems.map((item, index) => (
              <span key={`group-1-${index}`} className="hero-ticker-unit">
                <span className="hero-ticker-text">{item}</span>
                <span className="hero-ticker-dot" aria-hidden="true">•</span>
              </span>
            ))}
          </div>
          <div className="hero-ticker-group" aria-hidden="true">
            {tickerItems.map((item, index) => (
              <span key={`group-2-${index}`} className="hero-ticker-unit">
                <span className="hero-ticker-text">{item}</span>
                <span className="hero-ticker-dot" aria-hidden="true">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
