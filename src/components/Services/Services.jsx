import { useState } from 'react'

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(1)

  const services = [
    {
      num: '01',
      title: 'Recruitment & Talent Acquisition',
      desc: 'Connect with qualified professionals who match your business needs, company culture, and long-term goals.',
      img: '/assets/images/service/05.webp',
    },
    {
      num: '02',
      title: 'HR Consulting',
      desc: 'Build effective HR systems, improve workforce planning, streamline processes, and strengthen employee performance.',
      img: '/assets/images/service/05.webp',
    },
    {
      num: '03',
      title: 'Training & Development',
      desc: 'Equip your employees with practical skills, stronger communication, leadership abilities, and confidence to perform.',
      img: '/assets/images/service/05.webp',
    },
    {
      num: '04',
      title: 'Recruitment Terms & Assurance',
      desc: 'Transparent 8.33% CTC fee structure, 30-day payment terms, and a 90-day replacement policy for peace of mind.',
      img: '/assets/images/service/05.webp',
    },
  ]

  return (
    <div id="services" className="rts-service-area rts-section-gap bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-area-between">
              <div className="title-left-wrapper">
                <span className="pre">WHAT WE DO</span>
                <h2 className="title rts-text-anime-style-1">
                  Comprehensive HR <br /> Solutions
                </h2>
              </div>
              <div className="right-area">
                <p className="disc">
                  We provide integrated solutions in Recruitment, HR Consulting, and Training &amp; Development, enabling businesses to build stronger teams and achieve their organizational goals.
                </p>
                <a href="#contact" className="btn-line">
                  <span>Discuss Your Needs</span> <i className="fa-solid fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-12 mt--40">
            <div className="service-area-main-wrapper-digital-agency">
              {services.map((item, index) => {
                const isActive = activeIdx === index
                return (
                  <div
                    key={index}
                    className={`single-digital-agency-wrapper-service ${isActive ? 'active' : ''}`}
                    onMouseEnter={() => setActiveIdx(index)}
                  >
                    <div className="left-area">
                      <div className="thumbnail-image">
                        <figure>
                          <img src={item.img} alt={item.title} />
                        </figure>
                      </div>
                      <div className="title-area-start">
                        <span>{item.num}</span>
                        <a href="#contact">
                          <h5 className="title">{item.title}</h5>
                        </a>
                      </div>
                    </div>
                    <div className="right-area">
                      <div className="details-area">
                        <p className="disc">{item.desc}</p>
                      </div>
                      <div className="arrow-btn-area">
                        <a href="#contact" className="round-btn">
                          <i className="fa-regular fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
