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

import TestDrive from "./pages/TestDrive/TestDrive";

import Models from "./pages/Models/Models";
import ModelDetails from "./pages/ModelDetails/ModelDetails";
import Login from "./pages/Login/Login";

import OwnerDashboard from "./pages/OwnerDashboard/OwnerDashboard";
import VehicleDetails from "./pages/VehicleDetails/VehicleDetails";
import ServiceRequest from "./pages/ServiceRequest/ServiceRequest";
import Appointments from "./pages/Appointments/Appointments";
import Documents from "./pages/Documents/Documents";

import ServiceTeamDashboard from "./pages/ServiceTeamDashboard/ServiceTeamDashboard";
import ServiceVehicles from "./pages/ServiceVehicles/ServiceVehicles";
import ServiceRecord from "./pages/ServiceRecord/ServiceRecord";

import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import AdminRequestDetails from "./pages/AdminRequestDetails/AdminRequestDetails";
import AdminAppointments from "./pages/AdminAppointments/AdminAppointments";
import AdminVehicles from "./pages/AdminVehicles/AdminVehicles";
import AdminServiceRequests from "./pages/AdminServiceRequests/AdminServiceRequests";
import AdminOwners from "./pages/AdminOwners/AdminOwners";
import AdminDocuments from "./pages/AdminDocuments/AdminDocuments";

import InnovationPage from "./pages/Innovation/InnovationPage";
import Discover from "./pages/Discover/Discover";


/* =========================================================
   SCROLL MANAGER
========================================================= */

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const hero = document.getElementById("home");

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

  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/owner-dashboard" ||
    location.pathname === "/service-team-dashboard" ||
    location.pathname === "/service-vehicles" ||
    location.pathname === "/service-requests" ||
    location.pathname === "/service-appointments" ||
    location.pathname === "/service-history" ||
    location.pathname === "/service-record" ||
    location.pathname === "/admin-dashboard";
    location.pathname ==="/admin-service-requests";

  return (
    <>
      {!hideNavbar && <Navbar />}

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

        <Route
          path="/models/:slug"
          element={<ModelDetails />}
        />


        {/* =================================================
            INNOVATION
        ================================================= */}

        <Route
          path="/innovation"
          element={<InnovationPage />}
        />


        {/* =================================================
            DISCOVER
        ================================================= */}

        <Route
          path="/discover"
          element={<Discover />}
        />


        {/* =================================================
            TEST DRIVE
        ================================================= */}

        <Route
          path="/test-drive"
          element={<TestDrive />}
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
            SERVICE TEAM DASHBOARD
        ================================================= */}

        <Route
          path="/service-team-dashboard"
          element={<ServiceTeamDashboard />}
        />


        {/* =================================================
            SERVICE TEAM VEHICLES
        ================================================= */}

        <Route
          path="/service-vehicles"
          element={<ServiceVehicles />}
        />


        {/* =================================================
            SERVICE RECORD
        ================================================= */}

        <Route
          path="/service-record"
          element={<ServiceRecord />}
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
            ADMIN OWNERS
        ================================================= */}

        <Route
          path="/admin-owners"
          element={<AdminOwners />}
        />


        {/* =================================================
            ADMIN DOCUMENTS
        ================================================= */}

        <Route
          path="/admin-documents"
          element={<AdminDocuments />}
        />


        {/* =================================================
            FALLBACK
        ================================================= */}

        <Route
          path="*"
          element={<HomePage />}
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