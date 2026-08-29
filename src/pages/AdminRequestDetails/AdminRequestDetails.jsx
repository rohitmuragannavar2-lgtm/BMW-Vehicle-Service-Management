import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  ArrowLeft,
  Car,
  User,
  CalendarDays,
  Gauge,
  Wrench,
  Clock3,
  CheckCircle2,
  XCircle,
  FileText,
} from "lucide-react";

import "./AdminRequestDetails.css";


function AdminRequestDetails() {

  const navigate = useNavigate();
  const { id } = useParams();

  const [request, setRequest] = useState(null);


  // =========================================================
  // LOAD REQUEST
  // =========================================================

  useEffect(() => {

    const savedRequests =
      JSON.parse(
        localStorage.getItem("serviceRequests")
      ) || [];

    const foundRequest =
      savedRequests.find(
        (item) => String(item.id) === String(id)
      );

    setRequest(foundRequest || null);

  }, [id]);


  // =========================================================
  // UPDATE STATUS
  // =========================================================

  const updateStatus = (newStatus) => {

    const savedRequests =
      JSON.parse(
        localStorage.getItem("serviceRequests")
      ) || [];

    const updatedRequests =
      savedRequests.map((item) => {

        if (String(item.id) === String(id)) {

          return {
            ...item,
            status: newStatus,
            updatedAt: new Date().toISOString(),
          };

        }

        return item;

      });


    localStorage.setItem(
      "serviceRequests",
      JSON.stringify(updatedRequests)
    );


    setRequest(
      updatedRequests.find(
        (item) => String(item.id) === String(id)
      )
    );

  };


  // =========================================================
  // REQUEST NOT FOUND
  // =========================================================

  if (!request) {

    return (

      <div className="admin-request-page">

        <header className="admin-request-header">

          <button
            type="button"
            className="admin-request-back"
            onClick={() =>
              navigate("/admin-dashboard")
            }
          >

            <ArrowLeft size={18} />

            BACK TO ADMIN DASHBOARD

          </button>

        </header>


        <main className="admin-request-empty">

          <FileText size={50} />

          <h1>
            Request Not Found
          </h1>

          <p>
            This service request could not be found.
          </p>

          <button
            type="button"
            onClick={() =>
              navigate("/admin-dashboard")
            }
          >
            RETURN TO DASHBOARD
          </button>

        </main>

      </div>

    );

  }


  return (

    <div className="admin-request-page">


      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="admin-request-header">

        <button
          type="button"
          className="admin-request-back"
          onClick={() =>
            navigate("/admin-dashboard")
          }
        >

          <ArrowLeft size={18} />

          <span>
            BACK TO ADMIN DASHBOARD
          </span>

        </button>


        <div className="admin-request-title">

          <span>
            BMW ADMIN PORTAL
          </span>

          <h1>
            Service Request Details
          </h1>

        </div>

      </header>



      {/* =====================================================
          CONTENT
      ===================================================== */}

      <main className="admin-request-content">


        {/* PAGE INTRO */}

        <section className="admin-request-intro">

          <div>

            <p>
              SERVICE MANAGEMENT
            </p>

            <h2>
              Request #{request.id}
            </h2>

            <span>
              Review the owner's service request and
              update its current status.
            </span>

          </div>


          <div
            className={`admin-current-status ${request.status
              ?.toLowerCase()
              .replace(/\s+/g, "-")}`}
          >

            {request.status === "Pending" && (
              <Clock3 size={17} />
            )}

            {request.status === "Approved" && (
              <CheckCircle2 size={17} />
            )}

            {request.status === "In Service" && (
              <Wrench size={17} />
            )}

            {request.status === "Completed" && (
              <CheckCircle2 size={17} />
            )}

            {request.status === "Rejected" && (
              <XCircle size={17} />
            )}

            {request.status || "Pending"}

          </div>

        </section>



        {/* =================================================
            OWNER + VEHICLE
        ================================================= */}

        <section className="admin-detail-grid">


          {/* OWNER */}

          <div className="admin-detail-card">

            <div className="admin-detail-icon">

              <User size={23} />

            </div>

            <div>

              <small>
                OWNER
              </small>

              <h3>
                {request.owner}
              </h3>

              <span>
                BMW Owner
              </span>

            </div>

          </div>



          {/* VEHICLE */}

          <div className="admin-detail-card">

            <div className="admin-detail-icon">

              <Car size={23} />

            </div>

            <div>

              <small>
                VEHICLE
              </small>

              <h3>
                {request.model}
              </h3>

              <span>
                {request.registration}
              </span>

            </div>

          </div>

        </section>



        {/* =================================================
            REQUEST INFORMATION
        ================================================= */}

        <section className="admin-information-card">

          <div className="admin-information-heading">

            <p>
              REQUEST INFORMATION
            </p>

            <h2>
              Service Details
            </h2>

          </div>


          <div className="admin-information-grid">


            {/* SERVICE */}

            <div className="admin-information-item">

              <Wrench size={20} />

              <div>

                <small>
                  SERVICE TYPE
                </small>

                <strong>
                  {request.serviceType}
                </strong>

              </div>

            </div>



            {/* DATE */}

            <div className="admin-information-item">

              <CalendarDays size={20} />

              <div>

                <small>
                  REQUESTED DATE
                </small>

                <strong>
                  {request.requestedDate || "Not specified"}
                </strong>

              </div>

            </div>



            {/* TIME */}

            <div className="admin-information-item">

              <Clock3 size={20} />

              <div>

                <small>
                  REQUESTED TIME
                </small>

                <strong>
                  {request.requestedTime || "Not specified"}
                </strong>

              </div>

            </div>



            {/* MILEAGE */}

            <div className="admin-information-item">

              <Gauge size={20} />

              <div>

                <small>
                  CURRENT MILEAGE
                </small>

                <strong>
                  {request.mileage || "Not specified"}
                </strong>

              </div>

            </div>

          </div>

        </section>



        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <section className="admin-description-card">

          <div className="admin-description-heading">

            <FileText size={20} />

            <div>

              <p>
                OWNER REQUIREMENT
              </p>

              <h2>
                Service Description
              </h2>

            </div>

          </div>


          <div className="admin-description">

            {request.description ? (
              <p>
                {request.description}
              </p>
            ) : (
              <p>
                No description was provided by the owner.
              </p>
            )}

          </div>


          {request.notes && (

            <div className="admin-notes">

              <small>
                ADDITIONAL NOTES
              </small>

              <p>
                {request.notes}
              </p>

            </div>

          )}

        </section>



        {/* =================================================
            STATUS MANAGEMENT
        ================================================= */}

        <section className="admin-status-card">

          <div className="admin-status-heading">

            <div>

              <p>
                REQUEST MANAGEMENT
              </p>

              <h2>
                Update Service Status
              </h2>

              <span>
                Select the current stage of this service request.
              </span>

            </div>

          </div>


          <div className="admin-status-actions">


            {/* APPROVE */}

            <button
              type="button"
              className="status-button approve"
              onClick={() =>
                updateStatus("Approved")
              }
            >

              <CheckCircle2 size={18} />

              APPROVE

            </button>



            {/* IN SERVICE */}

            <button
              type="button"
              className="status-button service"
              onClick={() =>
                updateStatus("In Service")
              }
            >

              <Wrench size={18} />

              IN SERVICE

            </button>



            {/* COMPLETE */}

            <button
              type="button"
              className="status-button complete"
              onClick={() =>
                updateStatus("Completed")
              }
            >

              <CheckCircle2 size={18} />

              COMPLETE

            </button>



            {/* REJECT */}

            <button
              type="button"
              className="status-button reject"
              onClick={() =>
                updateStatus("Rejected")
              }
            >

              <XCircle size={18} />

              REJECT

            </button>

          </div>

        </section>



        {/* FOOTER BACK BUTTON */}

        <button
          type="button"
          className="admin-bottom-back"
          onClick={() =>
            navigate("/admin-dashboard")
          }
        >

          <ArrowLeft size={17} />

          BACK TO ADMIN DASHBOARD

        </button>


      </main>

    </div>

  );
}


export default AdminRequestDetails;