import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Innovation.css";

gsap.registerPlugin(ScrollTrigger);

function Innovation() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Main text reveal
      gsap.fromTo(
        ".innovation-reveal",
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        }
      );

      // Image movement
      gsap.fromTo(
        visualRef.current,
        {
          scale: 0.88,
          y: 80,
        },
        {
          scale: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );

      // Feature lines
      gsap.fromTo(
        ".innovation-feature",
        {
          opacity: 0,
          x: 35,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 55%",
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="innovation"
    >

      {/* BACKGROUND */}

      <div className="innovation-background" />

      <div className="innovation-grid" />


      {/* HEADER */}

      <div className="innovation-header">

        <span>
          BMW TECHNOLOGY
        </span>

        <span>
          02 / 03
        </span>

      </div>


      {/* LEFT CONTENT */}

      <div
        ref={contentRef}
        className="innovation-content"
      >

        <p className="innovation-reveal innovation-label">
          THE NEXT GENERATION
        </p>


        <h2 className="innovation-reveal">
          THE FUTURE
          <br />
          <span>IS HERE.</span>
        </h2>


        <div className="innovation-divider innovation-reveal" />


        <p className="innovation-reveal innovation-description">
          Intelligent technology designed around
          the driver. From electric performance
          to connected experiences, BMW continues
          to redefine what is possible.
        </p>


       

      </div>


      {/* RIGHT VISUAL */}

      <div className="innovation-visual">

        <div
          ref={visualRef}
          className="innovation-car"
        >

          <img
            src="https://www.spinny.com/blog/wp-content/uploads/2025/04/BMW-SUV-Cars-in-India-jpg.webp"
            alt="BMW technology"
          />

        </div>


        {/* TECH HUD */}

        
      </div>


      {/* FEATURES */}

      <div className="innovation-features">

        <div className="innovation-feature">

          

          <strong>
            ELECTRIC
          </strong>

          <p>
            Powerful electric performance
            engineered for the future.
          </p>

        </div>


        <div className="innovation-feature">

        

          <strong>
            INTELLIGENCE
          </strong>

          <p>
            Technology that understands
            the way you drive.
          </p>

        </div>


        <div className="innovation-feature">

        

          <strong>
            CONNECTED
          </strong>

          <p>
            Your BMW. Your world.
            Always connected.
          </p>

        </div>

      </div>
      

    </section>
  );
}

export default Innovation;