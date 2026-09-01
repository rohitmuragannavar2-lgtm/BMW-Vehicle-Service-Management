import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./InnovationPage.css";

gsap.registerPlugin(ScrollTrigger);

function InnovationPage() {

  const pageRef = useRef(null);

  const navigate = useNavigate();


  /* =========================================================
     INNOVATION DATA
  ========================================================= */

  const innovations = [
    {
      icon: "ϟ",
      title: "Electric Mobility",
      description:
        "Pioneering the future of driving with fully electric BMW i models.",
      link: "Explore Electric",
      image: "/inn1.png",
    },

    {
      icon: "▣",
      title: "BMW eDrive Technology",
      description:
        "Advanced electric powertrains delivering performance, efficiency and pure driving pleasure.",
      link: "Learn More",
      image: "/inn2.png",
    },

    {
      icon: "◎",
      title: "Intelligent Driving",
      description:
        "Smart driver-assistance systems designed for safety, comfort and confidence on every journey.",
      link: "See Features",
      image: "/inn3.png",
    },

    {
      icon: "⌁",
      title: "ConnectedDrive",
      description:
        "Stay connected to your BMW and the world around you. Anytime. Anywhere.",
      link: "Discover More",
      image: "/inn4.png",
    },

    {
      icon: "▤",
      title: "Digital Cockpit",
      description:
        "Intuitive displays and next-generation interfaces create a seamless immersive experience.",
      link: "View Cockpit",
      image: "/inn5.png",
    },

    {
      icon: "◊",
      title: "Sustainable Materials",
      description:
        "Innovative and responsible materials designed to create a more sustainable future.",
      link: "Our Commitment",
      image: "/inn6.png",
    },

    {
      icon: "✧",
      title: "Future Mobility",
      description:
        "Exploring new ideas and technologies that redefine the future of mobility.",
      link: "Explore Vision",
      image: "/last.png",
    },
  ];


  /* =========================================================
     PAGE ANIMATIONS
  ========================================================= */

  useEffect(() => {

    const ctx = gsap.context(() => {

      /* HERO TEXT */

      gsap.fromTo(
        ".innovation-hero-text > *",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
        }
      );


      /* HERO IMAGE */

      gsap.fromTo(
        ".innovation-hero-image",
        {
          opacity: 0,
          x: 80,
          scale: 1.05,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
        }
      );


      /* CARDS */

      gsap.fromTo(
        ".innovation-card",
        {
          opacity: 0,
          y: 60,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: ".innovation-cards",
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );


      /* STATISTICS */

      gsap.fromTo(
        ".innovation-stat",
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",

          scrollTrigger: {
            trigger: ".innovation-stats",
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );


      /* REFRESH SCROLLTRIGGER */

      ScrollTrigger.refresh();

    }, pageRef);


    return () => {
      ctx.revert();
    };

  }, []);


  /* =========================================================
     EXPLORE INNOVATIONS
  ========================================================= */

  const handleExplore = () => {

    const cards =
      document.querySelector(".innovation-cards");

    if (cards) {

      cards.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    }

  };


  /* =========================================================
     BACK BUTTON
  ========================================================= */

  const handleBack = () => {

    navigate("/");

  };


  /* =========================================================
     CARD BUTTON
  ========================================================= */

  const handleCardClick = (title) => {

    navigate(
      `/innovation/${title
        .toLowerCase()
        .replace(/\s+/g, "-")}`
    );

  };


  return (

    <main
      className="innovation-page"
      ref={pageRef}
    >


      {/* =====================================================
          BACK BUTTON
      ===================================================== */}

      <button
        className="innovation-back-button"
        onClick={handleBack}
      >

        <span>
          ←
        </span>

        BACK TO HOME

      </button>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="innovation-hero">


        {/* LEFT CONTENT */}

        <div className="innovation-hero-text">


          <div className="innovation-small-title">

            <span>
              BMW INNOVATION
            </span>

            <i></i>

          </div>


          <h1>

            Driving Innovation.

            <br />

            <span>
              Shaping the Future.
            </span>

          </h1>


          <p>

            At BMW, innovation is at the heart
            of everything we do. Discover the
            technologies and ideas that power our
            journey towards a smarter, more
            sustainable and connected future.

          </p>


          <button
            className="innovation-primary-btn"
            onClick={handleExplore}
          >

            Explore Our Innovations

            <span>
              →
            </span>

          </button>


        </div>


        {/* RIGHT IMAGE */}

        <div className="innovation-hero-image">

          <img
            src="/main.png"
            alt="BMW Innovation"
          />

        </div>


      </section>


      {/* =====================================================
          INNOVATION CARDS
      ===================================================== */}

      <section className="innovation-cards">


        {innovations.map((item, ) => (

          <article
            className="innovation-card"
            key={item.title}
          >


            {/* CARD NUMBER */}

            <span className="innovation-card-number">


            </span>


            {/* CARD IMAGE */}

            <div className="innovation-card-image">

              <img
                src={item.image}
                alt={item.title}
              />

            </div>


            {/* CARD CONTENT */}

            <div className="innovation-card-content">


              {/* ICON */}

              <div className="innovation-icon">
                {item.icon}
              </div>


              {/* TITLE */}

              <h2>
                {item.title}
              </h2>


              {/* DESCRIPTION */}

              <p>
                {item.description}
              </p>


              {/* BUTTON */}

              <button
  onClick={() =>
    handleCardClick(item.title)
  }
>
  <span>
    {item.link}
  </span>

  <span>
    →
  </span>
</button>

            </div>


          </article>

        ))}


      </section>


      {/* =====================================================
          STATISTICS
      ===================================================== */}

      <section className="innovation-stats">


        {/* STAT 1 */}

        <div className="innovation-stat">

          <div className="innovation-stat-icon">
            ◇
          </div>

          <div>

            <strong>
              45%
            </strong>

            <p>
              Lower CO₂ Emissions
              <br />
              by 2030
            </p>

          </div>

        </div>


        {/* STAT 2 */}

        <div className="innovation-stat">

          <div className="innovation-stat-icon">
            ϟ
          </div>

          <div>

            <strong>
              15+
            </strong>

            <p>
              Fully Electric Models
              <br />
              by 2025
            </p>

          </div>

        </div>


        {/* STAT 3 */}

        <div className="innovation-stat">

          <div className="innovation-stat-icon">
            ▱
          </div>

          <div>

            <strong>
              2M+
            </strong>

            <p>
              Connected Vehicles
              <br />
              Worldwide
            </p>

          </div>

        </div>


        {/* STAT 4 */}

        <div className="innovation-stat">

          <div className="innovation-stat-icon">
            ♧
          </div>

          <div>

            <strong>
              120+
            </strong>

            <p>
              Years of Innovation
              <br />
              and Excellence
            </p>

          </div>

        </div>


      </section>


    </main>

  );

}


export default InnovationPage;