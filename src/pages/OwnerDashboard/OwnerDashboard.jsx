import { useNavigate } from "react-router-dom";

import {
  Car,
  CalendarDays,
  FileText,
  Bell,
  LogOut,
  User,
  ShieldCheck,
  Zap,
  Gauge,
  Settings2,
  ChevronRight,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import "./OwnerDashboard.css";

function OwnerDashboard() {
  const navigate = useNavigate();

  const owner = {
    name: "Rohit Muragannavar",
    phone: "+91 XXXXX XXXXX",

    vehicle: {
      model: "BMW i5 eDrive40",
      registration: "KA-25-MH-4827",
      vin: "WBY21FJ08PCT47291",
      purchaseDate: "15 March 2025",
      colour: "Red",
      fuel: "Electric (EV)",
      transmission: "Single-Speed Automatic",
      mileage: "18,450 km",
      nextService: "15 September 2026",
      serviceStatus: "Service Up to Date",
      serviceHistory: "3 Services Completed",
      appointment: "Confirmed — 15 September 2026, 10:30 AM",
    },
  };


  /* =====================================================
     NAVIGATION FUNCTIONS
  ===================================================== */

  const handleLogout = () => {
    navigate("/login");
  };


  const handleServiceRequest = () => {
    navigate("/service-request");
  };


  const handleAppointments = () => {
    navigate("/appointments");
  };


  const handleDocuments = () => {
    navigate("/documents");
  };


  const handleVehicleDetails = () => {
    navigate("/vehicle-details");
  };


  return (
    <div className="owner-dashboard">


      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside className="owner-sidebar">


        {/* BMW LOGO */}

        <div className="owner-logo-area">

          <img
            src="/BMW_India-Logo.wine.png"
            alt="BMW"
          />

          <div>
            <h2>BMW</h2>
            <span>OWNER PORTAL</span>
          </div>

        </div>


        {/* =====================================================
            SIDEBAR MENU
        ===================================================== */}
<nav className="owner-menu">

  {/* MY VEHICLE */}

  <button
    type="button"
    className="owner-menu-item active"
    onClick={() => navigate("/vehicle-details")}
  >
    <Car size={19} />
    <span>My Vehicle</span>
  </button>


  {/* SERVICE */}

  <button
    type="button"
    className="owner-menu-item"
    onClick={() => navigate("/service-request")}
  >
    <Settings2 size={19} />
    <span>Service</span>
  </button>


  {/* APPOINTMENTS */}

  <button
    type="button"
    className="owner-menu-item"
    onClick={() => navigate("/appointments")}
  >
    <CalendarDays size={19} />
    <span>Appointments</span>
  </button>


  {/* DOCUMENTS */}

  <button
    type="button"
    className="owner-menu-item"
    onClick={() => navigate("/documents")}
  >
    <FileText size={19} />
    <span>Documents</span>
  </button>

</nav>


        {/* =====================================================
            LOGOUT
        ===================================================== */}

        <button
          type="button"
          className="owner-logout"
          onClick={handleLogout}
        >
          <LogOut size={18} />

          <span>
            LOGOUT
          </span>
        </button>


      </aside>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="owner-main">


        {/* =====================================================
            TOPBAR
        ===================================================== */}

        <header className="owner-header">


          <div>

            <p className="owner-header-label">
              OWNER DASHBOARD
            </p>

            <h1>
              Welcome, {owner.name.split(" ")[0]}
            </h1>

          </div>


          <div className="owner-header-right">


            {/* NOTIFICATION */}

            <button
              type="button"
              className="owner-bell"
              onClick={handleAppointments}
              aria-label="View notifications"
            >

              <Bell size={19} />

              <span></span>

            </button>


            {/* USER */}

            <div className="owner-user">

              <div className="owner-user-icon">
                <User size={18} />
              </div>

              <div>

                <strong>
                  {owner.name}
                </strong>

                <small>
                  Vehicle Owner
                </small>

              </div>

            </div>


          </div>

        </header>


        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div className="owner-content">


          {/* =====================================================
              VEHICLE HERO CARD
          ===================================================== */}

          <section className="vehicle-hero-card">


            <div className="vehicle-hero-content">


              <p className="vehicle-overline">
                YOUR BMW
              </p>


              <h2>
                {owner.vehicle.model}
              </h2>


              <p className="vehicle-model-type">
                ELECTRIC PERFORMANCE
              </p>


              {/* REGISTRATION */}

              <div className="vehicle-registration">

                <span>
                  REGISTRATION
                </span>

                <strong>
                  {owner.vehicle.registration}
                </strong>

              </div>


              {/* VEHICLE DETAILS BUTTON */}

              <button
                type="button"
                className="vehicle-details-button"
                onClick={handleVehicleDetails}
              >

                VIEW VEHICLE DETAILS

                <ChevronRight size={17} />

              </button>


            </div>


            {/* CAR IMAGE */}

            <div className="vehicle-hero-image">

              <img
                src="/i5.webp"
                alt="BMW i5"
              />

            </div>


          </section>


          {/* =====================================================
              VEHICLE INFORMATION
          ===================================================== */}

          <section className="dashboard-section">


            <div className="section-heading">

              <div>

                <p>
                  VEHICLE INFORMATION
                </p>

                <h2>
                  Your BMW at a glance
                </h2>

              </div>

            </div>


            <div className="vehicle-info-grid">


              {/* VIN */}

              <article className="vehicle-info-card">

                <div className="info-icon">
                  <ShieldCheck size={20} />
                </div>

                <div>

                  <span>
                    VIN
                  </span>

                  <strong>
                    {owner.vehicle.vin}
                  </strong>

                </div>

              </article>


              {/* PURCHASE DATE */}

              <article className="vehicle-info-card">

                <div className="info-icon">
                  <CalendarDays size={20} />
                </div>

                <div>

                  <span>
                    PURCHASE DATE
                  </span>

                  <strong>
                    {owner.vehicle.purchaseDate}
                  </strong>

                </div>

              </article>


              {/* COLOUR */}

              <article className="vehicle-info-card">

                <div className="info-icon colour-icon">
                  <span></span>
                </div>

                <div>

                  <span>
                    EXTERIOR COLOUR
                  </span>

                  <strong>
                    {owner.vehicle.colour}
                  </strong>

                </div>

              </article>


              {/* FUEL */}

              <article className="vehicle-info-card">

                <div className="info-icon">
                  <Zap size={20} />
                </div>

                <div>

                  <span>
                    POWERTRAIN
                  </span>

                  <strong>
                    {owner.vehicle.fuel}
                  </strong>

                </div>

              </article>


              {/* TRANSMISSION */}

              <article className="vehicle-info-card">

                <div className="info-icon">
                  <Settings2 size={20} />
                </div>

                <div>

                  <span>
                    TRANSMISSION
                  </span>

                  <strong>
                    {owner.vehicle.transmission}
                  </strong>

                </div>

              </article>


              {/* MILEAGE */}

              <article className="vehicle-info-card">

                <div className="info-icon">
                  <Gauge size={20} />
                </div>

                <div>

                  <span>
                    CURRENT MILEAGE
                  </span>

                  <strong>
                    {owner.vehicle.mileage}
                  </strong>

                </div>

              </article>


            </div>

          </section>


          {/* =====================================================
              SERVICE OVERVIEW
          ===================================================== */}

          <section className="service-overview">


            <div className="service-main-card">


              <div className="service-card-top">


                <div>

                  <p className="service-label">
                    VEHICLE CARE
                  </p>

                  <h2>
                    Service Overview
                  </h2>

                </div>


                {/* STATUS */}

                <div className="service-status-badge">

                  <CheckCircle2 size={15} />

                  {owner.vehicle.serviceStatus}

                </div>


              </div>


              {/* SERVICE DETAILS */}

              <div className="service-details-row">


                {/* NEXT SERVICE */}

                <div className="service-detail">

                  <CalendarDays size={20} />

                  <div>

                    <span>
                      NEXT SERVICE
                    </span>

                    <strong>
                      {owner.vehicle.nextService}
                    </strong>

                  </div>

                </div>


                {/* SERVICE HISTORY */}

                <div className="service-detail">

                  <Settings2 size={20} />

                  <div>

                    <span>
                      SERVICE HISTORY
                    </span>

                    <strong>
                      {owner.vehicle.serviceHistory}
                    </strong>

                  </div>

                </div>


                {/* APPOINTMENT */}

                <div className="service-detail">

                  <Clock3 size={20} />

                  <div>

                    <span>
                      APPOINTMENT
                    </span>

                    <strong>
                      Confirmed
                    </strong>

                  </div>

                </div>


              </div>


              {/* REQUEST SERVICE */}

              <button
                type="button"
                className="service-request-btn"
                onClick={handleServiceRequest}
              >

                REQUEST SERVICE

                <ChevronRight size={18} />

              </button>


            </div>

          </section>


          {/* =====================================================
              APPOINTMENT
          ===================================================== */}

          <section
            className="appointment-card"
            onClick={handleAppointments}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleAppointments();
              }
            }}
          >


            <div className="appointment-icon">
              <CalendarDays size={23} />
            </div>


            <div className="appointment-content">

              <p>
                UPCOMING APPOINTMENT
              </p>

              <h3>
                Service Appointment
              </h3>

              <span>
                {owner.vehicle.appointment}
              </span>

            </div>


            <div className="appointment-status">
              CONFIRMED
            </div>


            <ChevronRight
              className="appointment-arrow"
              size={20}
            />

          </section>


          {/* =====================================================
              DOCUMENTS
          ===================================================== */}

          <section className="documents-card">


            {/* DOCUMENT HEADER */}

            <div className="documents-header">


              <div>

                <p>
                  DOCUMENTS
                </p>

                <h2>
                  Your vehicle records
                </h2>

              </div>


              {/* VIEW ALL */}

              <button
                type="button"
                onClick={handleDocuments}
              >

                VIEW ALL

                <ChevronRight size={16} />

              </button>


            </div>


            {/* DOCUMENT GRID */}

            <div className="documents-grid">


              {/* RC */}

              <button
                type="button"
                className="document-item"
                onClick={handleDocuments}
              >

                <FileText size={20} />

                <div>

                  <strong>
                    RC Certificate
                  </strong>

                  <span>
                    Vehicle registration
                  </span>

                </div>

                <ChevronRight size={16} />

              </button>


              {/* INSURANCE */}

              <button
                type="button"
                className="document-item"
                onClick={handleDocuments}
              >

                <FileText size={20} />

                <div>

                  <strong>
                    Insurance
                  </strong>

                  <span>
                    Insurance document
                  </span>

                </div>

                <ChevronRight size={16} />

              </button>


              {/* WARRANTY */}

              <button
                type="button"
                className="document-item"
                onClick={handleDocuments}
              >

                <FileText size={20} />

                <div>

                  <strong>
                    Warranty Certificate
                  </strong>

                  <span>
                    Vehicle warranty
                  </span>

                </div>

                <ChevronRight size={16} />

              </button>


              {/* SERVICE RECORDS */}

              <button
                type="button"
                className="document-item"
                onClick={handleDocuments}
              >

                <FileText size={20} />

                <div>

                  <strong>
                    Service Records
                  </strong>

                  <span>
                    Completed services
                  </span>

                </div>

                <ChevronRight size={16} />

              </button>


            </div>


          </section>


        </div>

      </main>

    </div>
  );
}

export default OwnerDashboard;