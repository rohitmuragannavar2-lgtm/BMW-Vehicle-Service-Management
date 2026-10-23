import { useState } from "react";
import { ArrowLeft, CalendarDays, Car, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./TestDrive.css";

function TestDrive() {
  const navigate = useNavigate();

  const [selectedVehicle, setSelectedVehicle] = useState("");

  const vehicles = [
    {
      name: "BMW M2",
      type: "Performance",
      image: "/m2.avif",
    },
    {
      name: "BMW M3",
      type: "Performance",
      image: "/m3.avif",
    },
    {
      name: "BMW X5",
      type: "SUV",
      image: "/x5.avif",
    },
    {
      name: "BMW i5",
      type: "Electric",
      image: "/i5.webp",
    },
  ];

  return (
    <div className="test-drive-page">

      {/* HEADER */}

      <header className="test-drive-header">

        <button
          className="test-drive-back"
          onClick={() => navigate("/discover")}
        >
          <ArrowLeft size={18} />
          <span>BACK TO DISCOVER</span>
        </button>

        <div className="test-drive-title">
          <span>2026 AUTOSPHERE</span>
          <h1>Book a Test Drive</h1>
        </div>

      </header>


      {/* MAIN */}

      <main className="test-drive-main">

        {/* INTRO */}

        <section className="test-drive-intro">

          <div>
            <span className="section-label">
              TEST DRIVE EXPERIENCE
            </span>

            <h2>
              Experience the
              <br />
              drive for yourself.
            </h2>

            <p>
              Choose your preferred vehicle, date and time.
              Our team will contact you to confirm your test drive.
            </p>
          </div>

          <div className="test-drive-icon">
            <Car size={42} />
          </div>

        </section>


        {/* BOOKING CARD */}

        <section className="booking-card">

          <div className="booking-heading">

            <CalendarDays size={25} />

            <div>
              <span>STEP 01</span>
              <h2>Select Your Vehicle</h2>
            </div>

          </div>


          {/* VEHICLES */}

          <div className="vehicle-options">

            {vehicles.map((vehicle) => (

              <div
                key={vehicle.name}
                className={`vehicle-option ${
                  selectedVehicle === vehicle.name
                    ? "selected"
                    : ""
                }`}
                onClick={() => setSelectedVehicle(vehicle.name)}
              >

                <div className="vehicle-image-wrapper">

                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                  />

                  {selectedVehicle === vehicle.name && (
                    <div className="vehicle-selected">
                      <Check size={18} />
                    </div>
                  )}

                </div>

                <div>
                  <strong>{vehicle.name}</strong>
                  <span>{vehicle.type}</span>
                </div>

              </div>

            ))}

          </div>


          {/* SELECTED VEHICLE */}

          {selectedVehicle && (
            <div className="selected-vehicle-message">
              <Check size={18} />
              <span>
                {selectedVehicle} selected for your test drive.
              </span>
            </div>
          )}

        </section>

      </main>

    </div>
  );
}

export default TestDrive;