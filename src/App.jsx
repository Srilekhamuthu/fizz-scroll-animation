import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ==========================================
      // 1. INITIAL PAGE LOAD ANIMATION
      // ==========================================

      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      intro
        .from(".eyebrow", {
          opacity: 0,
          y: 25,
          duration: 0.7,
        })

        .from(
          ".welcome-text",
          {
            opacity: 0,
            y: 45,
            duration: 0.8,
          },
          "-=0.35"
        )

        .from(
          ".fizz-text",
          {
            opacity: 0,
            y: 45,
            duration: 0.8,
          },
          "-=0.55"
        )

        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
          },
          "-=0.45"
        )

        .from(
          ".stat",
          {
            opacity: 0,
            y: 25,
            duration: 0.55,
            stagger: 0.14,
          },
          "-=0.3"
        )

        .from(
          ".fizz-can",
          {
            opacity: 0,
            scale: 0.75,
            rotation: -12,
            duration: 1,
            ease: "back.out(1.4)",
          },
          "-=0.7"
        )

        .from(
          ".bubble",
          {
            opacity: 0,
            scale: 0,
            duration: 0.45,
            stagger: 0.1,
            ease: "back.out(2)",
          },
          "-=0.5"
        );

      // ==========================================
      // 2. MAIN CAN SCROLL ANIMATION
      // ==========================================

      gsap.to(".fizz-can", {
        x: -120,
        y: 180,
        rotation: 38,
        scale: 1.08,

        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // ==========================================
      // 3. BUBBLE MOVEMENT
      // ==========================================

      gsap.to(".bubble-one", {
        x: 70,
        y: -130,
        rotation: 80,

        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(".bubble-two", {
        x: -60,
        y: -170,
        rotation: -70,

        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });

      gsap.to(".bubble-three", {
        x: 90,
        y: 120,

        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // ==========================================
      // 4. HEADLINE MOVEMENT
      // ==========================================

      gsap.to(".hero-title", {
        y: -80,
        opacity: 0.45,

        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // ==========================================
      // 5. DESCRIPTION MOVEMENT
      // ==========================================

      gsap.to(".hero-description", {
        y: -45,
        opacity: 0.55,

        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // ==========================================
      // 6. STATISTICS MOVEMENT
      // ==========================================

      gsap.to(".stats", {
        y: -25,

        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // ==========================================
      // 7. SECOND SECTION REVEAL
      // ==========================================

      gsap.from(".experience-content", {
        opacity: 0,
        y: 80,
        duration: 1,

        scrollTrigger: {
          trigger: ".experience-section",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // ==========================================
      // 8. FINAL SECTION REVEAL
      // ==========================================

      gsap.from(".final-content", {
        opacity: 0,
        y: 80,
        duration: 1,

        scrollTrigger: {
          trigger: ".final-section",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Refresh ScrollTrigger after layout is ready
      ScrollTrigger.refresh();
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef}>

      {/* ==========================================
          HERO
      ========================================== */}

      <section className="hero">

        <div className="hero-content">

          <p className="eyebrow text-xs font-semibold uppercase">
            THE NEW EXPERIENCE
          </p>

          <h1 className="hero-title">

            <span className="welcome-text">
              W E L C O M E
            </span>

            <span className="fizz-text">
              I T Z  F I Z Z
            </span>

          </h1>

          <p className="hero-description">
            A refreshing digital experience designed
            to move with you.
          </p>

          {/* ======================================
              STATISTICS
          ====================================== */}

          <div className="stats">

            <div className="stat">
              <strong>87%</strong>

              <span>
                Customer
                <br />
                Satisfaction
              </span>
            </div>

            <div className="stat">
              <strong>92%</strong>

              <span>
                Freshness
                <br />
                Guaranteed
              </span>
            </div>

            <div className="stat">
              <strong>76%</strong>

              <span>
                Growing Every
                <br />
                Day
              </span>
            </div>

          </div>

        </div>


        {/* ==========================================
            MAIN VISUAL
        ========================================== */}

        <div className="hero-visual">

          <div className="fizz-can">

            <div className="can-top"></div>

            <div className="can-body">

              <span className="can-small-text">
                SPARKLING
              </span>

              <span className="can-title">
                FIZZ
              </span>

              <span className="can-small-text">
                PURE ENERGY
              </span>

            </div>

            <div className="can-bottom"></div>

          </div>


          {/* BUBBLES */}

          <div className="bubble bubble-one"></div>

          <div className="bubble bubble-two"></div>

          <div className="bubble bubble-three"></div>

        </div>

      </section>


      {/* ==========================================
          SMALL SCROLL MESSAGE
      ========================================== */}

      <section className="scroll-hint">

        <p>
          SCROLL TO EXPLORE
        </p>

        <div className="scroll-line"></div>

      </section>


      {/* ==========================================
          EXPERIENCE SECTION
      ========================================== */}

      <section className="experience-section">

        <div className="experience-content">

          <p className="section-label">
            THE FIZZ EXPERIENCE
          </p>

          <h2>
            Made to
            <br />
            move.
          </h2>

          <p className="content-description">
            A modern interactive experience built with
            React, GSAP and scroll-driven animation.
          </p>

        </div>

      </section>


      {/* ==========================================
          FINAL SECTION
      ========================================== */}

      <section className="final-section">

        <div className="final-content">

          <p className="section-label">
            KEEP EXPLORING
          </p>

          <h2>
            FEEL THE
            <br />
            FIZZ.
          </h2>

        </div>

      </section>

    </main>
  );
}

export default App;