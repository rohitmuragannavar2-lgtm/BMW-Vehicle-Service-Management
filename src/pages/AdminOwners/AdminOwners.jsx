import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  Search,
  Filter,
  User,
  Mail,
  Phone,
  Car,
  CalendarDays,
  Eye,
  Pencil,
  Trash2,
  X,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

import "./AdminOwners.css";


function AdminOwners() {

  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedOwner, setSelectedOwner] = useState(null);

  const [owners, setOwners] = useState([
    {
      id: "OWN-1001",
      name: "Rohit Muragannavar",
      email: "rohit@example.com",
      phone: "+91 98765 43210",
      vehicles: 1,
      joined: "12 January 2026",
      status: "Active",
    },
    {
      id: "OWN-1002",
      name: "Arjun Sharma",
      email: "arjun@example.com",
      phone: "+91 98234 56781",
      vehicles: 2,
      joined: "18 February 2026",
      status: "Active",
    },
    {
      id: "OWN-1003",
      name: "Rahul Patil",
      email: "rahul@example.com",
      phone: "+91 97654 32109",
      vehicles: 1,
      joined: "04 March 2026",
      status: "Active",
    },
    {
      id: "OWN-1004",
      name: "Amit Kulkarni",
      email: "amit@example.com",
      phone: "+91 98123 45670",
      vehicles: 3,
      joined: "21 March 2026",
      status: "Inactive",
    },
    {
      id: "OWN-1005",
      name: "Vikram Desai",
      email: "vikram@example.com",
      phone: "+91 98987 65432",
      vehicles: 1,
      joined: "10 April 2026",
      status: "Active",
    },
    {
      id: "OWN-1006",
      name: "Karan Joshi",
      email: "karan@example.com",
      phone: "+91 99001 23456",
      vehicles: 2,
      joined: "02 May 2026",
      status: "Inactive",
    },
  ]);


  /* =====================================================
     SEARCH + FILTER
  ===================================================== */

  const filteredOwners = useMemo(() => {

    const query = search.trim().toLowerCase();

    return owners.filter((owner) => {

      const matchesFilter =
        filter === "All" ||
        owner.status === filter;

      const matchesSearch =
        !query ||
        owner.id.toLowerCase().includes(query) ||
        owner.name.toLowerCase().includes(query) ||
        owner.email.toLowerCase().includes(query) ||
        owner.phone.toLowerCase().includes(query);

      return matchesFilter && matchesSearch;

    });

  }, [owners, search, filter]);


  /* =====================================================
     STATUS
  ===================================================== */

  const updateStatus = (id, status) => {

    setOwners((current) =>
      current.map((owner) =>
        owner.id === id
          ? { ...owner, status }
          : owner
      )
    );

    setSelectedOwner((current) =>
      current && current.id === id
        ? { ...current, status }
        : current
    );

  };


  /* =====================================================
     DELETE
  ===================================================== */

  const deleteOwner = (id) => {

    const confirmed = window.confirm(
      "Are you sure you want to delete this owner?"
    );

    if (!confirmed) return;

    setOwners((current) =>
      current.filter(
        (owner) => owner.id !== id
      )
    );

    setSelectedOwner(null);

  };


  return (

    <div className="admin-owners-page">


      {/* =================================================
          HEADER
      ================================================= */}

      <header className="admin-owners-header">

        <button
          className="admin-owners-back"
          onClick={() =>
            navigate("/admin-dashboard")
          }
        >

          <ArrowLeft size={17} />

          <span>
            BACK TO DASHBOARD
          </span>

        </button>


        <div className="admin-owners-title">

          <span>
            BMW ADMIN PORTAL
          </span>

          <h1>
            Owners
          </h1>

        </div>


        <div className="admin-owners-count">

          <User size={15} />

          <span>
            {owners.length} OWNERS
          </span>

        </div>

      </header>



      {/* =================================================
          CONTENT
      ================================================= */}

      <main className="admin-owners-content">


        {/* INTRO */}

        <section className="admin-owners-intro">

          <p>
            OWNER MANAGEMENT
          </p>

          <h2>
            Manage BMW owners.
          </h2>

          <span>
            View registered owners, account status
            and vehicle ownership information.
          </span>

        </section>



        {/* =================================================
            STATS
        ================================================= */}

        <section className="admin-owner-stats">


          <div className="admin-owner-stat">

            <div className="owner-stat-icon blue">
              <User size={20} />
            </div>

            <div>

              <small>
                TOTAL OWNERS
              </small>

              <strong>
                {owners.length}
              </strong>

            </div>

          </div>


          <div className="admin-owner-stat">

            <div className="owner-stat-icon green">
              <CheckCircle2 size={20} />
            </div>

            <div>

              <small>
                ACTIVE
              </small>

              <strong>
                {
                  owners.filter(
                    (owner) =>
                      owner.status === "Active"
                  ).length
                }
              </strong>

            </div>

          </div>


          <div className="admin-owner-stat">

            <div className="owner-stat-icon orange">
              <XCircle size={20} />
            </div>

            <div>

              <small>
                INACTIVE
              </small>

              <strong>
                {
                  owners.filter(
                    (owner) =>
                      owner.status === "Inactive"
                  ).length
                }
              </strong>

            </div>

          </div>


          <div className="admin-owner-stat">

            <div className="owner-stat-icon purple">
              <Car size={20} />
            </div>

            <div>

              <small>
                VEHICLES
              </small>

              <strong>
                {
                  owners.reduce(
                    (total, owner) =>
                      total + owner.vehicles,
                    0
                  )
                }
              </strong>

            </div>

          </div>

        </section>



        {/* =================================================
            SEARCH
        ================================================= */}

        <section className="admin-owners-toolbar">


          <div className="owner-search">

            <Search size={18} />

            <input
              type="text"
              placeholder="Search owner, email, phone or owner ID..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>


          <div className="owner-filter">

            <Filter size={16} />

            <select
              value={filter}
              onChange={(e) =>
                setFilter(e.target.value)
              }
            >

              <option value="All">
                All Owners
              </option>

              <option value="Active">
                Active
              </option>

              <option value="Inactive">
                Inactive
              </option>

            </select>

            <ChevronDown
              size={15}
              className="owner-filter-arrow"
            />

          </div>

        </section>



        {/* =================================================
            OWNER LIST
        ================================================= */}

        <section className="admin-owners-panel">


          <div className="admin-owners-panel-header">

            <div>

              <p>
                REGISTERED OWNERS
              </p>

              <h2>
                Owner directory
              </h2>

            </div>

            <span>
              Showing {filteredOwners.length} results
            </span>

          </div>



          <div className="admin-owner-list">


            {filteredOwners.map(
              (owner, index) => (

                <article
                  className="admin-owner-card"
                  key={owner.id}
                  style={{
                    "--owner-delay":
                      `${index * 0.07}s`,
                  }}
                >


                  {/* AVATAR */}

                  <div className="admin-owner-avatar">

                    {owner.name
                      .split(" ")
                      .map(
                        (name) =>
                          name[0]
                      )
                      .slice(0, 2)
                      .join("")}

                  </div>



                  {/* OWNER */}

                  <div className="admin-owner-main">

                    <span className="admin-owner-id">
                      {owner.id}
                    </span>

                    <h3>
                      {owner.name}
                    </h3>

                    <div className="admin-owner-contact">

                      <Mail size={12} />

                      <span>
                        {owner.email}
                      </span>

                    </div>

                  </div>



                  {/* PHONE */}

                  <div className="admin-owner-phone">

                    <small>
                      CONTACT
                    </small>

                    <strong>
                      {owner.phone}
                    </strong>

                  </div>



                  {/* VEHICLES */}

                  <div className="admin-owner-vehicles">

                    <small>
                      VEHICLES
                    </small>

                    <strong>
                      {owner.vehicles}
                    </strong>

                    <span>
                      Registered
                    </span>

                  </div>



                  {/* JOINED */}

                  <div className="admin-owner-joined">

                    <small>
                      JOINED
                    </small>

                    <strong>
                      {owner.joined}
                    </strong>

                  </div>



                  {/* STATUS */}

                  <div className="admin-owner-status">

                    <span
                      className={`owner-status-badge ${
                        owner.status.toLowerCase()
                      }`}
                    >

                      {owner.status}

                    </span>

                  </div>



                  {/* ACTION */}

                  <div className="admin-owner-action">

                    <button
                      onClick={() =>
                        setSelectedOwner(owner)
                      }
                    >

                      <Eye size={15} />

                      VIEW

                    </button>

                  </div>

                </article>

              )
            )}



            {filteredOwners.length === 0 && (

              <div className="admin-owner-empty">

                <User size={38} />

                <h3>
                  No owners found
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
          OWNER DETAILS MODAL
      ================================================= */}

      {selectedOwner && (

        <div
          className="owner-modal-overlay"
          onClick={() =>
            setSelectedOwner(null)
          }
        >

          <div
            className="owner-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >


            {/* HEADER */}

            <div className="owner-modal-header">

              <div>

                <span>
                  {selectedOwner.id}
                </span>

                <h2>
                  Owner Details
                </h2>

              </div>


              <button
                onClick={() =>
                  setSelectedOwner(null)
                }
              >

                <X size={19} />

              </button>

            </div>



            {/* BODY */}

            <div className="owner-modal-body">


              {/* PROFILE */}

              <div className="owner-profile">

                <div className="owner-profile-avatar">

                  {selectedOwner.name
                    .split(" ")
                    .map(
                      (name) =>
                        name[0]
                    )
                    .slice(0, 2)
                    .join("")}

                </div>

                <div>

                  <h3>
                    {selectedOwner.name}
                  </h3>

                  <span>
                    BMW Owner
                  </span>

                </div>

              </div>



              {/* DETAILS */}

              <div className="owner-details-grid">


                <div className="owner-detail">

                  <Mail size={17} />

                  <div>

                    <small>
                      EMAIL
                    </small>

                    <strong>
                      {selectedOwner.email}
                    </strong>

                  </div>

                </div>


                <div className="owner-detail">

                  <Phone size={17} />

                  <div>

                    <small>
                      PHONE
                    </small>

                    <strong>
                      {selectedOwner.phone}
                    </strong>

                  </div>

                </div>


                <div className="owner-detail">

                  <Car size={17} />

                  <div>

                    <small>
                      VEHICLES
                    </small>

                    <strong>
                      {selectedOwner.vehicles}
                    </strong>

                  </div>

                </div>


                <div className="owner-detail">

                  <CalendarDays size={17} />

                  <div>

                    <small>
                      MEMBER SINCE
                    </small>

                    <strong>
                      {selectedOwner.joined}
                    </strong>

                  </div>

                </div>


                <div className="owner-detail">

                  <ShieldCheck size={17} />

                  <div>

                    <small>
                      ACCOUNT STATUS
                    </small>

                    <strong>
                      {selectedOwner.status}
                    </strong>

                  </div>

                </div>

              </div>



              {/* ACTIONS */}

              <div className="owner-update">

                <p>
                  ACCOUNT ACTIONS
                </p>


                <div className="owner-update-buttons">

                  <button
                    className="owner-activate"
                    onClick={() =>
                      updateStatus(
                        selectedOwner.id,
                        "Active"
                      )
                    }
                  >

                    <CheckCircle2 size={15} />

                    ACTIVATE

                  </button>


                  <button
                    className="owner-deactivate"
                    onClick={() =>
                      updateStatus(
                        selectedOwner.id,
                        "Inactive"
                      )
                    }
                  >

                    <XCircle size={15} />

                    DEACTIVATE

                  </button>

                </div>

              </div>



              {/* DELETE */}

              <button
                className="owner-delete"
                onClick={() =>
                  deleteOwner(
                    selectedOwner.id
                  )
                }
              >

                <Trash2 size={15} />

                DELETE OWNER

              </button>

            </div>

          </div>

        </div>

      )}

    </div>

  );
}


export default AdminOwners;