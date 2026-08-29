import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  Search,
  Filter,
  FileText,
  Car,
  User,
  CalendarDays,
  Eye,
  Download,
  Trash2,
  X,
  ShieldCheck,
  FileCheck2,
  AlertCircle,
  ChevronDown,
} from "lucide-react";

import "./AdminDocuments.css";


function AdminDocuments() {

  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedDocument, setSelectedDocument] =
    useState(null);

  const [documents, setDocuments] = useState([
    {
      id: "DOC-5001",
      name: "RC Certificate",
      type: "Registration",
      owner: "Rohit Muragannavar",
      vehicle: "BMW i5 eDrive40",
      registration: "KA-25-MH-4827",
      date: "12 January 2026",
      status: "Verified",
      file: "RC_Certificate.pdf",
    },
    {
      id: "DOC-5002",
      name: "Insurance",
      type: "Insurance",
      owner: "Rohit Muragannavar",
      vehicle: "BMW i5 eDrive40",
      registration: "KA-25-MH-4827",
      date: "15 January 2026",
      status: "Verified",
      file: "BMW_Insurance.pdf",
    },
    {
      id: "DOC-5003",
      name: "Purchase Invoice",
      type: "Purchase",
      owner: "Arjun Sharma",
      vehicle: "BMW X3",
      registration: "KA-03-EF-4921",
      date: "18 February 2026",
      status: "Verified",
      file: "Purchase_Invoice.pdf",
    },
    {
      id: "DOC-5004",
      name: "Warranty Certificate",
      type: "Warranty",
      owner: "Rahul Patil",
      vehicle: "BMW X5",
      registration: "KA-19-CD-7312",
      date: "04 March 2026",
      status: "Verified",
      file: "Warranty_Certificate.pdf",
    },
    {
      id: "DOC-5005",
      name: "Service Records",
      type: "Service",
      owner: "Amit Kulkarni",
      vehicle: "BMW 3 Series",
      registration: "KA-05-AB-9218",
      date: "21 March 2026",
      status: "Pending",
      file: "Service_Records.pdf",
    },
    {
      id: "DOC-5006",
      name: "Insurance",
      type: "Insurance",
      owner: "Vikram Desai",
      vehicle: "BMW iX",
      registration: "KA-41-XY-6712",
      date: "10 April 2026",
      status: "Expired",
      file: "Insurance_2026.pdf",
    },
  ]);


  /* =====================================================
     SEARCH + FILTER
  ===================================================== */

  const filteredDocuments = useMemo(() => {

    const query =
      search.trim().toLowerCase();

    return documents.filter((document) => {

      const matchesFilter =
        filter === "All" ||
        document.status === filter;

      const matchesSearch =
        !query ||
        document.id.toLowerCase().includes(query) ||
        document.name.toLowerCase().includes(query) ||
        document.type.toLowerCase().includes(query) ||
        document.owner.toLowerCase().includes(query) ||
        document.vehicle.toLowerCase().includes(query) ||
        document.registration
          .toLowerCase()
          .includes(query);

      return matchesFilter && matchesSearch;

    });

  }, [documents, search, filter]);


  /* =====================================================
     DELETE
  ===================================================== */

  const deleteDocument = (id) => {

    const confirmed = window.confirm(
      "Are you sure you want to delete this document?"
    );

    if (!confirmed) return;

    setDocuments((current) =>
      current.filter(
        (document) =>
          document.id !== id
      )
    );

    setSelectedDocument(null);

  };


  /* =====================================================
     DOWNLOAD
  ===================================================== */

  const downloadDocument = (document) => {

    const fileContent = `
BMW OWNER PORTAL

Document: ${document.name}
Document ID: ${document.id}
Owner: ${document.owner}
Vehicle: ${document.vehicle}
Registration: ${document.registration}
Date: ${document.date}
Status: ${document.status}
`;

    const blob = new Blob(
      [fileContent],
      { type: "text/plain" }
    );

    const url =
      URL.createObjectURL(blob);

    const link =
      window.document.createElement("a");

    link.href = url;

    link.download =
      document.file.replace(
        ".pdf",
        ".txt"
      );

    link.click();

    URL.revokeObjectURL(url);

  };


  return (

    <div className="admin-documents-page">


      {/* =================================================
          HEADER
      ================================================= */}

      <header className="admin-documents-header">

        <button
          className="admin-documents-back"
          onClick={() =>
            navigate("/admin-dashboard")
          }
        >

          <ArrowLeft size={17} />

          <span>
            BACK TO DASHBOARD
          </span>

        </button>


        <div className="admin-documents-title">

          <span>
            BMW ADMIN PORTAL
          </span>

          <h1>
            Documents
          </h1>

        </div>


        <div className="admin-documents-count">

          <FileText size={15} />

          <span>
            {documents.length} DOCUMENTS
          </span>

        </div>

      </header>



      {/* =================================================
          CONTENT
      ================================================= */}

      <main className="admin-documents-content">


        {/* INTRO */}

        <section className="admin-documents-intro">

          <p>
            DOCUMENT MANAGEMENT
          </p>

          <h2>
            Manage vehicle documents.
          </h2>

          <span>
            Review registration, insurance,
            warranty and service documents.
          </span>

        </section>



        {/* =================================================
            STATS
        ================================================= */}

        <section className="admin-document-stats">


          <div className="admin-document-stat">

            <div className="document-stat-icon blue">
              <FileText size={20} />
            </div>

            <div>

              <small>
                TOTAL DOCUMENTS
              </small>

              <strong>
                {documents.length}
              </strong>

            </div>

          </div>


          <div className="admin-document-stat">

            <div className="document-stat-icon green">
              <ShieldCheck size={20} />
            </div>

            <div>

              <small>
                VERIFIED
              </small>

              <strong>
                {
                  documents.filter(
                    (document) =>
                      document.status ===
                      "Verified"
                  ).length
                }
              </strong>

            </div>

          </div>


          <div className="admin-document-stat">

            <div className="document-stat-icon orange">
              <AlertCircle size={20} />
            </div>

            <div>

              <small>
                PENDING
              </small>

              <strong>
                {
                  documents.filter(
                    (document) =>
                      document.status ===
                      "Pending"
                  ).length
                }
              </strong>

            </div>

          </div>


          <div className="admin-document-stat">

            <div className="document-stat-icon red">
              <AlertCircle size={20} />
            </div>

            <div>

              <small>
                EXPIRED
              </small>

              <strong>
                {
                  documents.filter(
                    (document) =>
                      document.status ===
                      "Expired"
                  ).length
                }
              </strong>

            </div>

          </div>

        </section>



        {/* =================================================
            SEARCH + FILTER
        ================================================= */}

        <section className="admin-documents-toolbar">


          <div className="document-search">

            <Search size={18} />

            <input
              type="text"
              placeholder="Search owner, vehicle, registration or document..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>


          <div className="document-filter">

            <Filter size={16} />

            <select
              value={filter}
              onChange={(e) =>
                setFilter(e.target.value)
              }
            >

              <option value="All">
                All Documents
              </option>

              <option value="Verified">
                Verified
              </option>

              <option value="Pending">
                Pending
              </option>

              <option value="Expired">
                Expired
              </option>

            </select>

            <ChevronDown
              size={15}
              className="document-filter-arrow"
            />

          </div>

        </section>



        {/* =================================================
            DOCUMENT LIST
        ================================================= */}

        <section className="admin-documents-panel">


          <div className="admin-documents-panel-header">

            <div>

              <p>
                VEHICLE RECORDS
              </p>

              <h2>
                Document directory
              </h2>

            </div>

            <span>
              Showing {filteredDocuments.length} results
            </span>

          </div>



          <div className="admin-document-list">


            {filteredDocuments.map(
              (document, index) => (

                <article
                  className="admin-document-card"
                  key={document.id}
                  style={{
                    "--document-delay":
                      `${index * 0.07}s`,
                  }}
                >


                  {/* DOCUMENT ICON */}

                  <div className="admin-document-icon">

                    <FileText size={21} />

                  </div>



                  {/* DOCUMENT */}

                  <div className="admin-document-main">

                    <span className="admin-document-id">
                      {document.id}
                    </span>

                    <h3>
                      {document.name}
                    </h3>

                    <span className="admin-document-type">
                      {document.type}
                    </span>

                  </div>



                  {/* OWNER */}

                  <div className="admin-document-owner">

                    <small>
                      OWNER
                    </small>

                    <strong>
                      {document.owner}
                    </strong>

                  </div>



                  {/* VEHICLE */}

                  <div className="admin-document-vehicle">

                    <small>
                      VEHICLE
                    </small>

                    <strong>
                      {document.vehicle}
                    </strong>

                    <span>
                      {document.registration}
                    </span>

                  </div>



                  {/* DATE */}

                  <div className="admin-document-date">

                    <small>
                      UPLOADED
                    </small>

                    <strong>
                      {document.date}
                    </strong>

                  </div>



                  {/* STATUS */}

                  <div className="admin-document-status">

                    <span
                      className={`document-status-badge ${
                        document.status.toLowerCase()
                      }`}
                    >
                      {document.status}
                    </span>

                  </div>



                  {/* ACTION */}

                  <div className="admin-document-action">

                    <button
                      onClick={() =>
                        setSelectedDocument(
                          document
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



            {filteredDocuments.length === 0 && (

              <div className="admin-document-empty">

                <FileText size={38} />

                <h3>
                  No documents found
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
          DOCUMENT MODAL
      ================================================= */}

      {selectedDocument && (

        <div
          className="document-modal-overlay"
          onClick={() =>
            setSelectedDocument(null)
          }
        >

          <div
            className="document-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >


            {/* HEADER */}

            <div className="document-modal-header">

              <div>

                <span>
                  {selectedDocument.id}
                </span>

                <h2>
                  Document Details
                </h2>

              </div>


              <button
                onClick={() =>
                  setSelectedDocument(null)
                }
              >

                <X size={19} />

              </button>

            </div>



            {/* BODY */}

            <div className="document-modal-body">


              {/* DOCUMENT HERO */}

              <div className="document-modal-hero">

                <div className="document-modal-icon">

                  <FileCheck2 size={25} />

                </div>

                <div>

                  <small>
                    DOCUMENT
                  </small>

                  <h3>
                    {selectedDocument.name}
                  </h3>

                  <span>
                    {selectedDocument.file}
                  </span>

                </div>

              </div>



              {/* DETAILS */}

              <div className="document-details-grid">


                <div className="document-detail">

                  <User size={17} />

                  <div>

                    <small>
                      OWNER
                    </small>

                    <strong>
                      {selectedDocument.owner}
                    </strong>

                  </div>

                </div>


                <div className="document-detail">

                  <Car size={17} />

                  <div>

                    <small>
                      VEHICLE
                    </small>

                    <strong>
                      {selectedDocument.vehicle}
                    </strong>

                    <span>
                      {selectedDocument.registration}
                    </span>

                  </div>

                </div>


                <div className="document-detail">

                  <CalendarDays size={17} />

                  <div>

                    <small>
                      UPLOAD DATE
                    </small>

                    <strong>
                      {selectedDocument.date}
                    </strong>

                  </div>

                </div>


                <div className="document-detail">

                  <ShieldCheck size={17} />

                  <div>

                    <small>
                      STATUS
                    </small>

                    <strong>
                      {selectedDocument.status}
                    </strong>

                  </div>

                </div>

              </div>



              {/* ACTIONS */}

              <div className="document-modal-actions">

                <button
                  className="document-download"
                  onClick={() =>
                    downloadDocument(
                      selectedDocument
                    )
                  }
                >

                  <Download size={16} />

                  DOWNLOAD

                </button>


                <button
                  className="document-remove"
                  onClick={() =>
                    deleteDocument(
                      selectedDocument.id
                    )
                  }
                >

                  <Trash2 size={16} />

                  DELETE

                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>

  );
}


export default AdminDocuments;