import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Intro from "./components/Intro/Intro";
import Hero from "./components/Hero/Hero";
import Performance from "./components/Performance/Performance";
import Innovation from "./components/Innovation/Innovation";
import Experience from "./components/Experience/Experience";
import FinalCTA from "./components/FinalCTA/FinalCTA";

import Models from "./pages/Models/Models";
import ModelDetails from "./pages/ModelDetails/ModelDetails";
import Login from "./pages/Login/Login";

import OwnerDashboard from "./pages/OwnerDashboard/OwnerDashboard";
import VehicleDetails from "./pages/VehicleDetails/VehicleDetails";
import ServiceRequest from "./pages/ServiceRequest/ServiceRequest";
import Appointments from "./pages/Appointments/Appointments";
import Documents from "./pages/Documents/Documents";

import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import AdminRequestDetails from "./pages/AdminRequestDetails/AdminRequestDetails";
import AdminAppointments from "./pages/AdminAppointments/AdminAppointments";
import AdminVehicles from "./pages/AdminVehicles/AdminVehicles";
import AdminServiceRequests from "./pages/AdminServiceRequests/AdminServiceRequests";
import AdminOwners from "./pages/AdminOwners/AdminOwners";
import AdminDocuments from "./pages/AdminDocuments/AdminDocuments";
/* =========================================================
   SCROLL MANAGER
========================================================= */

function ScrollManager() {

  const location = useLocation();

  useEffect(() => {

    if (location.pathname === "/") {

      const hero =
        document.getElementById("home");

      if (hero) {

        hero.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

      } else {

        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });

      }

    } else {

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

    }

  }, [location.pathname]);

  return null;
}


/* =========================================================
   HOME PAGE
========================================================= */

function HomePage() {

  return (
    <>
      <Intro />

      <Hero />

      <Performance />

      <Innovation />

      <Experience />

      <FinalCTA />
    </>
  );

}


/* =========================================================
   APP CONTENT
========================================================= */

function AppContent() {

  const location = useLocation();


  /*
    Hide the normal BMW Navbar
    on login, owner and admin pages.
  */

  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/owner-dashboard" ||
    location.pathname === "/vehicle-details" ||
    location.pathname === "/service-request" ||
    location.pathname === "/appointments" ||
    location.pathname === "/documents" ||
    location.pathname.startsWith("/admin-");


  return (
    <>

      {/* =====================================================
          NORMAL BMW NAVBAR
      ===================================================== */}

      {!hideNavbar && <Navbar />}


      {/* =====================================================
          ROUTES
      ===================================================== */}

      <Routes>


        {/* =================================================
            HOME
        ================================================= */}

        <Route
          path="/"
          element={<HomePage />}
        />


        {/* =================================================
            MODELS
        ================================================= */}

        <Route
          path="/models"
          element={<Models />}
        />


        {/* =================================================
            MODEL DETAILS
        ================================================= */}

        <Route
          path="/models/:slug"
          element={<ModelDetails />}
        />


        {/* =================================================
            LOGIN
        ================================================= */}

        <Route
          path="/login"
          element={<Login />}
        />


        {/* =================================================
            OWNER DASHBOARD
        ================================================= */}

        <Route
          path="/owner-dashboard"
          element={<OwnerDashboard />}
        />


        {/* =================================================
            VEHICLE DETAILS
        ================================================= */}

        <Route
          path="/vehicle-details"
          element={<VehicleDetails />}
        />


        {/* =================================================
            SERVICE REQUEST
        ================================================= */}

        <Route
          path="/service-request"
          element={<ServiceRequest />}
        />


        {/* =================================================
            APPOINTMENTS
        ================================================= */}

        <Route
          path="/appointments"
          element={<Appointments />}
        />


        {/* =================================================
            DOCUMENTS
        ================================================= */}

        <Route
          path="/documents"
          element={<Documents />}
        />


        {/* =================================================
            ADMIN DASHBOARD
        ================================================= */}

        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />


        {/* =================================================
            ADMIN REQUEST DETAILS
        ================================================= */}

        <Route
          path="/admin-request/:id"
          element={<AdminRequestDetails />}
        />


        {/* =================================================
            ADMIN APPOINTMENTS
        ================================================= */}

        <Route
          path="/admin-appointments"
          element={<AdminAppointments />}
        />


        {/* =================================================
            ADMIN VEHICLES
        ================================================= */}

        <Route
          path="/admin-vehicles"
          element={<AdminVehicles />}
        />


        {/* =================================================
            ADMIN SERVICE REQUESTS
        ================================================= */}

        <Route
          path="/admin-service-requests"
          element={<AdminServiceRequests />}
        />


        {/* =================================================
            FALLBACK
        ================================================= */}

        <Route
          path="*"
          element={<HomePage />}
        />
        <Route
  path="/admin-owners"
  element={<AdminOwners />}
/>
          <Route
  path="/admin-documents"
  element={<AdminDocuments />}
/>
      </Routes>

    </>
  );
}


/* =========================================================
   MAIN APP
========================================================= */

function App() {

  return (
    <BrowserRouter>

      <ScrollManager />

      <AppContent />

    </BrowserRouter>
  );

}


export default App;