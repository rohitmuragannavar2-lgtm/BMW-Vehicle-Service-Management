import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Car,
  Search,
  UserRound,
  Wrench,
  CalendarDays,
} from "lucide-react";
import "./ServiceVehicles.css";

function ServiceVehicles() {
  const navigate = useNavigate();

  const [vehicles, setVehicles] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedVehicles =
      JSON.parse(localStorage.getItem("vehicles")) || [];

    setVehicles(savedVehicles);
  }, []);

  const filteredVehicles = vehicles.filter((vehicle) => {
    const text = search.toLowerCase();

    return (
      vehicle.registration?.toLowerCase().includes(text) ||
      vehicle.owner?.toLowerCase().includes(text) ||
      vehicle.model?.toLowerCase().includes(text)
    );
  });

  return (
    <div className="service-vehicles-page">

      {/* HEADER */}

      <header className="vehicles-header">

        <button
          className="vehicles-back"
          onClick={() => navigate("/service-dashboard")}
        >
          <ArrowLeft size={18} />
          BACK TO DASHBOARD
        </button>

        <div>
          <span>AUTOSPHERE SERVICE OPERATIONS</span>
          <h1>Vehicles</h1>
          <p>Manage customer vehicles and service information.</p>
        </div>

      </header>


      {/* MAIN */}

      <main className="vehicles-main">

        {/* SEARCH */}

        <div className="vehicles-toolbar">

          <div className="vehicles-search">
            <Search size={19} />

            <input
              type="text"
              placeholder="Search registration, owner or model..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="vehicle-count">
            {filteredVehicles.length} Vehicles
          </div>

        </div>


        {/* VEHICLES */}

        <section className="vehicles-card">

          <div className="vehicles-card-header">

            <div>
              <small>VEHICLE MANAGEMENT</small>
              <h2>Customer Vehicles</h2>
            </div>

            <Car size={24} />

          </div>


          {filteredVehicles.length === 0 ? (

            <div className="empty-vehicles">

              <Car size={45} />

              <h3>No Vehicles Found</h3>

              <p>
                Customer vehicles will appear here once they are
                registered in the system.
              </p>

            </div>

          ) : (

            <div className="vehicle-list">

              {filteredVehicles.map((vehicle, index) => (

                <div
                  className="vehicle-row"
                  key={vehicle.id || index}
                >

                  {/* VEHICLE */}

                  <div className="vehicle-info">

                    <div className="vehicle-icon">
                      <Car size={21} />
                    </div>

                    <div>
                      <strong>
                        {vehicle.model || "Vehicle"}
                      </strong>

                      <span>
                        {vehicle.registration || "No Registration"}
                      </span>
                    </div>

                  </div>


                  {/* OWNER */}

                  <div className="vehicle-detail">

                    <UserRound size={16} />

                    <div>
                      <small>OWNER</small>
                      <strong>
                        {vehicle.owner || "Not Available"}
                      </strong>
                    </div>

                  </div>


                  {/* SERVICE */}

                  <div className="vehicle-detail">

                    <Wrench size={16} />

                    <div>
                      <small>STATUS</small>

                      <strong
                        className={
                          vehicle.status === "In Service"
                            ? "status-blue"
                            : vehicle.status === "Completed"
                            ? "status-green"
                            : "status-grey"
                        }
                      >
                        {vehicle.status || "Active"}
                      </strong>

                    </div>

                  </div>


                  {/* LAST SERVICE */}

                  <div className="vehicle-detail">

                    <CalendarDays size={16} />

                    <div>
                      <small>LAST SERVICE</small>

                      <strong>
                        {vehicle.lastService || "No Record"}
                      </strong>

                    </div>

                  </div>


                  {/* BUTTON */}

                  <button
                    className="vehicle-view"
                    onClick={() =>
                      navigate(
                        `/service-vehicle/${vehicle.id}`
                      )
                    }
                  >
                    VIEW
                  </button>

                </div>

              ))}

            </div>

          )}

        </section>

      </main>

    </div>
  );
}

export default ServiceVehicles;