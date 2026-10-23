import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Wrench,
  Car,
  CalendarDays,
  ClipboardList,
  CheckCircle2,
  Clock3,
  Search,
  Bell,
  UserRound,
} from "lucide-react";

import "./ServiceTeamDashboard.css";

function ServiceTeamDashboard() {
  const navigate = useNavigate();

  const [requests, setRequests] = useState([]);
  const [search, setSearch] = useState("");

  // LOAD CUSTOMER SERVICE REQUESTS
  useEffect(() => {
    const savedRequests =
      JSON.parse(localStorage.getItem("serviceRequests")) || [];

    setRequests(savedRequests);
  }, []);

  // SEARCH REQUESTS
  const filteredRequests = requests.filter((request) => {
    const searchText = search.toLowerCase();

    return (
      request.id?.toLowerCase().includes(searchText) ||
      request.owner?.toLowerCase().includes(searchText) ||
      request.model?.toLowerCase().includes(searchText) ||
      request.registration?.toLowerCase().includes(searchText)
    );
  });

  // REQUEST COUNTS
  const pendingRequests = requests.filter(
    (request) => request.status === "Pending"
  ).length;

  const inProgressRequests = requests.filter(
    (request) => request.status === "In Progress"
  ).length;

  const completedRequests = requests.filter(
    (request) => request.status === "Completed"
  ).length;

  return (
    <div className="service-dashboard">

      {/* SIDEBAR */}
      <aside className="service-sidebar">

        <div className="service-logo">
          <img
            src="/BMW_India-Logo.wine.png"
            alt="AutoSphere"
          />

          <div>
            <h2>BMW</h2>
            <p>Service Operations</p>
          </div>
        </div>

        <nav>

          <a className="active">
            <ClipboardList size={18} />
            Dashboard
          </a>

          <a onClick={() => navigate("/service-vehicles")}>
            <Car size={18} />
            Vehicles
          </a>

          <a onClick={() => navigate("/service-requests")}>
            <Wrench size={18} />
            Service Requests
          </a>

          <a onClick={() => navigate("/service-appointments")}>
            <CalendarDays size={18} />
            Appointments
          </a>

          <a onClick={() => navigate("/service-history")}>
            <CheckCircle2 size={18} />
            Service History
          </a>

        </nav>

        <div className="sidebar-user">
          <UserRound size={20} />

          <div>
            <strong>Service Team</strong>
            <span>Authorized Staff</span>
          </div>
        </div>

        <button
          className="logout-button"
          onClick={() => {
            localStorage.removeItem("bmwLoggedIn");
            localStorage.removeItem("bmwUser");
            localStorage.removeItem("bmwUserId");
            localStorage.removeItem("bmwUserRole");

            navigate("/login");
          }}
        >
          Logout
        </button>

      </aside>

      {/* MAIN CONTENT */}
      <main className="service-main">

        {/* HEADER */}
        <header className="service-header">

          <div>
            <span>AUTOSPHERE SERVICE OPERATIONS</span>

            <h1>Service Dashboard</h1>

            <p>
              Manage vehicles, service requests and maintenance.
            </p>
          </div>

          <button className="notification">
            <Bell size={20} />
          </button>

        </header>

        {/* SEARCH */}
        <div className="search-row">

          <div className="search-box">

            <Search size={19} />

            <input
              type="text"
              placeholder="Search vehicle or registration number..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

          <button
            className="new-service"
            onClick={() => navigate("/service-record")}
          >
            + New Service Record
          </button>

        </div>

        {/* STATS */}
        <div className="stats">

          {/* PENDING */}
          <div className="stat-card">

            <Clock3 />

            <div>
              <p>Pending Requests</p>
              <h2>{pendingRequests}</h2>
            </div>

          </div>

          {/* IN PROGRESS */}
          <div className="stat-card">

            <Wrench />

            <div>
              <p>Vehicles In Service</p>
              <h2>{inProgressRequests}</h2>
            </div>

          </div>

          {/* APPOINTMENTS */}
          <div className="stat-card">

            <CalendarDays />

            <div>
              <p>Today's Appointments</p>
              <h2>14</h2>
            </div>

          </div>

          {/* COMPLETED */}
          <div className="stat-card">

            <CheckCircle2 />

            <div>
              <p>Completed Services</p>
              <h2>{completedRequests}</h2>
            </div>

          </div>

        </div>

        {/* LOWER SECTION */}
        <div className="dashboard-grid">

          {/* RECENT SERVICE REQUESTS */}
          <section className="dashboard-card">

            <div className="card-title">

              <div>
                <small>WORK MANAGEMENT</small>
                <h2>Recent Service Requests</h2>
              </div>

              <button
                onClick={() => navigate("/service-requests")}
              >
                View All →
              </button>

            </div>

            {/* NO REQUESTS */}
            {filteredRequests.length === 0 ? (

              <div className="request">

                <div>
                  <strong>
                    No Service Requests
                  </strong>

                  <span>
                    Customer requests will appear here.
                  </span>
                </div>

              </div>

            ) : (

              /* REQUEST LIST */
              filteredRequests
                .slice()
                .reverse()
                .slice(0, 5)
                .map((request) => (

                  <div
                    className="request"
                    key={request.id}
                    onClick={() =>
                      navigate(
                        `/service-record?requestId=${request.id}`
                      )
                    }
                    style={{ cursor: "pointer" }}
                  >

                    {/* REQUEST ID */}
                    <div>

                      <strong>
                        {request.id}
                      </strong>

                      <span>
                        {request.registration}
                      </span>

                    </div>

                    {/* VEHICLE */}
                    <div>

                      <strong>
                        {request.model}
                      </strong>

                      <span>
                        {request.serviceType}
                      </span>

                    </div>

                    {/* STATUS */}
                    <b
                      className={
                        request.status === "Completed"
                          ? "green"
                          : request.status === "In Progress"
                          ? "blue"
                          : "orange"
                      }
                    >
                      {request.status}
                    </b>

                  </div>

                ))

            )}

          </section>

          {/* QUICK ACTIONS */}
          <section className="dashboard-card">

            <div className="card-title">

              <div>
                <small>QUICK ACCESS</small>
                <h2>Service Actions</h2>
              </div>

            </div>

            {/* CREATE SERVICE RECORD */}
            <button
              className="action"
              onClick={() => navigate("/service-record")}
            >

              <Wrench />

              <div>

                <strong>
                  Create Service Record
                </strong>

                <span>
                  Add completed service details
                </span>

              </div>

              →

            </button>

            {/* FIND VEHICLE */}
            <button
              className="action"
              onClick={() => navigate("/service-vehicles")}
            >

              <Car />

              <div>

                <strong>
                  Find Vehicle
                </strong>

                <span>
                  View vehicle service history
                </span>

              </div>

              →

            </button>

            {/* APPOINTMENTS */}
            <button
              className="action"
              onClick={() => navigate("/service-appointments")}
            >

              <CalendarDays />

              <div>

                <strong>
                  Appointments
                </strong>

                <span>
                  View today's appointments
                </span>

              </div>

              →

            </button>

          </section>

        </div>

      </main>

    </div>
  );
}

export default ServiceTeamDashboard;