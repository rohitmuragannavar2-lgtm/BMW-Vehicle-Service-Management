import { useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  Gauge,
  Wrench,
  FileText,
  CheckCircle2,
} from "lucide-react";

import "./ServiceRequest.css";

function ServiceRequest() {
  const navigate = useNavigate();

  const vehicle = {
    owner: "Rohit Muragannavar",
    model: "BMW i5 eDrive40",
    registration: "KA-25-MH-4827",
    mileage: "18,450 km",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newRequest = {
      id: `SR-${Date.now()}`,
      owner: vehicle.owner,
      model: vehicle.model,
      registration: vehicle.registration,
      serviceType: formData.get("serviceType"),
      requestedDate: formData.get("serviceDate"),
      requestedTime: formData.get("serviceTime"),
      mileage: formData.get("mileage"),
      description: formData.get("description"),
      notes: formData.get("notes"),
      status: "Pending",
      createdAt: new Date().toISOString(),
    };

    const existingRequests =
      JSON.parse(localStorage.getItem("serviceRequests")) || [];

    existingRequests.push(newRequest);

    localStorage.setItem(
      "serviceRequests",
      JSON.stringify(existingRequests)
    );

    alert("Service request submitted successfully.");

    navigate("/owner-dashboard");
  };

  return (
    <div className="service-request-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
  style={{
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "80px",
    background: "#ffffff",
    display: "flex",
    alignItems: "center",
    padding: "0 40px",
    gap: "25px",
    zIndex: "999999",
    boxSizing: "border-box",
    boxShadow: "0 2px 15px rgba(0,0,0,0.08)",
  }}
>
  <button
    type="button"
    onClick={() => navigate("/owner-dashboard")}
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      background: "#000000",
      color: "#ffffff",
      border: "none",
      padding: "13px 22px",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "13px",
      fontWeight: "700",
      letterSpacing: "0.05em",
      position: "relative",
      zIndex: "1000000",
    }}
  >
    <ArrowLeft size={18} />
    BACK TO DASHBOARD
  </button>

  <div>
    <div
      style={{
        color: "#0879ca",
        fontSize: "10px",
        fontWeight: "700",
        letterSpacing: "0.15em",
      }}
    >
      BMW OWNER PORTAL
    </div>

    <h1
      style={{
        margin: "4px 0 0",
        fontSize: "24px",
        color: "#111111",
      }}
    >
      Service Request
    </h1>
  </div>
