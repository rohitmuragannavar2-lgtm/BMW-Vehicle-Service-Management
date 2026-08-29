import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Configurator.css";

const carData = {
  m4: {
    name: "BMW M4",
    price: "₹1,55,00,000",

    colors: [
      {
        name: "Black",
        image: "/m4black.avif",
        value: "#080808",
      },
      {
        name: "Blue",
        image: "/m4blue.jfif",
        value: "#1769aa",
      },
    ],
  },
};

const wheels = [
  "STANDARD",
  "M SPORT",
  "FORGED",
];

const interiors = [
  "BLACK",
  "TAN",
  "RED",
];

function Configurator() {

  const { slug } = useParams();

  const navigate = useNavigate();

  const car = carData[slug];

  const [selectedColor, setSelectedColor] = useState(
    car?.colors?.[0]
  );

  const [selectedWheel, setSelectedWheel] =
    useState("STANDARD");

  const [selectedInterior, setSelectedInterior] =
    useState("BLACK");


  /* MODEL NOT FOUND */

  if (!car) {
    return (
      <main className="configurator-not-found">

        <h1>MODEL NOT FOUND</h1>

        <button
          onClick={() => navigate("/models")}
        >
          BACK TO MODELS
        </button>

      </main>
    );
  }


  /* SAVE */

  const handleSave = () => {

    const configuration = {
      vehicle: car.name,
      exterior: selectedColor.name,
      wheels: selectedWheel,
      interior: selectedInterior,
    };

    console.log(configuration);

    alert(
      `${car.name} configuration saved!\n\n` +
      `Exterior: ${selectedColor.name}\n` +
      `Wheels: ${selectedWheel}\n` +
      `Interior: ${selectedInterior}`
    );
  };


  return (
    <main className="configurator">


      {/* BACK */}

      <button
        className="config-back"
        onClick={() =>
          navigate(`/models/${slug}`)
        }
      >
        ← BACK
      </button>


      {/* HEADER */}

      <header className="config-header">

        <div>

          <p>BMW CONFIGURATOR</p>

          <h1>{car.name}</h1>

        </div>


        <div className="config-price">

          <span>STARTING FROM</span>

          <strong>
            {car.price}
          </strong>

        </div>

      </header>


      {/* CONTENT */}

      <section className="config-layout">


        {/* CAR */}

        <div className="config-preview">

          <div
            className="config-color-glow"
            style={{
              backgroundColor:
                selectedColor.value,
            }}
          />


          <img
            className="config-car-image"
            src={selectedColor.image}
            alt={car.name}
          />


          <div className="preview-label">
            {selectedColor.name.toUpperCase()}
          </div>


          <div className="preview-options">

            <span>
              {selectedWheel}
            </span>

            <span>
              {selectedInterior}
            </span>

          </div>

        </div>


        {/* OPTIONS */}

        <aside className="config-options">


          {/* =========================
              EXTERIOR COLOUR
          ========================= */}

          <div className="config-section">

            <div className="config-section-title">

              <span>01</span>

              <strong>
                EXTERIOR COLOUR
              </strong>

            </div>


            <div className="color-options">

              {car.colors.map((color) => (

                <button
                  key={color.name}
                  type="button"
                  title={color.name}
                  className={
                    selectedColor.name === color.name
                      ? "color-option selected"
                      : "color-option"
                  }
                  onClick={() =>
                    setSelectedColor(color)
                  }
                >

                  <span
                    style={{
                      backgroundColor:
                        color.value,
                    }}
                  />

                </button>

              ))}

            </div>


            <p className="selected-name">
              {selectedColor.name}
            </p>

          </div>


          {/* =========================
              WHEELS
          ========================= */}

          <div className="config-section">

            <div className="config-section-title">

              <span>02</span>

              <strong>
                WHEELS
              </strong>

            </div>


            <div className="option-list">

              {wheels.map((wheel) => (

                <button
                  key={wheel}
                  type="button"
                  className={
                    selectedWheel === wheel
                      ? "option-button active"
                      : "option-button"
                  }
                  onClick={() =>
                    setSelectedWheel(wheel)
                  }
                >

                  <span>
                    {wheel}
                  </span>

                  {selectedWheel === wheel && (
                    <b>✓</b>
                  )}

                </button>

              ))}

            </div>

          </div>


          {/* =========================
              INTERIOR
          ========================= */}

          <div className="config-section">

            <div className="config-section-title">

              <span>03</span>

              <strong>
                INTERIOR
              </strong>

            </div>


            <div className="option-list">

              {interiors.map((interior) => (

                <button
                  key={interior}
                  type="button"
                  className={
                    selectedInterior === interior
                      ? "option-button active"
                      : "option-button"
                  }
                  onClick={() =>
                    setSelectedInterior(interior)
                  }
                >

                  <span>
                    {interior}
                  </span>

                  {selectedInterior === interior && (
                    <b>✓</b>
                  )}

                </button>

              ))}

            </div>

          </div>


          {/* =========================
              SUMMARY
          ========================= */}

          <div className="config-summary">

            <div>

              <span>EXTERIOR</span>

              <strong>
                {selectedColor.name}
              </strong>

            </div>


            <div>

              <span>WHEELS</span>

              <strong>
                {selectedWheel}
              </strong>

            </div>


            <div>

              <span>INTERIOR</span>

              <strong>
                {selectedInterior}
              </strong>

            </div>

          </div>


          {/* SAVE */}

          <button
            className="save-config"
            type="button"
            onClick={handleSave}
          >

            SAVE CONFIGURATION

            <span>↗</span>

          </button>

        </aside>

      </section>

    </main>
  );
}

export default Configurator;