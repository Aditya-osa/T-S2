import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./RecruitmentProcess.css";

gsap.registerPlugin(ScrollTrigger);

const recruitmentSteps = [
    {
        number: "01",
        title: "Understand Your Requirements",
        description:
            "We understand your hiring needs, job responsibilities, required skills, experience, and organizational goals.",
        image:
            "assets/images/image copy.png",
        alt: "Recruitment team discussing hiring requirements",
        layout: "step-down",
    },
    {
        number: "02",
        title: "Source the Right Candidates",
        description:
            "We identify and shortlist suitable candidates through targeted sourcing and profile screening.",
        image:
            "assets/images/image copy 2.png",
        alt: "Professionals collaborating on candidate sourcing",
        layout: "step-up",
    },
    {
        number: "03",
        title: "Evaluate & Interview",
        description:
            "We coordinate interviews and help assess candidates based on their qualifications, experience, and role suitability.",
        image:
            "assets/images/image copy 3.png",
        alt: "Professional interview and candidate evaluation",
        layout: "step-down",
    },
    {
        number: "04",
        title: "Selection & Joining",
        description:
            "We support the selection and offer process, coordinate communication, and assist with joining formalities.",
        image:
            "assets/images/image copy 4.png",
        alt: "Welcoming new team member and joining handshake",
        layout: "step-up",
    },
];

