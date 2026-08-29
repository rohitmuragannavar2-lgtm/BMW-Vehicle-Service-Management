import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  Search,
  Filter,
  CalendarDays,
  Clock3,
  Car,
  User,
  MapPin,
  Wrench,
  CheckCircle2,
  XCircle,
  Eye,
  Trash2,
  X,
  PlayCircle,
  ChevronDown,
} from "lucide-react";

import "./AdminAppointments.css";


function AdminAppointments() {

  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedAppointment, setSelectedAppointment] =
    useState(null);

  const [appointments, setAppointments] = useState([
    {
      id: "AP-2041",
      owner: "Rohit Muragannavar",
      vehicle: "BMW i5 eDrive40",
      registration: "KA-25-MH-4827",
      service: "Regular Service",
      date: "15 September 2026",
      time: "10:30 AM",
      location: "BMW Service Center",
      status: "Confirmed",
    },
    {
      id: "AP-2040",
      owner: "Arjun Sharma",
      vehicle: "BMW X3",
      registration: "KA-03-EF-4921",
      service: "Oil Service",
      date: "15 September 2026",
      time: "09:30 AM",
      location: "BMW Service Center",
      status: "Confirmed",
    },
    {
      id: "AP-2039",
      owner: "Rahul Patil",
      vehicle: "BMW X5",
      registration: "KA-19-CD-7312",
      service: "Brake Inspection",
      date: "15 September 2026",
      time: "12:00 PM",
      location: "BMW Service Center",
      status: "In Service",
    },
    {
      id: "AP-2038",
      owner: "Amit Kulkarni",
      vehicle: "BMW 3 Series",
      registration: "KA-05-AB-9218",
      service: "General Inspection",
      date: "14 September 2026",
      time: "02:30 PM",
      location: "BMW Service Center",
      status: "Completed",
    },
    {
      id: "AP-2037",
      owner: "Vikram Desai",
      vehicle: "BMW iX",
      registration: "KA-41-XY-6712",
      service: "Software Update",
      date: "16 September 2026",
      time: "11:00 AM",
      location: "BMW Service Center",
      status: "Pending",
    },
    {
      id: "AP-2036",
      owner: "Karan Joshi",
      vehicle: "BMW M4",
      registration: "KA-02-MN-8812",
      service: "Performance Check",
      date: "17 September 2026",
      time: "04:00 PM",
      location: "BMW Service Center",
      status: "Cancelled",
    },
  ]);


  /* =====================================================
     FILTER + SEARCH
  ===================================================== */

  const filteredAppointments = useMemo(() => {

    return appointments.filter((appointment) => {

      const matchesFilter =
        filter === "All" ||
        appointment.status === filter;

      const query =
        search.trim().toLowerCase();

      const matchesSearch =
        !query ||
        appointment.id.toLowerCase().includes(query) ||
        appointment.owner.toLowerCase().includes(query) ||
        appointment.vehicle.toLowerCase().includes(query) ||
        appointment.registration
          .toLowerCase()
          .includes(query) ||
        appointment.service
          .toLowerCase()
          .includes(query);

      return matchesFilter && matchesSearch;

    });

  }, [appointments, filter, search]);


  /* =====================================================
     UPDATE STATUS
  ===================================================== */

  const updateStatus = (id, status) => {

    setAppointments((current) =>
      current.map((appointment) =>
        appointment.id === id
          ? {
              ...appointment,
              status,
            }
          : appointment
      )
    );

    setSelectedAppointment((current) =>
      current && current.id === id
        ? {
            ...current,
            status,
          }
        : current
    );

  };


  /* =====================================================
     DELETE
  ===================================================== */

  const deleteAppointment = (id) => {

    const confirmed = window.confirm(
      "Are you sure you want to delete this appointment?"
    );

    if (!confirmed) return;

    setAppointments((current) =>
      current.filter(
        (appointment) =>
          appointment.id !== id
      )
    );

    setSelectedAppointment(null);

  };


  return (

    <div className="admin-appointments-page">


      {/* =================================================
          HEADER
      ================================================= */}

      <header className="admin-appointments-header">

        <button
          className="admin-appointments-back"
          onClick={() =>
            navigate("/admin-dashboard")
          }
        >
          <ArrowLeft size={17} />

          <span>
            BACK TO DASHBOARD
          </span>
        </button>


        <div className="admin-appointments-title">

          <span>
            BMW ADMIN PORTAL
          </span>

          <h1>
            Appointments
          </h1>

        </div>


        <div className="admin-appointments-count">

          <CalendarDays size={16} />

          <span>
            {appointments.length} APPOINTMENTS
          </span>

        </div>

      </header>



      {/* =================================================
          MAIN
      ================================================= */}

      <main className="admin-appointments-content">


        {/* INTRO */}

        <section className="admin-appointments-intro">

          <p>
            APPOINTMENT MANAGEMENT
          </p>

          <h2>
            Manage service appointments.
          </h2>

          <span>
            Review schedules, update appointment
            status and manage BMW owner visits.
          </span>

        </section>



        {/* =================================================
            STATS
        ================================================= */}

        <section className="admin-appointment-stats">


          <div className="admin-appointment-stat">

            <div className="appointment-stat-icon blue">
              <CalendarDays size={20} />
            </div>

            <div>

              <small>
                TOTAL
              </small>

              <strong>
                {appointments.length}
              </strong>

            </div>

          </div>


          <div className="admin-appointment-stat">

            <div className="appointment-stat-icon orange">
              <Clock3 size={20} />
            </div>

            <div>

              <small>
                PENDING
              </small>

              <strong>
                {
                  appointments.filter(
                    (a) =>
                      a.status === "Pending"
                  ).length
                }
              </strong>

            </div>

          </div>


          <div className="admin-appointment-stat">

            <div className="appointment-stat-icon green">
              <CheckCircle2 size={20} />
            </div>

            <div>

              <small>
                CONFIRMED
              </small>

              <strong>
                {
                  appointments.filter(
                    (a) =>
                      a.status === "Confirmed"
                  ).length
                }
              </strong>

            </div>

          </div>


          <div className="admin-appointment-stat">

            <div className="appointment-stat-icon purple">
              <Wrench size={20} />
            </div>

            <div>

              <small>
                IN SERVICE
              </small>

              <strong>
                {
                  appointments.filter(
                    (a) =>
                      a.status === "In Service"
                  ).length
                }
              </strong>

            </div>

          </div>

        </section>



        {/* =================================================
            SEARCH / FILTER
        ================================================= */}

        <section className="admin-appointments-toolbar">


          <div className="appointment-search">

            <Search size={18} />

            <input
              type="text"
              placeholder="Search owner, vehicle, registration or appointment ID..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>


          <div className="appointment-filter">

            <Filter size={16} />

            <select
              value={filter}
              onChange={(e) =>
                setFilter(e.target.value)
              }
            >

              <option value="All">
                All Appointments
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

              <option value="Cancelled">
                Cancelled
              </option>

            </select>

            <ChevronDown
              size={15}
              className="appointment-filter-arrow"
            />

          </div>

        </section>



        {/* =================================================
            APPOINTMENT LIST
        ================================================= */}

        <section className="admin-appointments-panel">


          <div className="admin-appointments-panel-header">

            <div>

              <p>
                SCHEDULE
              </p>

              <h2>
                Appointment list
              </h2>

            </div>

            <span>
              Showing {filteredAppointments.length} results
            </span>

          </div>



          <div className="admin-appointment-list">


            {filteredAppointments.map(
              (appointment, index) => (

                <article
                  className="admin-appointment-card"
                  key={appointment.id}
                  style={{
                    "--appointment-delay":
                      `${index * 0.07}s`,
                  }}
                >


                  {/* ICON */}

                  <div className="admin-appointment-icon">

                    <CalendarDays size={21} />

                  </div>



                  {/* MAIN */}

                  <div className="admin-appointment-main">

                    <div className="admin-appointment-id">

                      <span>
                        {appointment.id}
                      </span>

                    </div>

                    <h3>
                      {appointment.service}
                    </h3>

                    <div className="admin-appointment-owner">

                      <User size={13} />

                      <span>
                        {appointment.owner}
                      </span>

                    </div>

                  </div>



                  {/* VEHICLE */}

                  <div className="admin-appointment-vehicle">

                    <small>
                      VEHICLE
                    </small>

                    <strong>
                      {appointment.vehicle}
                    </strong>

                    <span>
                      {appointment.registration}
                    </span>

                  </div>



                  {/* DATE */}

                  <div className="admin-appointment-date">

                    <small>
                      DATE & TIME
                    </small>

                    <strong>
                      {appointment.date}
                    </strong>

                    <span>
                      {appointment.time}
                    </span>

                  </div>



                  {/* STATUS */}

                  <div className="admin-appointment-status">

                    <span
                      className={`appointment-badge ${
                        appointment.status
                          .toLowerCase()
                          .replaceAll(" ", "-")
                      }`}
                    >
                      {appointment.status}
                    </span>

                  </div>



                  {/* VIEW */}

                  <div className="admin-appointment-action">

                    <button
                      onClick={() =>
                        setSelectedAppointment(
                          appointment
                        )
                      }
                    >

                      <Eye size={15} />

                      VIEW

                    </button>

                  </div>

                </article>

              )
            )}



            {filteredAppointments.length === 0 && (

              <div className="admin-appointment-empty">

                <CalendarDays size={36} />

                <h3>
                  No appointments found
                </h3>

                <p>
                  Try changing your search or filter.
                </p>

              </div>

            )}

          </div>

        </section>

      </main>



      {/* =================================================
          DETAILS MODAL
      ================================================= */}

      {selectedAppointment && (

        <div
          className="appointment-modal-overlay"
          onClick={() =>
            setSelectedAppointment(null)
          }
        >

          <div
            className="appointment-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >


            {/* MODAL HEADER */}

            <div className="appointment-modal-header">

              <div>

                <span>
                  {selectedAppointment.id}
                </span>

                <h2>
                  Appointment Details
                </h2>

              </div>


              <button
                onClick={() =>
                  setSelectedAppointment(null)
                }
              >
                <X size={19} />
              </button>

            </div>



            {/* BODY */}

            <div className="appointment-modal-body">


              <div className="appointment-modal-service">

                <div className="appointment-modal-service-icon">

                  <Wrench size={23} />

                </div>

                <div>

                  <small>
                    SERVICE
                  </small>

                  <h3>
                    {selectedAppointment.service}
                  </h3>

                </div>

              </div>



              {/* DETAILS GRID */}

              <div className="appointment-modal-grid">


                <div className="appointment-modal-detail">

                  <User size={17} />

                  <div>

                    <small>
                      OWNER
                    </small>

                    <strong>
                      {selectedAppointment.owner}
                    </strong>

                  </div>

                </div>


                <div className="appointment-modal-detail">

                  <Car size={17} />

                  <div>

                    <small>
                      VEHICLE
                    </small>

                    <strong>
                      {selectedAppointment.vehicle}
                    </strong>

                    <span>
                      {selectedAppointment.registration}
                    </span>

                  </div>

                </div>


                <div className="appointment-modal-detail">

                  <CalendarDays size={17} />

                  <div>

                    <small>
                      DATE
                    </small>

                    <strong>
                      {selectedAppointment.date}
                    </strong>

                  </div>

                </div>


                <div className="appointment-modal-detail">

                  <Clock3 size={17} />

                  <div>

                    <small>
                      TIME
                    </small>

                    <strong>
                      {selectedAppointment.time}
                    </strong>

                  </div>

                </div>


                <div className="appointment-modal-detail">

                  <MapPin size={17} />

                  <div>

                    <small>
                      SERVICE CENTER
                    </small>

                    <strong>
                      {selectedAppointment.location}
                    </strong>

                  </div>

                </div>


                <div className="appointment-modal-detail">

                  <CheckCircle2 size={17} />

                  <div>

                    <small>
                      STATUS
                    </small>

                    <strong>
                      {selectedAppointment.status}
                    </strong>

                  </div>

                </div>

              </div>



              {/* STATUS */}

              <div className="appointment-update-section">

                <p>
                  UPDATE APPOINTMENT
                </p>


                <div className="appointment-update-buttons">


                  <button
                    className="appointment-confirm"
                    onClick={() =>
                      updateStatus(
                        selectedAppointment.id,
                        "Confirmed"
                      )
                    }
                  >

                    <CheckCircle2 size={15} />

                    CONFIRM

                  </button>


                  <button
                    className="appointment-service"
                    onClick={() =>
                      updateStatus(
                        selectedAppointment.id,
                        "In Service"
                      )
                    }
                  >

                    <PlayCircle size={15} />

                    START SERVICE

                  </button>


                  <button
                    className="appointment-complete"
                    onClick={() =>
                      updateStatus(
                        selectedAppointment.id,
                        "Completed"
                      )
                    }
                  >

                    <CheckCircle2 size={15} />

                    COMPLETE

                  </button>


                  <button
                    className="appointment-cancel"
                    onClick={() =>
                      updateStatus(
                        selectedAppointment.id,
                        "Cancelled"
                      )
                    }
                  >

                    <XCircle size={15} />

                    CANCEL

                  </button>

                </div>

              </div>



              {/* DELETE */}

              <button
                className="appointment-delete"
                onClick={() =>
                  deleteAppointment(
                    selectedAppointment.id
                  )
                }
              >

                <Trash2 size={15} />

                DELETE APPOINTMENT

              </button>

            </div>

          </div>

        </div>

      )}

    </div>

  );
}


export default AdminAppointments;