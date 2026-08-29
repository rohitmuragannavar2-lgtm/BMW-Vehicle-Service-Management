import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  ClipboardList,
  CalendarDays,
  Car,
  User,
  FileText,
  LogOut,
  Bell,
  Search,
  ChevronRight,
  CheckCircle2,
  Clock3,
  Wrench,
  AlertCircle,
} from "lucide-react";

import "./AdminDashboard.css";


function AdminDashboard() {

  const navigate = useNavigate();


  // =========================================================
  // STATE
  // =========================================================

  const [requests, setRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSection, setActiveSection] = useState("dashboard");
  const [notificationOpen, setNotificationOpen] = useState(false);


  // =========================================================
  // LOAD REQUESTS
  // =========================================================

  const loadRequests = () => {

    const savedRequests =
      JSON.parse(
        localStorage.getItem("serviceRequests")
      ) || [];

    setRequests(savedRequests);

  };


  useEffect(() => {

    loadRequests();

    const handleStorage = () => {
      loadRequests();
    };

    window.addEventListener(
      "storage",
      handleStorage
    );

    return () => {
      window.removeEventListener(
        "storage",
        handleStorage
      );
    };

  }, []);


  // =========================================================
  // LOGOUT
  // =========================================================

  const handleLogout = () => {

    localStorage.removeItem("bmwLoggedIn");
    localStorage.removeItem("bmwAdminLoggedIn");

    navigate("/login");

  };


  // =========================================================
  // NAVIGATION / SCROLL
  // =========================================================

  const scrollToSection = (
    sectionClass,
    sectionName
  ) => {

    setActiveSection(sectionName);

    setTimeout(() => {

      const element =
        document.querySelector(sectionClass);

      if (element) {

        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

      }

    }, 50);

  };


  const goDashboard = () => {

    setActiveSection("dashboard");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

const goToRequests = () => {
  navigate("/admin-service-requests");
};

  const goToAppointments = () => {

    scrollToSection(
      ".admin-bottom-grid",
      "appointments"
    );

  };


const goToVehicles = () => {
  navigate("/admin-vehicles");
};


const goToOwners = () => {
  navigate("/admin-owners");
};


  const goToServiceRecords = () => {

    setActiveSection("records");

    alert(
      "Service Records\n\nCompleted vehicle service records will be displayed here."
    );

  };


  // =========================================================
  // VIEW ALL
  // =========================================================

  const viewAllRequests = () => {

    setActiveSection("requests");

    setSearchTerm("");

    setTimeout(() => {

      document
        .querySelector(".admin-requests-section")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

    }, 50);

  };


  // =========================================================
  // NOTIFICATIONS
  // =========================================================

  const handleNotifications = () => {

    setNotificationOpen(
      !notificationOpen
    );

  };


  // =========================================================
  // SEARCH
  // =========================================================

  const filteredRequests = useMemo(() => {

    const search =
      searchTerm.trim().toLowerCase();

    if (!search) {
      return requests;
    }

    return requests.filter((request) => {

      return (
        request.owner
          ?.toLowerCase()
          .includes(search) ||

        request.model
          ?.toLowerCase()
          .includes(search) ||

        request.registration
          ?.toLowerCase()
          .includes(search) ||

        request.serviceType
          ?.toLowerCase()
          .includes(search) ||

        request.status
          ?.toLowerCase()
          .includes(search) ||

        request.id
          ?.toLowerCase()
          .includes(search)
      );

    });

  }, [requests, searchTerm]);


  // =========================================================
  // COUNTS
  // =========================================================

  const pendingRequests =
    requests.filter(
      (request) =>
        request.status === "Pending"
    ).length;


  const approvedRequests =
    requests.filter(
      (request) =>
        request.status === "Approved"
    ).length;


  const inServiceRequests =
    requests.filter(
      (request) =>
        request.status === "In Service"
    ).length;


  const completedRequests =
    requests.filter(
      (request) =>
        request.status === "Completed"
    ).length;


  // =========================================================
  // REFRESH DATA
  // =========================================================

  const refreshData = () => {

    loadRequests();

  };


  // =========================================================
  // PAGE
  // =========================================================

  return (

    <div className="admin-dashboard">


      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside className="admin-sidebar">


        {/* BRAND */}

        <div className="admin-brand">

          <div className="admin-brand-logo">
            BMW
          </div>

          <div>

            <h2>
              BMW
            </h2>

            <span>
              ADMIN PORTAL
            </span>

          </div>

        </div>


        {/* NAVIGATION */}

        <nav className="admin-navigation">


          {/* DASHBOARD */}

          <button
            type="button"
            className={`admin-nav-item ${
              activeSection === "dashboard"
                ? "active"
                : ""
            }`}
            onClick={goDashboard}
          >

            <LayoutDashboard size={19} />

            <span>
              Dashboard
            </span>

          </button>


          {/* SERVICE REQUESTS */}

          <button
            type="button"
            className={`admin-nav-item ${
              activeSection === "requests"
                ? "active"
                : ""
            }`}
            onClick={goToRequests}
          >

            <ClipboardList size={19} />

            <span>
              Service Requests
            </span>

            {pendingRequests > 0 && (

              <b>
                {pendingRequests}
              </b>

            )}

          </button>


          {/* APPOINTMENTS */}

          <button
            type="button"
            className={`admin-nav-item ${
              activeSection === "appointments"
                ? "active"
                : ""
            }`}
            onClick={goToAppointments}
          >

            <CalendarDays size={19} />

            <span>
              Appointments
            </span>

          </button>


          {/* VEHICLES */}

          <button
            type="button"
            className={`admin-nav-item ${
              activeSection === "vehicles"
                ? "active"
                : ""
            }`}
            onClick={goToVehicles}
          >

            <Car size={19} />

            <span>
              Vehicles
            </span>

          </button>


          {/* OWNERS */}

      <button
  type="button"
  className="admin-nav-item"
  onClick={goToOwners}
>
  <User size={19} />
  <span>Owners</span>
</button>


          {/* SERVICE RECORDS */}

          <button
            type="button"
            className={`admin-nav-item ${
              activeSection === "records"
                ? "active"
                : ""
            }`}
            onClick={goToServiceRecords}
          >

            <FileText size={19} />

            <span>
              Service Records
            </span>

          </button>

        </nav>


        {/* LOGOUT */}

        <button
          type="button"
          className="admin-logout"
          onClick={handleLogout}
        >

          <LogOut size={18} />

          <span>
            Logout
          </span>

        </button>

      </aside>



      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="admin-main">


        {/* ===================================================
            HEADER
        =================================================== */}

        <header className="admin-header">

          <div>

            <p>
              ADMINISTRATION
            </p>

            <h1>
              Service Center Dashboard
            </h1>

          </div>


          <div className="admin-header-right">


            {/* NOTIFICATION */}

            <div
              className="admin-notification-wrapper"
              style={{
                position: "relative",
              }}
            >

              <button
                type="button"
                className="admin-notification"
                onClick={handleNotifications}
              >

                <Bell size={19} />

                {pendingRequests > 0 && (
                  <span />
                )}

              </button>


              {notificationOpen && (

                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "50px",
                    width: "280px",
                    background: "#ffffff",
                    border: "1px solid #e1e4e7",
                    borderRadius: "8px",
                    padding: "18px",
                    boxShadow:
                      "0 15px 40px rgba(0,0,0,0.12)",
                    zIndex: 100,
                  }}
                >

                  <strong
                    style={{
                      display: "block",
                      marginBottom: "10px",
                    }}
                  >
                    Notifications
                  </strong>


                  {pendingRequests > 0 ? (

                    <p
                      style={{
                        margin: 0,
                        color: "#666",
                        fontSize: "13px",
                        lineHeight: 1.6,
                      }}
                    >
                      You have{" "}
                      <strong>
                        {pendingRequests}
                      </strong>{" "}
                      pending service request
                      {pendingRequests > 1
                        ? "s"
                        : ""}{" "}
                      waiting for review.
                    </p>

                  ) : (

                    <p
                      style={{
                        margin: 0,
                        color: "#888",
                        fontSize: "13px",
                      }}
                    >
                      No new notifications.
                    </p>

                  )}

                </div>

              )}

            </div>


            {/* PROFILE */}

            <div className="admin-profile">

              <div className="admin-profile-avatar">
                A
              </div>

              <div>

                <strong>
                  Admin
                </strong>

                <small>
                  Service Center
                </small>

              </div>

            </div>

          </div>

        </header>



        {/* ===================================================
            CONTENT
        =================================================== */}

        <div className="admin-content">


          {/* =================================================
              WELCOME
          ================================================= */}

          <section className="admin-welcome">

            <div>

              <p>
                SERVICE MANAGEMENT
              </p>

              <h2>
                Good evening, Admin
              </h2>

              <span>
                Manage vehicle service requests,
                appointments and service operations
                from one place.
              </span>

            </div>

          </section>



          {/* =================================================
              STATISTICS
          ================================================= */}

          <section className="admin-stat-grid">


            {/* VEHICLES */}

            <div
              className="admin-stat-card"
              onClick={goToVehicles}
              role="button"
              tabIndex={0}
            >

              <div className="admin-stat-icon blue">

                <Car size={21} />

              </div>

              <div>

                <span>
                  REGISTERED VEHICLES
                </span>

                <strong>
                  128
                </strong>

                <small>
                  Active vehicles
                </small>

              </div>

            </div>



            {/* PENDING */}

            <div
              className="admin-stat-card"
              onClick={goToRequests}
              role="button"
              tabIndex={0}
            >

              <div className="admin-stat-icon orange">

                <Clock3 size={21} />

              </div>

              <div>

                <span>
                  PENDING REQUESTS
                </span>

                <strong>
                  {pendingRequests}
                </strong>

                <small>
                  Need your attention
                </small>

              </div>

            </div>



            {/* APPOINTMENTS */}

            <div
              className="admin-stat-card"
              onClick={goToAppointments}
              role="button"
              tabIndex={0}
            >

              <div className="admin-stat-icon green">

                <CalendarDays size={21} />

              </div>

              <div>

                <span>
                  TODAY'S APPOINTMENTS
                </span>

                <strong>
                  08
                </strong>

                <small>
                  Scheduled today
                </small>

              </div>

            </div>



            {/* COMPLETED */}

            <div
              className="admin-stat-card"
              onClick={goToRequests}
              role="button"
              tabIndex={0}
            >

              <div className="admin-stat-icon purple">

                <CheckCircle2 size={21} />

              </div>

              <div>

                <span>
                  COMPLETED SERVICES
                </span>

                <strong>
                  {completedRequests}
                </strong>

                <small>
                  Completed requests
                </small>

              </div>

            </div>

          </section>



          {/* =================================================
              SERVICE REQUESTS
          ================================================= */}

          <section className="admin-requests-section">


            {/* HEADER */}

            <div className="admin-section-header">

              <div>

                <p>
                  SERVICE MANAGEMENT
                </p>

                <h2>
                  Recent Service Requests
                </h2>

              </div>


              <button
                type="button"
                className="admin-view-all"
                onClick={viewAllRequests}
              >

                VIEW ALL

                <ChevronRight size={16} />

              </button>

            </div>



            {/* SEARCH */}

            <div className="admin-search">

              <Search size={18} />

              <input
                type="text"
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(
                    event.target.value
                  )
                }
                placeholder="Search owner, vehicle, registration or service..."
              />

            </div>



            {/* REQUEST LIST */}

            <div className="admin-request-list">


              {filteredRequests.length === 0 ? (

                <div className="admin-empty-state">

                  <ClipboardList size={35} />

                  <h3>
                    No service requests
                  </h3>

                  <p>
                    New owner service requests
                    will appear here.
                  </p>

                </div>

              ) : (

                filteredRequests.map(
                  (request) => (

                    <article
                      className="admin-request-card"
                      key={request.id}
                    >


                      {/* OWNER */}

                      <div className="request-main">

                        <div className="request-car-icon">

                          <Car size={22} />

                        </div>


                        <div className="request-owner">

                          <small>
                            {request.id}
                          </small>

                          <h3>
                            {request.owner}
                          </h3>

                          <span>
                            {request.model}
                          </span>

                        </div>

                      </div>



                      {/* DETAILS */}

                      <div className="request-details">


                        <div>

                          <small>
                            REGISTRATION
                          </small>

                          <strong>
                            {request.registration ||
                              "—"}
                          </strong>

                        </div>


                        <div>

                          <small>
                            SERVICE
                          </small>

                          <strong>
                            {request.serviceType ||
                              "—"}
                          </strong>

                        </div>


                        <div>

                          <small>
                            REQUESTED DATE
                          </small>

                          <strong>
                            {request.requestedDate ||
                              "—"}
                          </strong>

                        </div>


                        <div>

                          <small>
                            MILEAGE
                          </small>

                          <strong>
                            {request.mileage ||
                              "—"}
                          </strong>

                        </div>

                      </div>



                      {/* RIGHT */}

                      <div className="request-right">


                        {/* STATUS */}

                        <span
                          className={`request-status ${
                            request.status
                              ?.toLowerCase()
                              .replace(
                                /\s+/g,
                                "-"
                              ) ||
                            "pending"
                          }`}
                        >

                          {request.status ===
                            "Pending" && (
                            <Clock3 size={13} />
                          )}

                          {request.status ===
                            "Approved" && (
                            <CheckCircle2
                              size={13}
                            />
                          )}

                          {request.status ===
                            "In Service" && (
                            <Wrench size={13} />
                          )}

                          {request.status ===
                            "Completed" && (
                            <CheckCircle2
                              size={13}
                            />
                          )}

                          {request.status ===
                            "Rejected" && (
                            <AlertCircle
                              size={13}
                            />
                          )}

                          {request.status ||
                            "Pending"}

                        </span>



                        {/* VIEW */}

                        <button
                          type="button"
                          className="request-view-button"
                          onClick={() =>
                            navigate(
                              `/admin-request/${request.id}`
                            )
                          }
                        >

                          VIEW

                          <ChevronRight
                            size={15}
                          />

                        </button>

                      </div>

                    </article>

                  )
                )

              )}

            </div>

          </section>



          {/* =================================================
              BOTTOM GRID
          ================================================= */}

          <section className="admin-bottom-grid">


            {/* =================================================
                APPOINTMENTS
            ================================================= */}

            <div className="admin-panel">


              <div className="admin-panel-header">

                <div>

                  <p>
                    TODAY
                  </p>

                  <h2>
                    Appointments
                  </h2>

                </div>

                <CalendarDays size={20} />

              </div>



              {/* APPOINTMENT 1 */}

              <div className="appointment-row">

                <div className="appointment-time">

                  09:00

                  <small>
                    AM
                  </small>

                </div>

                <div>

                  <strong>
                    BMW X3
                  </strong>

                  <span>
                    KA-03-EF-4921
                  </span>

                </div>

                <b>
                  Confirmed
                </b>

              </div>



              {/* APPOINTMENT 2 */}

              <div className="appointment-row">

                <div className="appointment-time">

                  10:30

                  <small>
                    AM
                  </small>

                </div>

                <div>

                  <strong>
                    BMW i5
                  </strong>

                  <span>
                    KA-25-MH-4827
                  </span>

                </div>

                <b>
                  Confirmed
                </b>

              </div>



              {/* APPOINTMENT 3 */}

              <div className="appointment-row">

                <div className="appointment-time">

                  02:00

                  <small>
                    PM
                  </small>

                </div>

                <div>

                  <strong>
                    BMW X5
                  </strong>

                  <span>
                    KA-19-CD-7312
                  </span>

                </div>

                <b>
                  In Service
                </b>

              </div>

            </div>



            {/* =================================================
                ATTENTION
            ================================================= */}

            <div className="admin-panel">


              <div className="admin-panel-header">

                <div>

                  <p>
                    ATTENTION
                  </p>

                  <h2>
                    Service Center
                  </h2>

                </div>

                <AlertCircle size={20} />

              </div>



              {/* ALERT 1 */}

              <div className="admin-alert">

                <div>

                  <Wrench size={18} />

                </div>

                <section>

                  <strong>
                    5 vehicles awaiting service
                  </strong>

                  <span>
                    Service team needs to update
                    their progress.
                  </span>

                </section>

              </div>



              {/* ALERT 2 */}

              <div className="admin-alert">

                <div>

                  <ClipboardList size={18} />

                </div>

                <section>

                  <strong>
                    {pendingRequests} pending
                    request
                    {pendingRequests !== 1
                      ? "s"
                      : ""}
                  </strong>

                  <span>
                    Review new owner requests.
                  </span>

                </section>

              </div>



              {/* STATUS SUMMARY */}

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(3, 1fr)",
                  gap: "10px",
                  marginTop: "15px",
                }}
              >

                <div
                  style={{
                    padding: "12px",
                    background: "#fff8e8",
                    borderRadius: "6px",
                  }}
                >

                  <small>
                    APPROVED
                  </small>

                  <strong
                    style={{
                      display: "block",
                      marginTop: "4px",
                    }}
                  >
                    {approvedRequests}
                  </strong>

                </div>


                <div
                  style={{
                    padding: "12px",
                    background: "#edf6fd",
                    borderRadius: "6px",
                  }}
                >

                  <small>
                    IN SERVICE
                  </small>

                  <strong
                    style={{
                      display: "block",
                      marginTop: "4px",
                    }}
                  >
                    {inServiceRequests}
                  </strong>

                </div>


                <div
                  style={{
                    padding: "12px",
                    background: "#edf8f2",
                    borderRadius: "6px",
                  }}
                >

                  <small>
                    COMPLETED
                  </small>

                  <strong
                    style={{
                      display: "block",
                      marginTop: "4px",
                    }}
                  >
                    {completedRequests}
                  </strong>

                </div>

              </div>

            </div>

          </section>



          {/* =================================================
              REFRESH
          ================================================= */}

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
            }}
          >

            <button
              type="button"
              onClick={refreshData}
              style={{
                padding: "10px 16px",
                border: "1px solid #d9dee2",
                background: "#ffffff",
                borderRadius: "5px",
                cursor: "pointer",
                fontFamily: "inherit",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "0.06em",
              }}
            >
              REFRESH DATA
            </button>

          </div>


        </div>

      </main>

    </div>

  );
}


export default AdminDashboard;