</header>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main className="service-request-content">

        {/* ===================================================
            INTRO
        =================================================== */}

        <div className="service-intro">

          <div>

            <p>
              VEHICLE CARE
            </p>

            <h2>
              Schedule your BMW service
            </h2>

            <span>
              Tell us what your vehicle needs and our service
              team will take care of the rest.
            </span>

          </div>

        </div>


        {/* ===================================================
            VEHICLE CARD
        =================================================== */}

        <section className="service-vehicle-card">

          <div className="service-vehicle-image">

            <img
              src="/i5.webp"
              alt="BMW i5"
            />

          </div>


          <div className="service-vehicle-info">

            <p>
              YOUR VEHICLE
            </p>

            <h3>
              {vehicle.model}
            </h3>

            <span>
              {vehicle.registration}
            </span>

          </div>


          <div className="service-vehicle-owner">

            <small>
              REGISTERED OWNER
            </small>

            <strong>
              {vehicle.owner}
            </strong>

          </div>

        </section>


        {/* ===================================================
            SERVICE FORM
        =================================================== */}

        <form
          className="service-form"
          onSubmit={handleSubmit}
        >

          {/* =================================================
              SERVICE TYPE
          ================================================= */}

          <div className="form-section">

            <div className="form-section-heading">

              <Wrench size={20} />

              <div>

                <p>
                  SERVICE INFORMATION
                </p>

                <h3>
                  What does your BMW need?
                </h3>

              </div>

            </div>


            <div className="form-field">

              <label htmlFor="serviceType">
                SERVICE TYPE
              </label>

              <select
                id="serviceType"
                name="serviceType"
                defaultValue=""
                required
              >

                <option
                  value=""
                  disabled
                >
                  Select service type
                </option>

                <option value="regular">
                  Regular Service
                </option>

                <option value="inspection">
                  Vehicle Inspection
                </option>

                <option value="maintenance">
                  Scheduled Maintenance
                </option>

                <option value="repair">
                  Repair / Issue
                </option>

                <option value="tyres">
                  Tyre Service
                </option>

                <option value="battery">
                  Battery / Charging
                </option>

                <option value="other">
                  Other
                </option>

              </select>

            </div>

          </div>


          {/* =================================================
              DATE AND TIME
          ================================================= */}

          <div className="form-section">

            <div className="form-section-heading">

              <CalendarDays size={20} />

              <div>

                <p>
                  APPOINTMENT PREFERENCE
                </p>

                <h3>
                  When would you like your service?
                </h3>

              </div>

            </div>


            <div className="form-two-column">

              {/* DATE */}

              <div className="form-field">

                <label htmlFor="serviceDate">
                  PREFERRED DATE
                </label>

                <div className="input-with-icon">

                  <CalendarDays size={18} />

                  <input
                    id="serviceDate"
                    type="date"
                    name="serviceDate"
                    required
                  />

                </div>

              </div>


              {/* TIME */}

              <div className="form-field">

                <label htmlFor="serviceTime">
                  PREFERRED TIME
                </label>

                <div className="input-with-icon">

                  <Clock3 size={18} />

                  <select
                    id="serviceTime"
                    name="serviceTime"
                    defaultValue=""
                    required
                  >

                    <option
                      value=""
                      disabled
                    >
                      Select preferred time
                    </option>

                    <option value="09:00">
                      09:00 AM
                    </option>

                    <option value="10:30">
                      10:30 AM
                    </option>

                    <option value="12:00">
                      12:00 PM
                    </option>

                    <option value="02:00">
                      02:00 PM
                    </option>

                    <option value="03:30">
                      03:30 PM
                    </option>

                    <option value="05:00">
                      05:00 PM
                    </option>

                  </select>

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              MILEAGE
          ================================================= */}

          <div className="form-section">

            <div className="form-section-heading">

              <Gauge size={20} />

              <div>

                <p>
                  VEHICLE CONDITION
                </p>

                <h3>
                  Current vehicle information
                </h3>

              </div>

            </div>


            <div className="form-field">

              <label htmlFor="mileage">
                CURRENT MILEAGE
              </label>

              <div className="input-with-icon">

                <Gauge size={18} />

                <input
                  id="mileage"
                  type="text"
                  name="mileage"
                  defaultValue={vehicle.mileage}
                  required
                />

              </div>

            </div>

          </div>


          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <div className="form-section">

            <div className="form-section-heading">

              <FileText size={20} />

              <div>

                <p>
                  SERVICE REQUIREMENT
                </p>

                <h3>
                  Tell us more
                </h3>

              </div>

            </div>


            <div className="form-field">

              <label htmlFor="description">
                DESCRIBE YOUR REQUIREMENT
              </label>

              <textarea
                id="description"
                name="description"
                rows="6"
                placeholder="Describe the issue, maintenance requirement, warning message, noise, or anything else our service team should know..."
                required
              />

              <span className="field-help">
                Providing more details helps our service team
                prepare for your appointment.
              </span>

            </div>

          </div>


          {/* =================================================
              ADDITIONAL NOTES
          ================================================= */}

          <div className="form-section">

            <div className="form-section-heading">

              <FileText size={20} />

              <div>

                <p>
                  ADDITIONAL INFORMATION
                </p>

                <h3>
                  Anything else we should know?
                </h3>

              </div>

            </div>


            <div className="form-field">

              <label htmlFor="notes">
                ADDITIONAL NOTES
              </label>

              <textarea
                id="notes"
                name="notes"
                rows="4"
                placeholder="Optional additional information..."
              />

            </div>

          </div>


          {/* =================================================
              SUBMIT
          ================================================= */}

          <div className="service-submit-area">

            <div className="submit-info">

              <CheckCircle2 size={20} />

              <div>

                <strong>
                  Ready to submit?
                </strong>

                <span>
                  Your request will be reviewed by the BMW
                  service team.
                </span>

              </div>

            </div>


            <button
              type="submit"
              className="submit-service-button"
            >

              <span>
                SUBMIT SERVICE REQUEST
              </span>

              <ArrowLeft
                size={18}
                className="submit-arrow"
              />

            </button>

          </div>

        </form>

      </main>

    </div>
  );
}

export default ServiceRequest;