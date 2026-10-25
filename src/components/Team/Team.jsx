import { HoverTransition } from '@/components/ui/hover-transition'
import './VisionMission.css'

function DefaultExpertiseCard({ item }) {
  return (
    <article className="consulting-card-default has-photo">
      <img src={item.img} alt={item.name} className="consulting-card-bg-img" loading="lazy" />
      <div className="consulting-card-overlay" aria-hidden="true" />
      <div className="consulting-card-info">
        <h3 className="consulting-card-title">{item.name}</h3>
        <span className="consulting-card-designation">{item.role}</span>
      </div>
    </article>
  )
}

function HoverExpertiseCard({ item }) {
  return (
    <article className="consulting-card-hover">
      <div>
        <i className="fa-solid fa-quote-left consulting-card-hover-quote-icon" aria-hidden="true"></i>
        <p className="consulting-card-hover-desc">
          {item.hoverDesc}
        </p>
      </div>
      <div className="consulting-card-hover-footer">
        <div className="consulting-card-hover-author">
          <img src={item.img} alt={item.name} className="consulting-hover-avatar" loading="lazy" />
          <div>
            <p className="consulting-card-hover-name">{item.name}</p>
            <p className="consulting-card-hover-role">
              {item.role}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Team() {
  const practiceAreas = [
    {
      name: 'Rahul Singh',
      role: 'Recruitment & Executive Search',
      initials: 'TA',
      desc: 'Connecting organizations with proven leadership talent and specialized professionals.',
      hoverDesc: 'Specialized executive sourcing and targeted recruitment tailored to your exact leadership profile.',
      img: '/assets/images/team/01.webp',
    },
    {
      name: 'Aditya Sahu',
      role: 'Systems, Policy & Compliance',
      initials: 'HR',
      desc: 'Building scalable HR infrastructure, governance frameworks, and performance systems.',
      hoverDesc: 'Optimizing people operations, statutory compliance, employee handbooks, and workplace culture.',
      img: '/assets/images/team/02.webp',
    },
    {
      name: 'Virat Sharma',
      role: 'Learning & Leadership Development',
      initials: 'LD',
      desc: 'Empowering teams with customized corporate training, manager toolkits, and leadership skill.',
      hoverDesc: 'Hands-on capability building that transforms workplace performance and aligns team synergy.',
      img: '/assets/images/team/03.webp',
    },
    {
      name: 'Rohit Khapra',
      role: 'KRA, KPI & Appraisal Design',
      initials: 'PC',
      desc: 'Designing outcome-driven metric systems and structured review cadences that boost productivity.',
      hoverDesc: 'Clear accountability frameworks and appraisal cycles directly linked to business objectives.',
      img: '/assets/images/team/04.webp',
    },
    {
      name: 'Vikrant Mehra',
      role: 'Workforce Planning & Induction',
      initials: 'MS',
      desc: 'Aligning headcount forecasting, job profiling, and seamless onboarding experiences.',
      hoverDesc: 'Strategic workforce modeling and onboarding workflows to accelerate new hire time-to-productivity.',
      img: '/assets/images/team/02.webp',
    },
    {
      name: 'Rahul Gupta',
      role: 'Dedicated Search & Support',
      initials: 'CP',
      desc: 'Providing responsive end-to-end partner management with transparent SLA fulfillment.',
      hoverDesc: 'Dedicated single point of contact ensuring fast turnaround and high-caliber placement accuracy.',
      img: '/assets/images/team/03.webp',
    },
  ]

  return (
    <div id="team" className="rts-team-members-area rts-section-gap bg_light">
      <div className="container">
        {/* Vision & Mission Split Card (Logo Blue, Black, White - Matching Reference Layout) */}
        <div className="vm-split-wrapper">
          <div className="vm-split-card">
            {/* Desktop Diagonal Background Graphic */}
            <svg
              className="vm-bg-svg"
              preserveAspectRatio="none"
              viewBox="0 0 1000 500"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Right polygon (Mission side) */}
              <path d="M 545 0 L 1000 0 L 1000 500 L 265 500 Z" fill="#f8fafc" />
              {/* Left polygon (Vision side) */}
              <path d="M 0 0 L 525 0 L 245 500 L 0 500 Z" fill="#004d9c" />
            </svg>

            <div className="vm-grid">
              {/* Left side: OUR VISION */}
              <div className="vm-side-vision">
                <div className="vm-vision-content">
                  <div className="vm-heading-group">
                    <span className="vm-eyebrow">OUR</span>
                    <h3 className="vm-main-title">VISION</h3>
                  </div>
                  <p className="vm-desc">
                    To empower organizations with the right people and the right strategies, enabling them to grow, perform, and lead.
                  </p>
                </div>

                <div className="vm-icon-vision-wrap" aria-hidden="true">
                  <svg
                    className="vm-eye-icon"
                    viewBox="0 0 100 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M50 2C27 2 7.8 17.5 2 30C7.8 42.5 27 58 50 58C73 58 92.2 42.5 98 30C92.2 17.5 73 2 50 2ZM50 50C39 50 30 41 30 30C30 19 39 10 50 10C61 10 70 19 70 30C70 41 61 50 50 50ZM50 22C45.6 22 42 25.6 42 30C42 34.4 45.6 38 50 38C54.4 38 58 34.4 58 30C58 25.6 54.4 22 50 22Z"
                      fill="#ffffff"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {/* Right side: OUR MISSION */}
              <div className="vm-side-mission">
                <div className="vm-target-wrap" aria-hidden="true">
                  <svg
                    className="vm-target-icon"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Concentric Bullseye Rings */}
                    <circle cx="34" cy="46" r="26" stroke="#004d9c" strokeWidth="5" fill="none" />
                    <circle cx="34" cy="46" r="16" stroke="#004d9c" strokeWidth="5" fill="none" />
                    <circle cx="34" cy="46" r="6" fill="#004d9c" />
                    {/* Arrow Shaft hitting center */}
                    <path d="M37 43L63 17" stroke="#004d9c" strokeWidth="5" strokeLinecap="round" />
                    {/* Arrow Fletchings */}
                    <path d="M54 17L64 15L62 25" stroke="#004d9c" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M60 11L70 9L68 19" stroke="#004d9c" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div className="vm-mission-content">
                  <div className="vm-heading-group">
                    <span className="vm-eyebrow">OUR</span>
                    <h3 className="vm-main-title">MISSION</h3>
                  </div>
                  <p className="vm-desc">
                    To transform organizations through strategic consulting, exceptional talent, and practical execution that delivers measurable growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Companion Core Values Card */}
          <div className="vm-values-card mt--30">
            <div className="vm-values-label">
              <div className="vm-values-icon-badge">
                <i className="fa-solid fa-award"></i>
              </div>
              <div>
                <span>Core Foundation</span>
                <h5>Our Values</h5>
              </div>
            </div>
            <div className="vm-values-tags">
              <span className="vm-value-tag">
                <i className="fa-solid fa-circle-check"></i> Trustworthiness &amp; Accountability
              </span>
              <span className="vm-value-tag">
                <i className="fa-solid fa-circle-check"></i> Ethics &amp; Integrity
              </span>
              <span className="vm-value-tag">
                <i className="fa-solid fa-circle-check"></i> Humility, Respect &amp; Collaboration
              </span>
              <span className="vm-value-tag">
                <i className="fa-solid fa-circle-check"></i> Continuous Improvement &amp; Excellence
              </span>
              <span className="vm-value-tag">
                <i className="fa-solid fa-circle-check"></i> Commitment to Positive Difference
              </span>
            </div>
          </div>
        </div>

        {/* Consulting Team & Expertise Section */}
        <div className="row consulting-expertise-area" style={{ paddingTop: '32px' }}>
          <div className="col-lg-12">
            <div className="title-area-between">
              <div className="title-left-wrapper">
                <span className="pre">CONSULTING EXPERTISE</span>
                <h2 className="title rts-text-anime-style-1">The People Behind Your Growth</h2>
              </div>
              <div className="right-area">
                <p className="disc">
                  Our consultants bring deep market understanding, practical execution skills, and a people-first mindset to every engagement.
                </p>
                <a href="#contact" className="btn-line">
                  <span>Partner With Us</span> <i className="fa-solid fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-5 mt--20">
          <div className="col-lg-12">
            <div className="team-swiper-area">
              <div className="swiper mySwiper-team-one">
                <div className="swiper-wrapper">
                  {practiceAreas.map((m, i) => (
                    <div className="swiper-slide" key={i}>
                      <HoverTransition
                        effect="wipe"
                        direction="right"
                        duration={0.72}
                        defaultComponent={<DefaultExpertiseCard item={m} />}
                        hoverComponent={<HoverExpertiseCard item={m} />}
                        className="w-full max-w-sm rounded-3xl"
                      />
                    </div>
                  ))}
                </div>
                <div className="swiper-pagination"></div>
              </div>
              <div className="swiper-button-next">
                <i className="fa-solid fa-chevron-right"></i>
              </div>
              <div className="swiper-button-prev">
                <i className="fa-solid fa-chevron-left"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
