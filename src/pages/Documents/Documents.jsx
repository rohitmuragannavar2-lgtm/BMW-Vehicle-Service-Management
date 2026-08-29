import { useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  FileText,
  Eye,
  Download,
  ShieldCheck,
  Receipt,
  Wrench,
  BookOpen,
} from "lucide-react";

import "./Documents.css";


function Documents() {

  const navigate = useNavigate();


  // =========================================================
  // DOCUMENT DATA
  // =========================================================

  const documents = [

    {
      id: 1,
      title: "RC Certificate",
      description: "Registration Certificate",
      icon: FileText,
      status: "Available",
    },

    {
      id: 2,
      title: "Insurance",
      description: "Vehicle Insurance",
      icon: ShieldCheck,
      status: "Available",
    },

    {
      id: 3,
      title: "Purchase Invoice",
      description: "Original Purchase Invoice",
      icon: Receipt,
      status: "Available",
    },

    {
      id: 4,
      title: "Warranty Certificate",
      description: "BMW Warranty Document",
      icon: ShieldCheck,
      status: "Active",
    },

    {
      id: 5,
      title: "Service Records",
      description: "Previous Service Records",
      icon: Wrench,
      status: "Available",
    },

    {
      id: 6,
      title: "Owner Manual",
      description: "BMW Digital Owner Manual",
      icon: BookOpen,
      status: "Available",
    },

  ];


  // =========================================================
  // VIEW DOCUMENT
  // =========================================================

  const handleView = (documentName) => {

    alert(
      `${documentName}\n\nDocument viewer will be connected to the Spring Boot backend later.`
    );

  };


  // =========================================================
  // DOWNLOAD DOCUMENT
  // =========================================================

  const handleDownload = (documentName) => {

    alert(
      `Downloading ${documentName}...\n\nActual document download will be connected to the Spring Boot backend later.`
    );

  };


  // =========================================================
  // PAGE
  // =========================================================

  return (

    <div className="documents-page">


      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="documents-header">


        {/* BACK BUTTON */}

        <button
          type="button"
          className="documents-back-button"
          onClick={() =>
            navigate("/owner-dashboard")
          }
        >

          <ArrowLeft size={18} />

          <span>
            BACK TO DASHBOARD
          </span>

        </button>


        {/* TITLE */}

        <div className="documents-title">

          <span>
            BMW OWNER PORTAL
          </span>

          <h1>
            Documents
          </h1>

        </div>

      </header>



      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main className="documents-content">


        {/* INTRO */}

        <div className="documents-intro">

          <p>
            VEHICLE DOCUMENTS
          </p>

          <h2>
            Your Vehicle Records
          </h2>

          <span>
            Access your vehicle documents, certificates,
            invoices and service records in one place.
          </span>

        </div>



        {/* VEHICLE INFORMATION */}

        <section className="documents-vehicle-card">

          <div className="documents-vehicle-icon">

            <FileText size={26} />

          </div>


          <div>

            <small>
              YOUR VEHICLE
            </small>

            <h3>
              BMW i5 eDrive40
            </h3>

            <span>
              KA-25-MH-4827
            </span>

          </div>


          <div className="documents-owner">

            <small>
              REGISTERED OWNER
            </small>

            <strong>
              Rohit Muragannavar
            </strong>

          </div>

        </section>



        {/* =================================================
            DOCUMENT GRID
        ================================================= */}

        <section className="documents-section">

          <div className="documents-section-heading">

            <div>

              <p>
                DOCUMENT LIBRARY
              </p>

              <h2>
                Vehicle Documents
              </h2>

            </div>

            <span>
              {documents.length} DOCUMENTS
            </span>

          </div>



          <div className="documents-grid">


            {documents.map((document) => {

              const Icon =
                document.icon;


              return (

                <article
                  className="document-card"
                  key={document.id}
                >


                  {/* ICON */}

                  <div className="document-icon">

                    <Icon size={26} />

                  </div>


                  {/* INFORMATION */}

                  <div className="document-information">

                    <div>

                      <h3>
                        {document.title}
                      </h3>

                      <p>
                        {document.description}
                      </p>

                    </div>


                    <span className="document-status">

                      {document.status}

                    </span>

                  </div>


                  {/* ACTIONS */}

                  <div className="document-actions">


                    <button
                      type="button"
                      className="document-view-button"
                      onClick={() =>
                        handleView(
                          document.title
                        )
                      }
                    >

                      <Eye size={16} />

                      VIEW

                    </button>


                    <button
                      type="button"
                      className="document-download-button"
                      onClick={() =>
                        handleDownload(
                          document.title
                        )
                      }
                    >

                      <Download size={16} />

                      DOWNLOAD

                    </button>


                  </div>

                </article>

              );

            })}

          </div>

        </section>



        {/* =================================================
            INFORMATION
        ================================================= */}

        <section className="documents-help">

          <div>

            <p>
              DOCUMENT SECURITY
            </p>

            <h2>
              Your vehicle records in one place.
            </h2>

            <span>
              Your documents are associated with your BMW
              vehicle and will be securely managed through
              your owner account.
            </span>

          </div>


          <div className="documents-help-icon">

            <ShieldCheck size={28} />

          </div>

        </section>


      </main>

    </div>
  );
}


export default Documents;