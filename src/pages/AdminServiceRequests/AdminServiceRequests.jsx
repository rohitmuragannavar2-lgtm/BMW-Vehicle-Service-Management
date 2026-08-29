import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  Search,
  Filter,
  Wrench,
  Car,
  User,
  CalendarDays,
  Clock3,
  MapPin,
  CheckCircle2,
  XCircle,
  Eye,
  Trash2,
  X,
  ChevronDown,
} from "lucide-react";

import "./AdminServiceRequests.css";


function AdminServiceRequests() {

  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [requests, setRequests] = useState([
    {
      id: "SR-1024",
      owner: "Rohit Muragannavar",
      vehicle: "BMW i5 eDrive40",
      registration: "KA-25-MH-4827",
      service: "Regular Service",
      date: "15 September 2026",
      time: "10:30 AM",
      location: "BMW Service Center",
      status: "Pending",
      submitted: "12 min ago",
    },
    {
      id: "SR-1023",
      owner: "Arjun Sharma",
      vehicle: "BMW X3",
      registration: "KA-03-EF-4921",
      service: "Oil Service",
      date: "15 September 2026",
      time: "09:30 AM",
      location: "BMW Service Center",
      status: "Confirmed",
      submitted: "35 min ago",
    },
    {
      id: "SR-1022",
      owner: "Rahul Patil",
      vehicle: "BMW X5",
      registration: "KA-19-CD-7312",
      service: "Brake Inspection",
      date: "15 September 2026",
      time: "12:00 PM",
      location: "BMW Service Center",
      status: "In Service",
      submitted: "1 hr ago",
    },
    {
      id: "SR-1021",
      owner: "Amit Kulkarni",
      vehicle: "BMW 3 Series",
      registration: "KA-05-AB-9218",
      service: "General Inspection",
      date: "14 September 2026",
      time: "02:30 PM",
      location: "BMW Service Center",
      status: "Completed",
      submitted: "2 hrs ago",
    },
    {
      id: "SR-1020",
      owner: "Vikram Desai",
      vehicle: "BMW iX",
      registration: "KA-41-XY-6712",
      service: "Software Update",
      date: "16 September 2026",
      time: "11:00 AM",
      location: "BMW Service Center",
      status: "Confirmed",
      submitted: "3 hrs ago",
    },
    {
      id: "SR-1019",
      owner: "Karan Joshi",
      vehicle: "BMW M4",
      registration: "KA-02-MN-8812",
      service: "Performance Check",
      date: "17 September 2026",
      time: "04:00 PM",
      location: "BMW Service Center",
      status: "Pending",
      submitted: "4 hrs ago",
    },
  ]);


  /* ======================================================
     FILTER
  ====================================================== */

  const filteredRequests = useMemo(() => {

    return requests.filter((request) => {

      const matchesFilter =
        filter === "All" ||
        request.status === filter;

      const value =
        search.trim().toLowerCase();

      const matchesSearch =
        !value ||
        request.id.toLowerCase().includes(value) ||
        request.owner.toLowerCase().includes(value) ||
        request.vehicle.toLowerCase().includes(value) ||
        request.registration.toLowerCase().includes(value) ||
        request.service.toLowerCase().includes(value);

      return matchesFilter && matchesSearch;

    });

  }, [requests, filter, search]);


  /* ======================================================
     STATUS UPDATE
  ====================================================== */

  const updateStatus = (id, status) => {

    setRequests((current) =>
      current.map((request) =>
        request.id === id
          ? {
              ...request,
              status,
            }
          : request
      )
    );

    setSelectedRequest((current) =>
      current && current.id === id
        ? {
            ...current,
            status,
          }
        : current
    );

  };


  /* ======================================================
     DELETE
  ====================================================== */

  const deleteRequest = (id) => {

    const confirmed =
      window.confirm(
        "Are you sure you want to delete this service request?"
      );

    if (!confirmed) return;

    setRequests((current) =>
      current.filter(
        (request) => request.id !== id
      )
    );

    setSelectedRequest(null);

  };


  return (

    <div className="admin-service-page">


      {/* ==================================================
          HEADER
      ================================================== */}

      <header className="admin-service-header">

        <button
          className="admin-service-back"
          onClick={() =>
            navigate("/admin-dashboard")
          }
        >
          <ArrowLeft size={17} />

          <span>
            BACK TO DASHBOARD
          </span>
        </button>


        <div className="admin-service-title">

          <span>
            BMW ADMIN PORTAL
          </span>

          <h1>
            Service Requests
          </h1>

        </div>


        <div className="admin-service-count">

          <Wrench size={17} />

          <span>
            {requests.length} REQUESTS
          </span>

        </div>

      </header>



      {/* ==================================================
          CONTENT
      ================================================== */}

      <main className="admin-service-content">


        {/* INTRO */}

        <section className="admin-service-intro">

          <div>

            <p>
              SERVICE MANAGEMENT
            </p>

            <h2>
              Manage service requests.
            </h2>

            <span>
              Review, confirm and manage vehicle
              service requests from BMW owners.
            </span>

          </div>

        </section>



        {/* ==================================================
            STATISTICS
        ================================================== */}

        <section className="admin-service-stats">


          <div className="service-stat">

            <div className="service-stat-icon blue">
              <Wrench size={20} />
            </div>

            <div>
              <small>
                TOTAL REQUESTS
              </small>

              <strong>
                {requests.length}
              </strong>
            </div>

          </div>


          <div className="service-stat">

            <div className="service-stat-icon orange">
              <Clock3 size={20} />
            </div>

            <div>
              <small>
                PENDING
              </small>

              <strong>
                {
                  requests.filter(
                    (r) =>
                      r.status === "Pending"
                  ).length
                }
              </strong>
            </div>

          </div>


          <div className="service-stat">

            <div className="service-stat-icon green">
              <CheckCircle2 size={20} />
            </div>

            <div>
              <small>
                CONFIRMED
              </small>

              <strong>
                {
                  requests.filter(
                    (r) =>
                      r.status === "Confirmed"
                  ).length
                }
              </strong>
            </div>

          </div>


          <div className="service-stat">

            <div className="service-stat-icon purple">
              <Car size={20} />
            </div>

            <div>
              <small>
                IN SERVICE
              </small>

              <strong>
                {
                  requests.filter(
                    (r) =>
                      r.status === "In Service"
                  ).length
                }
              </strong>
            </div>

          </div>

        </section>



        {/* ==================================================
            TOOLBAR
        ================================================== */}

        <section className="admin-service-toolbar">


          <div className="service-search">

            <Search size={18} />

            <input
              type="text"
              placeholder="Search owner, vehicle, registration or request ID..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>


          <div className="service-filter">

            <Filter size={16} />

            <select
              value={filter}
              onChange={(e) =>
                setFilter(e.target.value)
              }
            >

              <option value="All">
                All Requests
              </option>

              <option value="Pending">
                Pending
              </option>

              <option value="Confirmed">
                Confirmed
              </option>

              <option value="In Service">
                In Service
              </option>

              <option value="Completed">
                Completed
              </option>

            </select>

            <ChevronDown
              size={15}
              className="filter-arrow"
            />

          </div>

        </section>



        {/* ==================================================
            REQUEST LIST
        ================================================== */}

        <section className="admin-request-management">

          <div className="request-management-header">

            <div>

              <p>
                REQUESTS
              </p>

              <h2>
                Service request list
              </h2>

            </div>

            <span>
              Showing {filteredRequests.length} results
            </span>

          </div>


          <div className="service-request-list">


            {filteredRequests.map(
              (request, index) => (

                <article
                  className="service-request-card"
                  key={request.id}
                  style={{
                    "--request-delay":
                      `${index * 0.07}s`,
                  }}
                >


                  {/* REQUEST ICON */}

                  <div className="request-service-icon">

                    <Wrench size={22} />

                  </div>



                  {/* MAIN */}

                  <div className="service-request-main">

                    <div className="service-request-id">

                      <span>
                        {request.id}
                      </span>

                      <small>
                        {request.submitted}
                      </small>

                    </div>


                    <h3>
                      {request.service}
                    </h3>


                    <div className="service-request-owner">

                      <User size={14} />

                      <span>
                        {request.owner}
                      </span>

                    </div>

                  </div>



                  {/* VEHICLE */}

                  <div className="service-request-vehicle">

                    <small>
                      VEHICLE
                    </small>

                    <strong>
                      {request.vehicle}
                    </strong>

                    <span>
                      {request.registration}
                    </span>

                  </div>



                  {/* DATE */}

                  <div className="service-request-date">

                    <small>
                      APPOINTMENT
                    </small>

                    <strong>
                      {request.date}
                    </strong>

                    <span>
                      {request.time}
                    </span>

                  </div>



                  {/* STATUS */}

                  <div className="service-request-status">

                    <span
                      className={`request-badge ${
                        request.status
                          .toLowerCase()
                          .replace(
                            " ",
                            "-"
                          )
                      }`}
                    >
                      {request.status}
                    </span>

                  </div>



                  {/* ACTIONS */}

                  <div className="service-request-actions">

                    <button
                      className="view-request"
                      onClick={() =>
                        setSelectedRequest(
                          request
                        )
                      }
                    >

                      <Eye size={15} />

                      <span>
                        VIEW
                      </span>

                    </button>

                  </div>

                </article>

              )
            )}



            {filteredRequests.length === 0 && (

              <div className="service-no-results">

                <Search size={35} />

                <h3>
                  No service requests found
                </h3>

                <p>
                  Try changing your search or filter.
                </p>

              </div>

            )}

          </div>

        </section>


      </main>



      {/* ==================================================
          DETAILS MODAL
      ================================================== */}

      {selectedRequest && (

        <div
          className="service-modal-overlay"
          onClick={() =>
            setSelectedRequest(null)
          }
        >


          <div
            className="service-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >


            {/* MODAL HEADER */}

            <div className="service-modal-header">

              <div>

                <span>
                  {selectedRequest.id}
                </span>

                <h2>
                  Service Request
                </h2>

              </div>


              <button
                onClick={() =>
                  setSelectedRequest(null)
                }
              >

                <X size={19} />

              </button>

            </div>



            {/* MODAL BODY */}

            <div className="service-modal-body">


              <div className="modal-service-title">

                <div className="modal-service-icon">
                  <Wrench size={23} />
                </div>

                <div>

                  <small>
                    REQUESTED SERVICE
                  </small>

                  <h3>
                    {selectedRequest.service}
                  </h3>

                </div>

              </div>



              <div className="modal-details-grid">


                <div className="modal-detail">

                  <User size={17} />

                  <div>

                    <small>
                      OWNER
                    </small>

                    <strong>
                      {selectedRequest.owner}
                    </strong>

                  </div>

                </div>


                <div className="modal-detail">

                  <Car size={17} />

                  <div>

                    <small>
                      VEHICLE
                    </small>

                    <strong>
                      {selectedRequest.vehicle}
                    </strong>

                    <span>
                      {selectedRequest.registration}
                    </span>

                  </div>

                </div>


                <div className="modal-detail">

                  <CalendarDays size={17} />

                  <div>

                    <small>
                      DATE
                    </small>

                    <strong>
                      {selectedRequest.date}
                    </strong>

                  </div>

                </div>


                <div className="modal-detail">

                  <Clock3 size={17} />

                  <div>

                    <small>
                      TIME
                    </small>

                    <strong>
                      {selectedRequest.time}
                    </strong>

                  </div>

                </div>


                <div className="modal-detail">

                  <MapPin size={17} />

                  <div>

                    <small>
                      LOCATION
                    </small>

                    <strong>
                      {selectedRequest.location}
                    </strong>

                  </div>

                </div>


                <div className="modal-detail">

                  <CheckCircle2 size={17} />

                  <div>

                    <small>
                      CURRENT STATUS
                    </small>

                    <strong>
                      {selectedRequest.status}
                    </strong>

                  </div>

                </div>

              </div>


              {/* STATUS ACTIONS */}

              <div className="modal-status-section">

                <p>
                  UPDATE REQUEST STATUS
                </p>


                <div className="modal-status-buttons">


                  <button
                    className="confirm-action"
                    onClick={() =>
                      updateStatus(
                        selectedRequest.id,
                        "Confirmed"
                      )
                    }
                  >

                    <CheckCircle2 size={16} />

                    CONFIRM

                  </button>


                  <button
                    className="service-action"
                    onClick={() =>
                      updateStatus(
                        selectedRequest.id,
                        "In Service"
                      )
                    }
                  >

                    <Wrench size={16} />

                    START SERVICE

                  </button>


                  <button
                    className="complete-action"
                    onClick={() =>
                      updateStatus(
                        selectedRequest.id,
                        "Completed"
                      )
                    }
                  >

                    <CheckCircle2 size={16} />

                    COMPLETE

                  </button>


                  <button
                    className="reject-action"
                    onClick={() =>
                      updateStatus(
                        selectedRequest.id,
                        "Rejected"
                      )
                    }
                  >

                    <XCircle size={16} />

                    REJECT

                  </button>

                </div>

              </div>


              {/* DELETE */}

              <button
                className="delete-request"
                onClick={() =>
                  deleteRequest(
                    selectedRequest.id
                  )
                }
              >

                <Trash2 size={15} />

                DELETE REQUEST

              </button>


            </div>

          </div>

        </div>

      )}

    </div>

  );
}


export default AdminServiceRequests;