import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Features.css";

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  const checkItems = [
    "Organizational structure and department planning",
    "Manpower planning and job descriptions",
    "Recruitment process setup and employee onboarding",
    "KRA, KPI, and performance management systems",
    "HR policies and comprehensive employee handbooks",
    "MIS, reporting, and structured meeting management",
    "Employee engagement and recognition programs",
    "Exit management and process improvement",
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    if (!section || !image || !content) return;

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop & Tablet (min-width: 769px): Subtle 5% inner-image parallax while sticky
      mm.add("(min-width: 769px)", () => {
        gsap.fromTo(
          image,
          {
            yPercent: -5,
          },
          {
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom bottom",
              scrub: true,
            },
          }
        );
      });

      // Restrained scroll reveals on content elements
      const revealElements = content.querySelectorAll(
        ".hr-eyebrow, .hr-heading, .hr-description, .hr-capabilities-grid, .hr-actions"
      );

      revealElements.forEach((el) => {
        gsap.from(el, {
          y: 26,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="features" className="hr-split-section" ref={sectionRef}>
      <div className="hr-split-grid">
        {/* Left 40% Image Panel with Sticky Container */}
        <div className="hr-image-panel">
          <div className="hr-sticky-wrapper">
            <img
              ref={imageRef}
              src="/assets/images/others/01.webp"
              alt="T&S Consulting Group HR Consulting and Organizational Strategy"
              className="hr-sticky-image"
              loading="lazy"
            />
            <div className="hr-image-overlay" aria-hidden="true" />
          </div>
        </div>

        {/* Right 60% Content Panel */}
        <div className="hr-content-panel" ref={contentRef}>
          <div className="hr-content-wrapper">
            <div className="hr-eyebrow">
              <span className="hr-eyebrow-accent" aria-hidden="true" />
              <span className="hr-eyebrow-text">HR CONSULTING</span>
            </div>

            <h2 className="hr-heading">
              Smarter HR. <br className="hr-heading-br" /> Stronger Organizations.
            </h2>

            <p className="hr-description">
              Your people are among your most valuable business assets. Our HR
              consulting services help organizations establish effective
              processes, strengthen employee engagement, and improve overall
              productivity.
            </p>

            <div className="hr-capabilities-grid">
              {checkItems.map((item, index) => (
                <div key={index} className="hr-capability-item">
                  <span className="hr-check-icon" aria-hidden="true">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="hr-capability-text">{item}</span>
                </div>
              ))}
            </div>

            <div className="hr-actions">
              <a href="#contact" className="rts-btn btn-primary">
                Explore HR Solutions
              </a>
              <a href="#services" className="rts-btn btn-border">
                View All Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
