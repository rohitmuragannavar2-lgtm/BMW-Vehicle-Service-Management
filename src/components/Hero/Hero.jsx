import "./Hero.css";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, ArrowDown } from "lucide-react";

function Hero() {
  const navigate = useNavigate();

  const scrollToPerformance = () => {
    const section = document.getElementById("performance");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="home" className="hero">

      {/* BACKGROUND */}
      <div className="hero-background" />

      {/* DARK OVERLAY */}
      <div className="hero-overlay" />

      {/* BLUE LIGHT */}
      <div className="hero-glow" />

      {/* CONTENT */}
      <div className="hero-content">

        <div className="hero-content-inner">

          <p className="hero-eyebrow">
            WELCOME TO BMW
          </p>

          <h1 className="hero-title">
            BMW
          </h1>

          <div className="hero-line">
            <span />
          </div>

          <h2 className="hero-subtitle">
            SHEER DRIVING
            <br />
            <span>PLEASURE.</span>
          </h2>

          <p className="hero-description">
            Experience the perfect fusion of performance,
            luxury and innovation. Discover a new dimension
            of driving where technology meets emotion.
          </p>

          <div className="hero-buttons">

            <button
              className="hero-explore-button"
              onClick={() => navigate("/models")}
            >
              <span>EXPLORE MODELS</span>

              <span className="hero-button-icon">
                <ArrowUpRight size={17} />
              </span>
            </button>

            <button
              className="secondary-button"
              onClick={() => navigate("/models")}
            >
              <span>BUILD YOUR OWN</span>

              <span className="secondary-arrow">
                <ArrowUpRight size={16} />
              </span>
            </button>

          </div>

        </div>

      </div>

    
    



      {/* SIDE NUMBER */}
     

    </section>
  );
}

export default Hero;