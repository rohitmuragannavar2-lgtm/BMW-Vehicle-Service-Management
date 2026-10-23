import React, { useMemo, useState } from "react";
import {
  ArrowLeft,
  Car,
  UserRound,
  CalendarDays,
  Wrench,
  Plus,
  Trash2,
  ReceiptText,
  CreditCard,
  Save,
  FileText,
  ChevronDown,
} from "lucide-react";
import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import { vehicles } from "../../data/vehicles";
import "./ServiceRecord.css";

/* =========================================================
   BMW SERVICE PARTS
========================================================= */

const AVAILABLE_PARTS = [
  // ENGINE
  {
    id: 1,
    name: "BMW TwinPower Turbo Engine Oil",
    price: 12500,
    category: "Engine",
  },
  {
    id: 2,
    name: "BMW Oil Filter",
    price: 1850,
    category: "Engine",
  },
  {
    id: 3,
    name: "BMW Air Filter",
    price: 3200,
    category: "Engine",
  },
  {
    id: 4,
    name: "BMW Fuel Filter",
    price: 4200,
    category: "Engine",
  },
  {
    id: 5,
    name: "BMW Spark Plug",
    price: 2100,
    category: "Engine",
  },
  {
    id: 6,
    name: "BMW Spark Plug Set",
    price: 8400,
    category: "Engine",
  },
  {
    id: 7,
    name: "BMW Drive Belt",
    price: 4500,
    category: "Engine",
  },

  // COOLING
  {
    id: 8,
    name: "BMW Engine Coolant",
    price: 1850,
    category: "Cooling",
  },
  {
    id: 9,
    name: "BMW Coolant Expansion Tank",
    price: 7800,
    category: "Cooling",
  },

  // BRAKES
  {
    id: 10,
    name: "BMW Front Brake Pad Set",
    price: 18500,
    category: "Brakes",
  },
  {
    id: 11,
    name: "BMW Rear Brake Pad Set",
    price: 14500,
    category: "Brakes",
  },
  {
    id: 12,
    name: "BMW Front Brake Disc",
    price: 24500,
    category: "Brakes",
  },
  {
    id: 13,
    name: "BMW Rear Brake Disc",
    price: 18500,
    category: "Brakes",
  },
  {
    id: 14,
    name: "BMW Front Brake Disc & Pad Kit",
    price: 52000,
    category: "Brakes",
  },
  {
    id: 15,
    name: "BMW Rear Brake Disc & Pad Kit",
    price: 42000,
    category: "Brakes",
  },
  {
    id: 16,
    name: "BMW Brake Fluid",
    price: 2200,
    category: "Brakes",
  },
  {
    id: 17,
    name: "BMW Brake Wear Sensor",
    price: 2800,
    category: "Brakes",
  },

  // FILTERS
  {
    id: 18,
    name: "BMW Microfilter",
    price: 4800,
    category: "Filters",
  },
  {
    id: 19,
    name: "BMW Activated Carbon Cabin Filter",
    price: 6500,
    category: "Filters",
  },
  {
    id: 20,
    name: "BMW Fine Dust Filter",
    price: 8500,
    category: "Filters",
  },

  // ELECTRICAL
  {
    id: 21,
    name: "BMW AGM Battery",
    price: 28500,
    category: "Electrical",
  },
  {
    id: 22,
    name: "BMW 12V Battery",
    price: 22000,
    category: "Electrical",
  },
  {
    id: 23,
    name: "BMW Battery Sensor",
    price: 4500,
    category: "Electrical",
  },
  {
    id: 24,
    name: "BMW Ignition Coil",
    price: 6200,
    category: "Electrical",
  },

  // EXTERIOR
  {
    id: 25,
    name: "BMW Front Wiper Blade Set",
    price: 5200,
    category: "Exterior",
  },
  {
    id: 26,
    name: "BMW Rear Wiper Blade",
    price: 2800,
    category: "Exterior",
  },

  // SUSPENSION
  {
    id: 27,
    name: "BMW Front Shock Absorber",
    price: 28500,
    category: "Suspension",
  },
  {
    id: 28,
    name: "BMW Rear Shock Absorber",
    price: 22500,
    category: "Suspension",
  },
  {
    id: 29,
    name: "BMW Front Suspension Control Arm",
    price: 18500,
    category: "Suspension",
  },
  {
    id: 30,
    name: "BMW Suspension Stabilizer Link",
    price: 6500,
    category: "Suspension",
  },

  // TRANSMISSION
  {
    id: 31,
    name: "BMW Automatic Transmission Fluid",
    price: 7800,
    category: "Transmission",
  },
  {
    id: 32,
    name: "BMW Transmission Oil Filter",
    price: 6200,
    category: "Transmission",
  },
  {
    id: 33,
    name: "BMW Transmission Service Kit",
    price: 18500,
    category: "Transmission",
  },

  // EV SYSTEM
  {
    id: 34,
    name: "BMW EV Coolant",
    price: 3200,
    category: "EV System",
  },
  {
    id: 35,
    name: "BMW High Voltage Battery Coolant Filter",
    price: 8500,
    category: "EV System",
  },
  {
    id: 36,
    name: "BMW Charging Port Assembly",
    price: 28500,
    category: "EV System",
  },
  {
    id: 37,
    name: "BMW High Voltage Battery Service Kit",
    price: 45000,
    category: "EV System",
  },
];

