import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    if (!section || !image || !content) return;

    // Respect prefers-reduced-motion
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

      // Restrained scroll reveals on left content elements
      const revealElements = content.querySelectorAll(
        ".kh-about-eyebrow, .kh-about-heading, .kh-about-description, .kh-about-pillars, .kh-about-actions"
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
    <section id="about" className="kh-about-split-section" ref={sectionRef}>
      <div className="kh-about-split-grid">
        {/* Left 60% Content Panel */}
        <div className="kh-about-content-panel" ref={contentRef}>
          <div className="kh-about-content-wrapper">
            <div className="kh-about-eyebrow">
              <span className="kh-about-eyebrow-accent" aria-hidden="true" />
              <span className="kh-about-eyebrow-text">
                ABOUT T&amp;S CONSULTING GROUP
              </span>
            </div>

            <h2 className="kh-about-heading">
              Pledge to Exponential Growth.
            </h2>

            <p className="kh-about-description">
              We partner with businesses to strengthen their people strategies
              through recruitment, HR consulting, and professional training. We
              combine a clear understanding of business needs with practical
              talent solutions that support sustainable growth.
            </p>

            <div className="kh-about-pillars">
              <div className="kh-pillar-item">
                <span className="kh-pillar-num">01</span>
                <div>
                  <h3 className="kh-pillar-title">Recruitment &amp; Executive Sourcing</h3>
                  <p className="kh-pillar-desc">
                    Targeted talent acquisition identifying high-caliber leaders and specialists.
                  </p>
                </div>
              </div>

              <div className="kh-pillar-item">
                <span className="kh-pillar-num">02</span>
                <div>
                  <h3 className="kh-pillar-title">Strategic HR Consulting</h3>
                  <p className="kh-pillar-desc">
                    Optimizing people operations, compliance, organizational culture, and performance.
                  </p>
                </div>
              </div>

              <div className="kh-pillar-item">
                <span className="kh-pillar-num">03</span>
                <div>
                  <h3 className="kh-pillar-title">Training &amp; Professional Development</h3>
                  <p className="kh-pillar-desc">
                    Capability-building and leadership programs that sustain competitive advantage.
                  </p>
                </div>
              </div>
            </div>

            <div className="kh-about-actions">
              <a href="#services" className="rts-btn btn-primary">
                Explore Our Services
              </a>

              <a href="#contact" className="rts-btn btn-border">
                Contact Our Team
              </a>
            </div>
          </div>
        </div>

        {/* Right 40% Image Panel with Sticky Container */}
        <div className="kh-about-image-panel">
          <div className="kh-about-sticky-wrapper">
            <img
              ref={imageRef}
              src="/assets/images/about/01.webp"
              alt="T&S Consulting Group executive discussion and strategic planning"
              className="kh-about-image"
              loading="lazy"
            />
            <div className="kh-about-image-overlay" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
