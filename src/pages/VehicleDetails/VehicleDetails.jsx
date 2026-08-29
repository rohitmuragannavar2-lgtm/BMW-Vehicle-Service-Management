import { useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  Car,
  ShieldCheck,
  CalendarDays,
  Zap,
  Settings2,
  Gauge,
  Palette,
  FileText,
  CheckCircle2,
} from "lucide-react";

import "./VehicleDetails.css";

function VehicleDetails() {
  
  const navigate = useNavigate();

  const vehicle = {
    owner: "Rohit Muragannavar",
    model: "BMW i5 eDrive40",
    registration: "KA-25-MH-4827",
    vin: "WBY21FJ08PCT47291",
    purchaseDate: "15 March 2025",
    colour: "Red",
    fuel: "Electric (EV)",
    transmission: "Single-Speed Automatic",
    mileage: "18,450 km",
    nextService: "15 September 2026",
    warranty: "Active",
    status: "Service Up to Date",
  };

  return (
    <div className="vehicle-details-page">

      {/* HEADER */}

      <header className="vehicle-details-header">

  <button
    className="back-button"
    onClick={() => navigate("/owner-dashboard")}
  >
    <ArrowLeft size={18} />
    <span>BACK TO DASHBOARD</span>
  </button>

  <div className="details-header-title">
    <span>OWNER PORTAL</span>
    <h1>Vehicle Details</h1>
  </div>

</header>


      {/* CONTENT */}

      <main className="vehicle-details-content">

        {/* VEHICLE HERO */}

        <section className="details-hero">

          <div className="details-hero-text">

            <p>YOUR BMW</p>

            <h2>
              {vehicle.model}
            </h2>

            <span>
              ELECTRIC PERFORMANCE
            </span>

            <div className="details-registration">
              <small>REGISTRATION</small>
              <strong>{vehicle.registration}</strong>
            </div>

            <div className="vehicle-status">
              <CheckCircle2 size={16} />
              {vehicle.status}
            </div>

          </div>


          <div className="details-car-image">

            <img
              src="/i5.webp"
              alt="BMW i5"
            />

          </div>

        </section>


        {/* OWNER */}

        <section className="owner-information">

          <div className="details-section-heading">
            <span>OWNER INFORMATION</span>
            <h2>Vehicle ownership</h2>
          </div>

          <div className="owner-name-card">

            <div className="owner-avatar">
              {vehicle.owner.charAt(0)}
            </div>

            <div>
              <small>REGISTERED OWNER</small>
              <strong>{vehicle.owner}</strong>
            </div>

          </div>

        </section>


        {/* SPECIFICATIONS */}

        <section className="specifications">

          <div className="details-section-heading">
            <span>VEHICLE SPECIFICATIONS</span>
            <h2>Complete vehicle information</h2>
          </div>


          <div className="specifications-grid">


            <article className="spec-card">

              <div className="spec-icon">
                <ShieldCheck size={21} />
              </div>

              <div>
                <small>VIN</small>
                <strong>{vehicle.vin}</strong>
              </div>

            </article>


            <article className="spec-card">

              <div className="spec-icon">
                <CalendarDays size={21} />
              </div>

              <div>
                <small>PURCHASE DATE</small>
                <strong>{vehicle.purchaseDate}</strong>
              </div>

            </article>


            <article className="spec-card">

              <div className="spec-icon">
                <Palette size={21} />
              </div>

              <div>
                <small>EXTERIOR COLOUR</small>
                <strong>{vehicle.colour}</strong>
              </div>

            </article>


            <article className="spec-card">

              <div className="spec-icon">
                <Zap size={21} />
              </div>

              <div>
                <small>POWERTRAIN</small>
                <strong>{vehicle.fuel}</strong>
              </div>

            </article>


            <article className="spec-card">

              <div className="spec-icon">
                <Settings2 size={21} />
              </div>

              <div>
                <small>TRANSMISSION</small>
                <strong>{vehicle.transmission}</strong>
              </div>

            </article>


            <article className="spec-card">

              <div className="spec-icon">
                <Gauge size={21} />
              </div>

              <div>
                <small>CURRENT MILEAGE</small>
                <strong>{vehicle.mileage}</strong>
              </div>

            </article>

          </div>

        </section>


        {/* VEHICLE CARE */}

        <section className="vehicle-care">

          <div className="details-section-heading">
            <span>VEHICLE CARE</span>
            <h2>Service & warranty</h2>
          </div>


          <div className="care-grid">


            <article className="care-card">

              <div className="care-icon blue">
                <CalendarDays size={22} />
              </div>

              <div>
                <small>NEXT SERVICE</small>

                <h3>
                  {vehicle.nextService}
                </h3>

                <p>
                  Recommended service date
                </p>
              </div>

            </article>


            <article className="care-card">

              <div className="care-icon green">
                <ShieldCheck size={22} />
              </div>

              <div>
                <small>WARRANTY</small>

                <h3>
                  {vehicle.warranty}
                </h3>

                <p>
                  Vehicle warranty is currently active
                </p>
              </div>

            </article>

          </div>

        </section>


        {/* DOCUMENTS */}

        <section className="vehicle-documents">

          <div className="details-section-heading">
            <span>DOCUMENTS</span>
            <h2>Vehicle records</h2>
          </div>


          <div className="documents-list">

            <div className="details-document">
              <FileText size={21} />

              <div>
                <strong>
                  RC Certificate
                </strong>

                <span>
                  Registration certificate
                </span>
              </div>
            </div>


            <div className="details-document">
              <FileText size={21} />

              <div>
                <strong>
                  Insurance
                </strong>

                <span>
                  Vehicle insurance document
                </span>
              </div>
            </div>


            <div className="details-document">
              <FileText size={21} />

              <div>
                <strong>
                  Warranty Certificate
                </strong>

                <span>
                  BMW warranty document
                </span>
              </div>
            </div>


            <div className="details-document">
              <FileText size={21} />

              <div>
                <strong>
                  Owner's Manual
                </strong>

                <span>
                  Vehicle owner's manual
                </span>
              </div>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default VehicleDetails;