/* =========================================================
   SERVICE RECORD
========================================================= */

function ServiceRecord() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const requestId = searchParams.get("requestId");

  /* =========================================================
     GET SERVICE REQUEST
  ========================================================= */

  const serviceRequests =
    JSON.parse(
      localStorage.getItem("serviceRequests")
    ) || [];

  const request = serviceRequests.find(
    (item) => item.id === requestId
  );

  /* =========================================================
     GET VEHICLE
  ========================================================= */

  const loggedInUserId =
    localStorage.getItem("bmwUserId");

  const vehicle = request
    ? vehicles.find(
        (item) =>
          item.registration === request.registration
      )
    : vehicles.find(
        (item) =>
          item.ownerId === loggedInUserId
      );

  /* =========================================================
     SERVICE TYPE
  ========================================================= */

  const serviceTypeMap = {
    regular: "General Service",
    inspection: "Vehicle Inspection",
    maintenance: "Scheduled Maintenance",
    repair: "Repair / Issue",
    tyres: "Tyre Service",
    battery: "Battery / Charging",
    other: "Other",
  };

  const initialServiceType = request
    ? serviceTypeMap[request.serviceType] ||
      "General Service"
    : "Scheduled Maintenance";

  /* =========================================================
     STATE
  ========================================================= */

  const [serviceType, setServiceType] =
    useState(initialServiceType);

  const [problem, setProblem] = useState(
    request?.description || ""
  );

  const [workPerformed, setWorkPerformed] =
    useState("");

  const [technician, setTechnician] =
    useState("Service Team");

  const [labour, setLabour] = useState(1500);

  const [paymentStatus, setPaymentStatus] =
    useState("Pending");

  const [selectedPartId, setSelectedPartId] =
    useState("");

  const [quantity, setQuantity] = useState(1);

  const [parts, setParts] = useState([]);

  /* =========================================================
     ADD PART
  ========================================================= */

  const addPart = () => {
    if (!selectedPartId) {
      return;
    }

    const part = AVAILABLE_PARTS.find(
      (item) =>
        item.id === Number(selectedPartId)
    );

    if (!part) {
      return;
    }

    const selectedQuantity = Math.max(
      1,
      Number(quantity) || 1
    );

    const existingPart = parts.find(
      (item) => item.partId === part.id
    );

    if (existingPart) {
      setParts((currentParts) =>
        currentParts.map((item) =>
          item.partId === part.id
            ? {
                ...item,
                quantity:
                  item.quantity +
                  selectedQuantity,
              }
            : item
        )
      );
    } else {
      setParts((currentParts) => [
        ...currentParts,
        {
          id: Date.now(),
          partId: part.id,
          name: part.name,
          price: part.price,
          category: part.category,
          quantity: selectedQuantity,
        },
      ]);
    }

    setSelectedPartId("");
    setQuantity(1);
  };

  /* =========================================================
     REMOVE PART
  ========================================================= */

  const removePart = (id) => {
    setParts((currentParts) =>
      currentParts.filter(
        (part) => part.id !== id
      )
    );
  };

  /* =========================================================
     UPDATE QUANTITY
  ========================================================= */

  const updateQuantity = (id, value) => {
    const newQuantity = Math.max(
      1,
      Number(value) || 1
    );

    setParts((currentParts) =>
      currentParts.map((part) =>
        part.id === id
          ? {
              ...part,
              quantity: newQuantity,
            }
          : part
      )
    );
  };

  /* =========================================================
     BILLING CALCULATIONS
  ========================================================= */

  const partsTotal = useMemo(() => {
    return parts.reduce(
      (total, part) =>
        total +
        part.quantity * part.price,
      0
    );
  }, [parts]);

  const labourAmount =
    Number(labour) || 0;

  const subtotal =
    partsTotal + labourAmount;

  const gst = subtotal * 0.18;

  const grandTotal =
    subtotal + gst;

  /* =========================================================
     PRICE FORMAT
  ========================================================= */

  const formatPrice = (value) => {
    return Number(
      value || 0
    ).toLocaleString("en-IN", {
      maximumFractionDigits: 2,
    });
  };

  /* =========================================================
     DATE FORMAT
  ========================================================= */

  const formatDate = (
    dateValue,
    longMonth = false
  ) => {
    if (!dateValue) {
      return "Service Date";
    }

    const date = new Date(dateValue);

    if (Number.isNaN(date.getTime())) {
      return dateValue;
    }

    return date.toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: longMonth
          ? "long"
          : "short",
        year: "numeric",
      }
    );
  };

  /* =========================================================
     CUSTOMER NAME
  ========================================================= */

  const customerName =
    request?.owner ||
    vehicle?.owner ||
    "Vehicle Owner";

  const customerInitials =
    customerName
      .split(" ")
      .map((name) => name[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  /* =========================================================
     SAVE SERVICE RECORD
  ========================================================= */

  const handleSaveRecord = () => {
    if (!vehicle) {
      alert(
        "Vehicle information not found."
      );
      return;
    }

    const serviceRecord = {
      id: `REC-${Date.now()}`,

      requestId:
        request?.id || null,

      vehicle: {
        owner:
          request?.owner ||
          vehicle.owner,

        model: vehicle.model,

        registration:
          vehicle.registration,

        vin:
          vehicle.vin,

        mileage:
          request?.mileage ||
          vehicle.mileage,

        fuel:
          vehicle.fuel,

        image:
          vehicle.image,
      },

      serviceType,

      technician,

      problem:
        problem ||
        request?.description ||
        "No issue description provided.",

      workPerformed,

      parts,

      labour: labourAmount,

      partsTotal,

      subtotal,

      gst,

      grandTotal,

      paymentStatus,

      serviceDate:
        request?.requestedDate ||
        new Date()
          .toISOString()
          .split("T")[0],

      requestedTime:
        request?.requestedTime || null,

      createdAt:
        new Date().toISOString(),
    };

    const existingRecords =
      JSON.parse(
        localStorage.getItem(
          "serviceRecords"
        )
      ) || [];

    localStorage.setItem(
      "serviceRecords",
      JSON.stringify([
        ...existingRecords,
        serviceRecord,
      ])
    );

    /* =====================================================
       UPDATE SERVICE REQUEST STATUS
    ===================================================== */

    if (request?.id) {
      const updatedRequests =
        serviceRequests.map(
          (item) =>
            item.id === request.id
              ? {
                  ...item,
                  status: "Completed",
                  serviceRecordId:
                    serviceRecord.id,
                }
              : item
        );

      localStorage.setItem(
        "serviceRequests",
        JSON.stringify(
          updatedRequests
        )
      );
    }

    alert(
      "Service Record Saved Successfully!"
    );

    navigate(
      "/service-team-dashboard"
    );
  };

  /* =========================================================
     GENERATE INVOICE
  ========================================================= */

  const handleGenerateInvoice = () => {
    alert(
      `Invoice generated successfully!\n\nTotal Amount: ₹${formatPrice(
        grandTotal
      )}`
    );
  };

  /* =========================================================
     UI
  ========================================================= */

  return (
    <div className="service-record-page">

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="record-header">

        <button
          type="button"
          className="back-button"
          onClick={() =>
            navigate(
              "/service-team-dashboard"
            )
          }
        >
          <ArrowLeft size={19} />

          <span>
            Back to Service Dashboard
          </span>
        </button>

        <div className="record-heading">

          <div>
            <div className="eyebrow">
              SERVICE OPERATIONS

              <span />

              SERVICE RECORD
            </div>

            <h1>
              Create Service Record
            </h1>

            <p>
              Record maintenance, parts,
              labour and billing information.
            </p>
          </div>

          <div className="request-reference">

            <span>
              REQUEST
            </span>

            <strong>
              {request?.id ||
                "NEW SERVICE"}
            </strong>

          </div>

        </div>

      </header>

      {/* =================================================
          VEHICLE + OWNER
      ================================================= */}

      <div className="record-top-grid">

        {/* VEHICLE */}

        <section className="record-card">

          <div className="card-header">

            <div className="header-icon">
              <Car size={21} />
            </div>

            <div>
              <span>
                VEHICLE
              </span>

              <h2>
                Vehicle Information
              </h2>
            </div>

          </div>

          <div className="vehicle-info">

            <div className="vehicle-image">

              <img
                src={
                  vehicle?.image ||
                  "/i5.webp"
                }
                alt={
                  vehicle?.model ||
                  "BMW Vehicle"
                }
              />

            </div>

            <div className="vehicle-name">

              <h3>
                {vehicle?.model ||
                  request?.model ||
                  "BMW Vehicle"}
              </h3>

              <span>
                {vehicle?.registration ||
                  request?.registration ||
                  "N/A"}
              </span>

            </div>

          </div>

          <div className="vehicle-meta">

            <div>
              <span>
                VIN
              </span>

              <strong>
                {vehicle?.vin ||
                  "N/A"}
              </strong>
            </div>

            <div>
              <span>
                MILEAGE
              </span>

              <strong>
                {request?.mileage ||
                  vehicle?.mileage ||
                  "N/A"}
              </strong>
            </div>

            <div>
              <span>
                FUEL
              </span>

              <strong>
                {vehicle?.fuel ||
                  "N/A"}
              </strong>
            </div>

            <div>
              <span>
                SERVICE DATE
              </span>

              <strong>
                {formatDate(
                  request?.requestedDate
                )}
              </strong>
            </div>

          </div>

        </section>

        {/* OWNER */}

        <section className="record-card">

          <div className="card-header">

            <div className="header-icon">
              <UserRound size={21} />
            </div>

            <div>
              <span>
                OWNER
              </span>

              <h2>
                Customer Information
              </h2>
            </div>

          </div>

          <div className="customer">

            <div className="customer-avatar">
              {customerInitials}
            </div>

            <div>

              <h3>
                {customerName}
              </h3>

              <span>
                Vehicle Owner
              </span>

            </div>

          </div>

          <div className="customer-meta">

            <div>
              <span>
                EMAIL
              </span>

              <strong>
                {vehicle?.email ||
                  "Not available"}
              </strong>
            </div>

            <div>
              <span>
                PHONE
              </span>

              <strong>
                {vehicle?.phone ||
                  "Not available"}
              </strong>
            </div>

          </div>

        </section>

      </div>

      {/* =================================================
          SERVICE DETAILS
      ================================================= */}

      <section className="record-card service-section">

        <div className="section-header">

          <div>

            <span>
              SERVICE INFORMATION
            </span>

            <h2>
              Service Details
            </h2>

          </div>

          <div className="date-badge">

            <CalendarDays
              size={18}
            />

            {formatDate(
              request?.requestedDate,
              true
            )}

          </div>

        </div>

        <div className="form-grid">

          {/* SERVICE TYPE */}

          <div className="field">

            <label>
              SERVICE TYPE
            </label>

            <select
              value={serviceType}
              onChange={(e) =>
                setServiceType(
                  e.target.value
                )
              }
            >
              <option>
                Scheduled Maintenance
              </option>

              <option>
                General Service
              </option>

              <option>
                Vehicle Inspection
              </option>

              <option>
                Repair / Issue
              </option>

              <option>
                Tyre Service
              </option>

              <option>
                Battery / Charging
              </option>

              <option>
                Brake Service
              </option>

              <option>
                Engine Service
              </option>

              <option>
                Electrical Service
              </option>

              <option>
                AC Service
              </option>

              <option>
                EV System Service
              </option>

              <option>
                Suspension Service
              </option>

              <option>
                Transmission Service
              </option>

              <option>
                Other
              </option>

            </select>

          </div>

          {/* TECHNICIAN */}

          <div className="field">

            <label>
              TECHNICIAN
            </label>

            <select
              value={technician}
              onChange={(e) =>
                setTechnician(
                  e.target.value
                )
              }
            >
              <option>
                Service Team
              </option>

              <option>
                Senior Technician
              </option>

              <option>
                Master Technician
              </option>

              <option>
                EV Specialist
              </option>

            </select>

          </div>

        </div>

        {/* CUSTOMER ISSUE */}

        <div className="field full">

          <label>
            CUSTOMER REPORTED ISSUE
          </label>

          <textarea
            rows="4"
            placeholder="Describe the issue reported by the customer..."
            value={problem}
            onChange={(e) =>
              setProblem(
                e.target.value
              )
            }
          />

        </div>

        {/* WORK PERFORMED */}

        <div className="field full">

          <label>
            WORK PERFORMED
          </label>

          <textarea
            rows="4"
            placeholder="Describe the work completed by the technician..."
            value={workPerformed}
            onChange={(e) =>
              setWorkPerformed(
                e.target.value
              )
            }
          />

        </div>

      </section>

      {/* =================================================
          PARTS
      ================================================= */}

      <section className="record-card parts-section">

        <div className="section-header">

          <div>

            <span>
              PARTS & MATERIALS
            </span>

            <h2>
              Parts Used
            </h2>

          </div>

          <div className="parts-count">
            {parts.length} Selected
          </div>

        </div>

        {/* PART SELECTOR */}

        <div className="part-selector">

          <div className="part-select">

            <Wrench size={20} />

            <select
              value={selectedPartId}
              onChange={(e) =>
                setSelectedPartId(
                  e.target.value
                )
              }
            >

              <option value="">
                Select BMW part
              </option>

              {AVAILABLE_PARTS.map(
                (part) => (
                  <option
                    key={part.id}
                    value={part.id}
                  >
                    {part.name} — ₹
                    {formatPrice(
                      part.price
                    )}
                  </option>
                )
              )}

            </select>

            <ChevronDown
              size={18}
            />

          </div>

          {/* QUANTITY */}

          <div className="quantity-select">

            <label>
              QTY
            </label>

            <select
              value={quantity}
              onChange={(e) =>
                setQuantity(
                  Number(
                    e.target.value
                  )
                )
              }
            >

              {Array.from(
                { length: 10 },
                (_, index) =>
                  index + 1
              ).map((number) => (

                <option
                  key={number}
                  value={number}
                >
                  {number}
                </option>

              ))}

            </select>

          </div>

          {/* ADD PART */}

          <button
            type="button"
            className="add-part-button"
            onClick={addPart}
          >

            <Plus size={19} />

            Add Part

          </button>

        </div>

        {/* SELECTED PARTS */}

        {parts.length === 0 ? (

          <div className="empty-parts">

            <div>
              <Wrench size={28} />
            </div>

            <h3>
              No parts added
            </h3>

            <p>
              Select a BMW part above
              to add it to this
              service record.
            </p>

          </div>

        ) : (

          <div className="parts-list">

            <div className="parts-list-header">

              <span>
                PART
              </span>

              <span>
                CATEGORY
              </span>

              <span>
                QTY
              </span>

              <span>
                UNIT PRICE
              </span>

              <span>
                TOTAL
              </span>

              <span />

            </div>

            {parts.map(
              (part) => (

                <div
                  className="part-row"
                  key={part.id}
                >

                  <div className="part-name">

                    <div className="part-icon">
                      <Wrench size={17} />
                    </div>

                    <strong>
                      {part.name}
                    </strong>

                  </div>

                  <span className="category">
                    {part.category}
                  </span>

                  <select
                    value={
                      part.quantity
                    }
                    onChange={(e) =>
                      updateQuantity(
                        part.id,
                        e.target.value
                      )
                    }
                  >

                    {Array.from(
                      { length: 10 },
                      (_, index) =>
                        index + 1
                    ).map(
                      (number) => (

                        <option
                          key={number}
                          value={number}
                        >
                          {number}
                        </option>

                      )
                    )}

                  </select>

                  <span className="unit-price">
                    ₹
                    {formatPrice(
                      part.price
                    )}
                  </span>

                  <strong className="part-total">
                    ₹
                    {formatPrice(
                      part.price *
                        part.quantity
                    )}
                  </strong>

                  <button
                    type="button"
                    className="remove-part"
                    onClick={() =>
                      removePart(
                        part.id
                      )
                    }
                    title="Remove part"
                  >
                    <Trash2 size={17} />
                  </button>

                </div>

              )
            )}

            {/* PARTS TOTAL */}

            <div className="parts-total">

              <span>
                Parts Total
              </span>

              <strong>
                ₹
                {formatPrice(
                  partsTotal
                )}
              </strong>

            </div>

          </div>

        )}

      </section>

      {/* =================================================
          BILLING
      ================================================= */}

      <div className="billing-layout">

        {/* BILLING DETAILS */}

        <section className="record-card billing-card">

          <div className="section-header">

            <div>

              <span>
                PAYMENT
              </span>

              <h2>
                Billing Details
              </h2>

            </div>

            <CreditCard
              size={22}
              color="#0877d1"
            />

          </div>

          <div className="billing-content">

            {/* LABOUR */}

            <div className="field">

              <label>
                LABOUR CHARGE
              </label>

              <div className="money-field">

                <span>
                  ₹
                </span>

                <input
                  type="number"
                  min="0"
                  value={labour}
                  onChange={(e) =>
                    setLabour(
                      e.target.value
                    )
                  }
                />

              </div>

            </div>

            {/* PAYMENT STATUS */}

            <div className="field">

              <label>
                PAYMENT STATUS
              </label>

              <select
                value={
                  paymentStatus
                }
                onChange={(e) =>
                  setPaymentStatus(
                    e.target.value
                  )
                }
              >

                <option value="Pending">
                  Pending
                </option>

                <option value="Paid">
                  Paid
                </option>

                <option value="Partially Paid">
                  Partially Paid
                </option>

              </select>

            </div>

          </div>

        </section>

        {/* INVOICE SUMMARY */}

        <section className="invoice-card">

          <div className="invoice-header">

            <div className="invoice-icon">
              <ReceiptText
                size={21}
              />
            </div>

            <div>

              <span>
                INVOICE SUMMARY
              </span>

              <h2>
                Service Invoice
              </h2>

            </div>

          </div>

          <div className="invoice-lines">

            <div>

              <span>
                Parts
              </span>

              <strong>
                ₹
                {formatPrice(
                  partsTotal
                )}
              </strong>

            </div>

            <div>

              <span>
                Labour
              </span>

              <strong>
                ₹
                {formatPrice(
                  labourAmount
                )}
              </strong>

            </div>

            <div>

              <span>
                Subtotal
              </span>

              <strong>
                ₹
                {formatPrice(
                  subtotal
                )}
              </strong>

            </div>

            <div>

              <span>
                GST (18%)
              </span>

              <strong>
                ₹
                {formatPrice(gst)}
              </strong>

            </div>

          </div>

          {/* TOTAL */}

          <div className="invoice-total">

            <span>
              TOTAL AMOUNT
            </span>

            <strong>
              ₹
              {formatPrice(
                grandTotal
              )}
            </strong>

          </div>

        </section>

      </div>

      {/* =================================================
          ACTIONS
      ================================================= */}

      <div className="record-actions">

        {/* CANCEL */}

        <button
          type="button"
          className="cancel-button"
          onClick={() =>
            navigate(
              "/service-team-dashboard"
            )
          }
        >
          Cancel
        </button>

        {/* SAVE */}

        <button
          type="button"
          className="save-button"
          onClick={
            handleSaveRecord
          }
        >

          <Save size={19} />

          Save Service Record

        </button>

        {/* INVOICE */}

        <button
          type="button"
          className="invoice-button"
          onClick={
            handleGenerateInvoice
          }
        >

          <FileText size={19} />

          Generate Invoice

        </button>

      </div>

    </div>
  );
}

export default ServiceRecord;