import { useNavigate } from "react-router-dom";
import "./FinalCTA.css";

function FinalCTA() {

  const navigate = useNavigate();

  return (
    <section className="final-cta">

      {/* Background */}

      <div className="final-cta-bg"></div>

      <div className="final-cta-content">

        {/* Small heading */}

        <p className="final-cta-eyebrow">
          THE ULTIMATE DRIVING EXPERIENCE
        </p>


        {/* Main heading */}

        <h2 className="final-cta-title">
          YOUR BMW.
          <br />
          YOUR JOURNEY.
        </h2>


        {/* Description */}

        <p className="final-cta-description">
          Discover a BMW designed around your
          passion, performance and individuality.
        </p>


        {/* Button */}

        <button
          className="final-explore-button"
          onClick={() => navigate("/models")}
        >

          <span className="final-button-text">
            EXPLORE BMW MODELS
          </span>

          <span className="final-button-arrow">
            ↗
          </span>

        </button>

      </div>

    </section>
  );
}

export default FinalCTA;