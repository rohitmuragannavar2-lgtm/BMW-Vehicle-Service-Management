import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Experience.css";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    
    const section = sectionRef.current;

    const ctx = gsap.context(() => {

      // Image movement while scrolling
      gsap.fromTo(
        imageRef.current,
        {
          scale: 1.12,
          y: 60,
        },
        {
          scale: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );

      // Text reveal
      gsap.fromTo(
        contentRef.current.children,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 65%",
          },
        }
      );

    }, section);

    return () => ctx.revert();

  }, []);

  return (
    
    <section
      ref={sectionRef}
      className="experience"
    >

      {/* IMAGE */}

      <div className="experience-image-wrapper">

        <img
          ref={imageRef}
          className="experience-image"
          src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=2200&q=90"
          alt="Luxury performance car"
        />

        <div className="experience-image-overlay" />

      </div>


      {/* TOP LABEL */}

      <div className="experience-top">

        <span>BMW M</span>

        <span>01 / 03</span>

      </div>


      {/* CONTENT */}

      <div
        ref={contentRef}
        className="experience-content"
      >

        <p className="experience-label">
          THE ART OF PERFORMANCE
        </p>


        <h2>
          ENGINEERED
          <br />
          <span>TO BE FELT.</span>
        </h2>


        <div className="experience-divider" />


        <p className="experience-text">
          Precision engineering meets instinctive
          control. Every detail is designed around
          one purpose — creating an unmistakable
          connection between driver and machine.
        </p>

<button
    className="discover-m-button"
    onClick={() => navigate("/models?category=M")}
>
    DISCOVER SERIES M
</button>
      </div>


      {/* TECHNICAL DETAILS */}

      <div className="experience-specs">

        <div>
          <span>POWER</span>
          <strong>503 HP</strong>
        </div>

        <div>
          <span>0–100 KM/H</span>
          <strong>3.9 SEC</strong>
        </div>

        <div>
          <span>DRIVE</span>
          <strong>M xDRIVE</strong>
        </div>

      </div>


      {/* SIDE LABEL */}

      <div className="experience-side">

        <span>PRECISION</span>

        <span>POWER</span>

        <span>CONTROL</span>

      </div>

    </section>
  );
}

export default Experience;