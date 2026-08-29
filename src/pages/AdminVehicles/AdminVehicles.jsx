import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  Search,
  Car,
  User,
  Gauge,
  CalendarDays,
  Wrench,
  FileText,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import "./AdminVehicles.css";


function AdminVehicles() {

  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");


  // =========================================================
  // VEHICLE DATA
  // =========================================================

  const vehicles = [

    {
      id: "VEH-001",
      owner: "Rohit Muragannavar",
      model: "BMW i5 eDrive40",
      registration: "KA-25-MH-4827",
      vin: "WBY31AW08RFM48271",
      color: "Alpine White",
      fuel: "Electric",
      transmission: "Automatic",
      mileage: "18,450 km",
      nextService: "15 September 2026",
      serviceStatus: "Service Due",
      vehicleStatus: "Active",
    },

    {
      id: "VEH-002",
      owner: "Arjun Sharma",
      model: "BMW X3",
      registration: "KA-03-EF-4921",
      vin: "WBAXX3103NEM49214",
      color: "Phytonic Blue",
      fuel: "Petrol",
      transmission: "Automatic",
      mileage: "24,820 km",
      nextService: "21 October 2026",
      serviceStatus: "Scheduled",
      vehicleStatus: "Active",
    },

    {
      id: "VEH-003",
      owner: "Rahul Patil",
      model: "BMW X5",
      registration: "KA-19-CD-7312",
      vin: "WBAXX5107MCD73125",
      color: "Black Sapphire",
      fuel: "Diesel",
      transmission: "Automatic",
      mileage: "31,260 km",
      nextService: "05 November 2026",
      serviceStatus: "In Service",
      vehicleStatus: "Service",
    },

    {
      id: "VEH-004",
      owner: "Amit Kulkarni",
      model: "BMW 3 Series",
      registration: "KA-05-AB-9218",
      vin: "WBA3A5C55PAB92183",
      color: "Mineral Grey",
      fuel: "Petrol",
      transmission: "Automatic",
      mileage: "16,730 km",
      nextService: "12 December 2026",
      serviceStatus: "Up to Date",
      vehicleStatus: "Active",
    },

    {
      id: "VEH-005",
      owner: "Vikram Desai",
      model: "BMW iX",
      registration: "KA-41-XY-6712",
      vin: "WBY73CF09SXY67124",
      color: "Sophisto Grey",
      fuel: "Electric",
      transmission: "Automatic",
      mileage: "12,580 km",
      nextService: "18 January 2027",
      serviceStatus: "Up to Date",
      vehicleStatus: "Active",
    },

    {
      id: "VEH-006",
      owner: "Karan Joshi",
      model: "BMW M4",
      registration: "KA-01-MN-5526",
      vin: "WBS43AZ07PMN55261",
      color: "M Brooklyn Grey",
      fuel: "Petrol",
      transmission: "Automatic",
      mileage: "9,840 km",
      nextService: "27 September 2026",
      serviceStatus: "Scheduled",
      vehicleStatus: "Active",
    },

  ];


  // =========================================================
  // SEARCH
  // =========================================================

  const filteredVehicles = useMemo(() => {

    const search =
      searchTerm.trim().toLowerCase();

    if (!search) {
      return vehicles;
    }

    return vehicles.filter((vehicle) => {

      return (
        vehicle.owner
          .toLowerCase()
          .includes(search) ||

        vehicle.model
          .toLowerCase()
          .includes(search) ||

        vehicle.registration
          .toLowerCase()
          .includes(search) ||

        vehicle.vin
          .toLowerCase()
          .includes(search) ||

        vehicle.color
          .toLowerCase()
          .includes(search) ||

        vehicle.serviceStatus
          .toLowerCase()
          .includes(search)
      );

    });

  }, [searchTerm]);


  // =========================================================
  // COUNTS
  // =========================================================

  const activeVehicles =
    vehicles.filter(
      (vehicle) =>
        vehicle.vehicleStatus === "Active"
    ).length;


  const serviceVehicles =
    vehicles.filter(
      (vehicle) =>
        vehicle.vehicleStatus === "Service"
    ).length;


  const electricVehicles =
    vehicles.filter(
      (vehicle) =>
        vehicle.fuel === "Electric"
    ).length;


  const serviceDue =
    vehicles.filter(
      (vehicle) =>
        vehicle.serviceStatus === "Service Due"
    ).length;


  // =========================================================
  // VIEW VEHICLE
  // =========================================================

  const viewVehicle = (vehicle) => {

    alert(
      `VEHICLE DETAILS\n\n` +
      `Owner: ${vehicle.owner}\n` +
      `Model: ${vehicle.model}\n` +
      `Registration: ${vehicle.registration}\n` +
      `VIN: ${vehicle.vin}\n` +
      `Colour: ${vehicle.color}\n` +
      `Fuel: ${vehicle.fuel}\n` +
      `Transmission: ${vehicle.transmission}\n` +
      `Mileage: ${vehicle.mileage}\n` +
      `Next Service: ${vehicle.nextService}`
    );

  };


  return (

    <div className="admin-vehicles-page">


      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="admin-vehicles-header">

        <button
          type="button"
          className="admin-vehicles-back"
          onClick={() =>
            navigate("/admin-dashboard")
          }
        >

          <ArrowLeft size={18} />

          <span>
            BACK TO ADMIN DASHBOARD
          </span>

        </button>


        <div className="admin-vehicles-title">

          <span>
            BMW ADMIN PORTAL
          </span>

          <h1>
            Vehicles
          </h1>

        </div>

      </header>



      {/* =====================================================
          CONTENT
      ===================================================== */}

      <main className="admin-vehicles-content">


        {/* INTRO */}

        <section className="admin-vehicles-intro">

          <p>
            VEHICLE MANAGEMENT
          </p>

          <h2>
            Registered Vehicles
          </h2>

          <span>
            Manage BMW vehicles, owners, service status
            and maintenance information.
          </span>

        </section>



        {/* =================================================
            STATISTICS
        ================================================= */}

        <section className="admin-vehicle-stats">


          <div className="admin-vehicle-stat">

            <div className="vehicle-stat-icon blue">
              <Car size={21} />
            </div>

            <div>

              <small>
                TOTAL VEHICLES
              </small>

              <strong>
                {vehicles.length}
              </strong>

              <span>
                Registered
              </span>

            </div>

          </div>



          <div className="admin-vehicle-stat">

            <div className="vehicle-stat-icon green">
              <CheckCircle2 size={21} />
            </div>

            <div>

              <small>
                ACTIVE
              </small>

              <strong>
                {activeVehicles}
              </strong>

              <span>
                On road
              </span>

            </div>

          </div>



          <div className="admin-vehicle-stat">

            <div className="vehicle-stat-icon orange">
              <Wrench size={21} />
            </div>

            <div>

              <small>
                IN SERVICE
              </small>

              <strong>
                {serviceVehicles}
              </strong>

              <span>
                Currently serviced
              </span>

            </div>

          </div>



          <div className="admin-vehicle-stat">

            <div className="vehicle-stat-icon purple">
              <Car size={21} />
            </div>

            <div>

              <small>
                ELECTRIC
              </small>

              <strong>
                {electricVehicles}
              </strong>

              <span>
                EV vehicles
              </span>

            </div>

          </div>

        </section>



        {/* =================================================
            SERVICE ALERT
        ================================================= */}

        {serviceDue > 0 && (

          <section className="admin-vehicle-alert">

            <div className="vehicle-alert-icon">

              <AlertCircle size={20} />

            </div>

            <div>

              <strong>
                {serviceDue} vehicle
                {serviceDue > 1 ? "s" : ""} require
                service attention
              </strong>

              <span>
                Review vehicles marked as service due.
              </span>

            </div>

          </section>

        )}



        {/* =================================================
            SEARCH
        ================================================= */}

        <div className="admin-vehicles-search">

          <Search size={18} />

          <input
            type="text"
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(
                event.target.value
              )
            }
            placeholder="Search owner, model, registration, VIN or service status..."
          />

        </div>



        {/* =================================================
            VEHICLE LIST
        ================================================= */}

        <section className="admin-vehicle-list-section">


          <div className="admin-vehicle-section-heading">

            <div>

              <p>
                VEHICLE DATABASE
              </p>

              <h2>
                All Registered Vehicles
              </h2>

            </div>

            <span>
              {filteredVehicles.length} vehicles
            </span>

          </div>



          <div className="admin-vehicle-list">


            {filteredVehicles.length === 0 ? (

              <div className="admin-vehicles-empty">

                <Car size={40} />

                <h3>
                  No vehicles found
                </h3>

                <p>
                  Try changing your search.
                </p>

              </div>

            ) : (

              filteredVehicles.map(
                (vehicle) => (

                  <article
                    className="admin-vehicle-card"
                    key={vehicle.id}
                  >


                    {/* VEHICLE */}

                    <div className="admin-vehicle-main">

                      <div className="admin-vehicle-image">

                        <Car size={27} />

                      </div>

                      <div>

                        <small>
                          {vehicle.id}
                        </small>

                        <h3>
                          {vehicle.model}
                        </h3>

                        <span>
                          {vehicle.registration}
                        </span>

                      </div>

                    </div>



                    {/* OWNER */}

                    <div className="admin-vehicle-owner">

                      <div className="vehicle-info-icon">

                        <User size={16} />

                      </div>

                      <div>

                        <small>
                          OWNER
                        </small>

                        <strong>
                          {vehicle.owner}
                        </strong>

                      </div>

                    </div>



                    {/* MILEAGE */}

                    <div className="admin-vehicle-info">

                      <Gauge size={17} />

                      <div>

                        <small>
                          MILEAGE
                        </small>

                        <strong>
                          {vehicle.mileage}
                        </strong>

                      </div>

                    </div>



                    {/* SERVICE */}

                    <div className="admin-vehicle-service">

                      <div className="vehicle-service-heading">

                        <Wrench size={16} />

                        <small>
                          SERVICE STATUS
                        </small>

                      </div>

                      <strong>
                        {vehicle.serviceStatus}
                      </strong>

                      <span>
                        Next: {vehicle.nextService}
                      </span>

                    </div>



                    {/* STATUS + VIEW */}

                    <div className="admin-vehicle-actions">

                      <span
                        className={`vehicle-status ${
                          vehicle.vehicleStatus
                            .toLowerCase()
                        }`}
                      >

                        {vehicle.vehicleStatus}

                      </span>


                      <button
                        type="button"
                        onClick={() =>
                          viewVehicle(vehicle)
                        }
                      >

                        VIEW

                        <ChevronRight size={15} />

                      </button>

                    </div>

                  </article>

                )
              )

            )}

          </div>

        </section>



        {/* =================================================
            VEHICLE INFORMATION
        ================================================= */}

        <section className="admin-vehicle-information">

          <div>

            <p>
              VEHICLE RECORDS
            </p>

            <h2>
              Complete vehicle information
            </h2>

            <span>
              Registration, VIN, ownership, mileage
              and service information are currently
              available for administration.
            </span>

          </div>


          <div className="admin-vehicle-information-icon">

            <FileText size={27} />

          </div>

        </section>



        {/* =================================================
            BACK
        ================================================= */}

        <button
          type="button"
          className="admin-vehicles-bottom-back"
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


export default AdminVehicles;