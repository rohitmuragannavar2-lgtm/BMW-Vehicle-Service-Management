import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  Car,
  CheckCircle2,
  MapPin,
} from "lucide-react";

import "./Appointments.css";

function Appointments() {
  const navigate = useNavigate();

  const appointment = {
    model: "BMW i5 eDrive40",
    registration: "KA-25-MH-4827",
    date: "15 September 2026",
    time: "10:30 AM",
    type: "Regular Service",
    status: "Confirmed",
    location: "BMW Service Center",
  };

  return (
    <div className="appointments-page">

      {/* HEADER */}

      <header className="appointments-header">

        <button
          className="appointments-back-button"
          onClick={() => navigate("/owner-dashboard")}
        >
          <ArrowLeft size={18} />
          <span>BACK TO DASHBOARD</span>
        </button>

        <div className="appointments-title">
          <span>BMW OWNER PORTAL</span>
          <h1>Appointments</h1>
        </div>

      </header>


      {/* CONTENT */}

      <main className="appointments-content">

        <section className="appointments-intro">

          <p>VEHICLE CARE</p>

          <h2>
            Your appointments
          </h2>

          <span>
            View your upcoming BMW service appointments
            and scheduled vehicle visits.
          </span>

        </section>


        {/* UPCOMING APPOINTMENT */}

        <section className="appointment-main-card">

          <div className="appointment-card-top">

            <div>

              <p>UPCOMING APPOINTMENT</p>

              <h2>
                {appointment.type}
              </h2>

            </div>

            <div className="appointment-confirmed">
              <CheckCircle2 size={15} />
              {appointment.status}
            </div>

          </div>


          <div className="appointment-vehicle">

            <div className="appointment-car-icon">
              <Car size={25} />
            </div>

            <div>

              <small>YOUR VEHICLE</small>

              <h3>
                {appointment.model}
              </h3>

              <span>
                {appointment.registration}
              </span>

            </div>

          </div>


          <div className="appointment-information">

            <div className="appointment-info-item">

              <CalendarDays size={21} />

              <div>

                <small>DATE</small>

                <strong>
                  {appointment.date}
                </strong>

              </div>

            </div>


            <div className="appointment-info-item">

              <Clock3 size={21} />

              <div>

                <small>TIME</small>

                <strong>
                  {appointment.time}
                </strong>

              </div>

            </div>


            <div className="appointment-info-item">

              <MapPin size={21} />

              <div>

                <small>LOCATION</small>

                <strong>
                  {appointment.location}
                </strong>

              </div>

            </div>

          </div>


          <div className="appointment-note">

            <span>
              Please arrive 10 minutes before your
              scheduled appointment.
            </span>

          </div>

        </section>


        {/* APPOINTMENT STATUS */}

        <section className="appointment-status-section">

          <div className="appointment-section-heading">

            <p>APPOINTMENT STATUS</p>

            <h2>
              Service progress
            </h2>

          </div>


          <div className="appointment-timeline">

            <div className="timeline-item completed">

              <div className="timeline-circle">
                <CheckCircle2 size={17} />
              </div>

              <div>
                <strong>
                  Request Submitted
                </strong>

                <span>
                  Your service request has been received.
                </span>
              </div>

            </div>


            <div className="timeline-line active" />


            <div className="timeline-item completed">

              <div className="timeline-circle">
                <CheckCircle2 size={17} />
              </div>

              <div>
                <strong>
                  Appointment Confirmed
                </strong>

                <span>
                  Your appointment has been confirmed.
                </span>
              </div>

            </div>


            <div className="timeline-line" />


            <div className="timeline-item">

              <div className="timeline-circle">
                3
              </div>

              <div>
                <strong>
                  Service
                </strong>

                <span>
                  Your BMW will be serviced by our team.
                </span>
              </div>

            </div>


            <div className="timeline-line" />


            <div className="timeline-item">

              <div className="timeline-circle">
                4
              </div>

              <div>
                <strong>
                  Service Completed
                </strong>

                <span>
                  Your service report will be available
                  after completion.
                </span>
              </div>

            </div>

          </div>

        </section>


        {/* INFORMATION */}

        <section className="appointment-help">

          <div>

            <p>NEED ASSISTANCE?</p>

            <h2>
              Need to change your appointment?
            </h2>

            <span>
              Contact your BMW service center for
              assistance with your appointment.
            </span>

          </div>

          <button
            onClick={() => navigate("/service-request")}
          >
            REQUEST SERVICE
          </button>

        </section>

      </main>

    </div>
  );
}

export default Appointments;