function RecruitmentProcess() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        // Respect prefers-reduced-motion
        const prefersReducedMotion =
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) {
            return;
        }

        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray(".process-item");

            // Section header reveal
            gsap.from(".process-subtitle, .process-title, .process-intro", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".process-header",
                    start: "top 85%",
                    once: true,
                },
            });

            const mm = gsap.matchMedia();

            // 1. DESKTOP (min-width: 1101px): 4 steps synced with 4 line segments on scroll
            mm.add("(min-width: 1101px)", () => {
                const animTarget =
                    section.querySelector("#recruitment-mask-path") ||
                    section.querySelector("#recruitment-progress-path");

                if (!animTarget || items.length < 4) return;

                const pathLength = animTarget.getTotalLength();

                // Compute exact curve length at column boundaries (x = 300, 600, 900)
                const findLengthAtX = (targetX) => {
                    let low = 0;
                    let high = pathLength;
                    for (let i = 0; i < 24; i++) {
                        const mid = (low + high) / 2;
                        const pt = animTarget.getPointAtLength(mid);
                        if (pt.x < targetX) low = mid;
                        else high = mid;
                    }
                    return (low + high) / 2;
                };

                const len1 = findLengthAtX(300);
                const len2 = findLengthAtX(600);
                const len3 = findLengthAtX(900);

                // Initially hide the line
                gsap.set(animTarget, {
                    strokeDasharray: `${pathLength} ${pathLength}`,
                    strokeDashoffset: pathLength,
                });

                const startDot = section.querySelector(".curve-dot-start");
                const midDot = section.querySelector(".curve-dot-mid");
                const endArrow = section.querySelector(".curve-arrow-end");

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".process-flow-wrapper",
                        start: "top 78%",
                        end: "bottom 65%",
                        scrub: 0.8,
                    },
                });

                const animateStep = (item, isFirst = false) => {
                    const number = item.querySelector(".step-number");
                    const ring = item.querySelector(".step-image-ring");
                    const content = item.querySelector(".step-content");

                    tl.from(
                        item,
                        {
                            y: 45,
                            opacity: 0,
                            duration: 1,
                            ease: "power2.out",
                        },
                        isFirst ? 0 : ">-0.15"
                    )
                        .from(
                            number,
                            {
                                scale: 0.55,
                                opacity: 0,
                                duration: 0.5,
                                ease: "back.out(1.8)",
                            },
                            "<0.1"
                        )
                        .from(
                            ring,
                            {
                                scale: 0.72,
                                opacity: 0,
                                duration: 0.55,
                                ease: "back.out(1.5)",
                            },
                            "<0.1"
                        )
                        .from(
                            content,
                            {
                                y: 18,
                                opacity: 0,
                                duration: 0.45,
                                ease: "power2.out",
                            },
                            "<0.15"
                        );
                };

                // SEGMENT 1: Step 01 & line draws toward Step 01 (x=310)
                if (startDot) {
                    tl.from(startDot, { scale: 0, opacity: 0, duration: 0.3, ease: "back.out(2)" }, 0);
                }
                animateStep(items[0], true);
                tl.to(
                    animTarget,
                    {
                        strokeDashoffset: pathLength - len1,
                        duration: 1,
                        ease: "none",
                    },
                    "<"
                );

                // SEGMENT 2: Step 02 & line draws toward Step 02 (x=600)
                animateStep(items[1]);
                tl.to(
                    animTarget,
                    {
                        strokeDashoffset: pathLength - len2,
                        duration: 1,
                        ease: "none",
                    },
                    "<"
                );
                if (midDot) {
                    tl.from(midDot, { scale: 0, opacity: 0, duration: 0.35, ease: "back.out(2)" }, ">-0.2");
                }

                // SEGMENT 3: Step 03 & line draws toward Step 03 (x=900)
                animateStep(items[2]);
                tl.to(
                    animTarget,
                    {
                        strokeDashoffset: pathLength - len3,
                        duration: 1,
                        ease: "none",
                    },
                    "<"
                );

                // SEGMENT 4: Step 04 & line finishes at Step 04 (x=1170)
                animateStep(items[3]);
                tl.to(
                    animTarget,
                    {
                        strokeDashoffset: 0,
                        duration: 1,
                        ease: "none",
                    },
                    "<"
                );
                if (endArrow) {
                    tl.from(endArrow, { scale: 0, opacity: 0, duration: 0.35, ease: "back.out(2)" }, ">-0.15");
                }
            });

            // 2. TABLET (601px - 1100px): 2x2 grid scroll reveal
            mm.add("(min-width: 601px) and (max-width: 1100px)", () => {
                items.forEach((item) => {
                    const number = item.querySelector(".step-number");
                    const ring = item.querySelector(".step-image-ring");
                    const content = item.querySelector(".step-content");

                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%",
                            end: "top 55%",
                            scrub: 0.8,
                        },
                    });

                    tl.from(item, {
                        y: 40,
                        opacity: 0,
                        duration: 0.7,
                        ease: "power2.out",
                    })
                        .from(number, {
                            scale: 0.6,
                            opacity: 0,
                            duration: 0.45,
                            ease: "back.out(1.8)",
                        }, "<0.1")
                        .from(ring, {
                            scale: 0.75,
                            opacity: 0,
                            duration: 0.5,
                            ease: "back.out(1.5)",
                        }, "<0.1")
                        .from(content, {
                            y: 15,
                            opacity: 0,
                            duration: 0.4,
                            ease: "power2.out",
                        }, "<0.15");
                });
            });

            // 3. MOBILE (max-width: 600px): Vertical stack scroll reveal
            mm.add("(max-width: 600px)", () => {
                items.forEach((item) => {
                    const number = item.querySelector(".step-number");
                    const ring = item.querySelector(".step-image-ring");
                    const content = item.querySelector(".step-content");

                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: item,
                            start: "top 88%",
                            end: "top 50%",
                            scrub: 0.8,
                        },
                    });

                    tl.from(item, {
                        y: 35,
                        opacity: 0,
                        duration: 0.6,
                        ease: "power2.out",
                    })
                        .from(number, {
                            scale: 0.6,
                            opacity: 0,
                            duration: 0.4,
                            ease: "back.out(1.8)",
                        }, "<0.1")
                        .from(ring, {
                            scale: 0.75,
                            opacity: 0,
                            duration: 0.45,
                            ease: "back.out(1.5)",
                        }, "<0.1")
                        .from(content, {
                            y: 12,
                            opacity: 0,
                            duration: 0.35,
                            ease: "power2.out",
                        }, "<0.1");
                });
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section className="recruitment-process" id="recruitment-process" ref={sectionRef}>
            <div className="recruitment-container">
                <header className="process-header">
                    <span className="process-subtitle">
                        <span className="process-subtitle-line" />
                        OUR RECRUITMENT PROCESS
                    </span>

                    <h2 className="process-title">
                        From Hiring Needs to the{" "}
                        <span>Right Talent</span>
                    </h2>

                    <p className="process-intro">
                        A structured approach to identifying, evaluating, and connecting
                        businesses with the right professionals.
                    </p>
                </header>

                <div className="process-flow-wrapper">
                    <svg
                        className="process-connecting-curve"
                        viewBox="0 0 1200 480"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <defs>
                            <mask id="recruitment-curve-mask">
                                <path
                                    id="recruitment-mask-path"
                                    d="M 25 150 C 65 158 100 179 141 179 C 240 179 345 326 447 326 C 550 326 650 179 753 179 C 855 179 955 326 1059 326 C 1110 326 1150 225 1175 175"
                                    stroke="#ffffff"
                                    strokeWidth="12"
                                    fill="none"
                                />
                            </mask>
                        </defs>

                        <circle
                            className="curve-dot-start"
                            cx="25"
                            cy="150"
                            r="5"
                            fill="#ffffff"
                            stroke="#C39A4E"
                            strokeWidth="2"
                        />

                        <path
                            id="recruitment-progress-path"
                            className="process-curve-path"
                            d="M 25 150 C 65 158 100 179 141 179 C 240 179 345 326 447 326 C 550 326 650 179 753 179 C 855 179 955 326 1059 326 C 1110 326 1150 225 1175 175"
                            stroke="#C39A4E"
                            strokeWidth="2"
                            strokeDasharray="5 8"
                            fill="none"
                            mask="url(#recruitment-curve-mask)"
                        />

                        <circle
                            className="curve-dot-mid"
                            cx="600"
                            cy="252"
                            r="5"
                            fill="#ffffff"
                            stroke="#1C3A5F"
                            strokeWidth="2"
                        />

                        <g className="curve-arrow-end" transform="translate(1160 160) rotate(-32) scale(1)">
                            <path
                                d="M2 21L23 12L2 3L2 10L17 12L2 14L2 21Z"
                                fill="#1C3A5F"
                            />
                        </g>
                    </svg>

                    <div className="process-grid">
                        {recruitmentSteps.map((step) => {
                            const isContentUp = step.layout === "step-up";

                            return (
                                <article
                                    className={`process-item ${step.layout}`}
                                    key={step.number}
                                >
                                    {isContentUp ? (
                                        <>
                                            <div className="step-content">
                                                <span className="step-label">
                                                    STEP {step.number}
                                                </span>
                                                <h3 className="step-title">{step.title}</h3>
                                                <p className="step-desc">{step.description}</p>
                                            </div>

                                            <span className="step-number" aria-hidden="true">
                                                {step.number}
                                            </span>

                                            <div className="step-image-wrap">
                                                <div className="step-image-ring">
                                                    <img
                                                        src={step.image}
                                                        alt={step.alt}
                                                        className="step-img"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <span className="step-number" aria-hidden="true">
                                                {step.number}
                                            </span>

                                            <div className="step-image-wrap">
                                                <div className="step-image-ring">
                                                    <img
                                                        src={step.image}
                                                        alt={step.alt}
                                                        className="step-img"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>

                                            <div className="step-content">
                                                <span className="step-label">
                                                    STEP {step.number}
                                                </span>
                                                <h3 className="step-title">{step.title}</h3>
                                                <p className="step-desc">{step.description}</p>
                                            </div>
                                        </>
                                    )}
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RecruitmentProcess;
