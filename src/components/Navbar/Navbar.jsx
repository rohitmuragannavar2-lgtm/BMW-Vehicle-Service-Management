import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Menu, ArrowUpRight, X } from "lucide-react";
import gsap from "gsap";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".navbar",
      {
        y: -80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        delay: 4,
      }
    );

    tl.fromTo(
      ".nav-logo",
      {
        scale: 0,
        opacity: 0,
        rotate: -90,
      },
      {
        scale: 1,
        opacity: 1,
        rotate: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      },
      "-=0.7"
    );

    tl.fromTo(
      ".nav-item",
      {
        y: -20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
      },
      "-=0.5"
    );

    tl.fromTo(
      ".nav-actions",
      {
        x: 30,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.5"
    );

    return () => {
      tl.kill();
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleServices = () => {
    closeMenu();

    const loggedIn = localStorage.getItem("bmwLoggedIn");

    if (loggedIn === "true") {
      navigate("/service-request");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="navbar">

      {/* =================================================
          LEFT — LOGO
      ================================================= */}

      <div className="nav-brand">

        <div className="nav-logo">

          <img
            src="/BMW_India-Logo.wine.png"
            alt="BMW"
          />

        </div>

        <span className="brand-name">
          BMW
        </span>

      </div>


      {/* =================================================
          CENTER — DESKTOP LINKS
      ================================================= */}

      <div className="nav-links">

        <Link
          to="/"
          className="nav-item active"
        >
          HOME
        </Link>

        <Link
          to="/models"
          className="nav-item"
        >
          MODELS
        </Link>

        <button
          className="nav-item nav-service-button"
          onClick={handleServices}
        >
          SERVICES
        </button>

        <a
          href="#innovation"
          className="nav-item"
        >
          INNOVATION
        </a>

        <a
          href="#about"
          className="nav-item"
        >
          DISCOVER
        </a>

      </div>


      {/* =================================================
          RIGHT — DESKTOP ACTIONS
      ================================================= */}

      <div className="nav-actions">

        {/* LOGIN */}

        <button
          className="login-button"
          onClick={() => navigate("/login")}
        >
          <User
            size={16}
            strokeWidth={1.5}
          />

          <span>
            LOGIN
          </span>
        </button>


        {/* REGISTER */}

        <button className="register-button">

          <span>
            REGISTER
          </span>

          <ArrowUpRight
            size={16}
            strokeWidth={1.5}
          />

        </button>


        {/* MOBILE MENU BUTTON */}

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >

          {menuOpen ? (
            <X size={22} strokeWidth={1.5} />
          ) : (
            <Menu size={22} strokeWidth={1.5} />
          )}

        </button>

      </div>


      {/* =================================================
          MOBILE MENU
      ================================================= */}

      {menuOpen && (

        <div className="mobile-menu">

          <Link
            to="/"
            onClick={closeMenu}
          >
         
            HOME
          </Link>


          <Link
            to="/models"
            onClick={closeMenu}
          >
          
            MODELS
          </Link>


          <button
            onClick={handleServices}
          >
          
            SERVICES
          </button>


          <a
            href="#innovation"
            onClick={closeMenu}
          >
          
            INNOVATION
          </a>


          <a
            href="#about"
            onClick={closeMenu}
          >
           
            DISCOVER
          </a>


          {/* MOBILE LOGIN */}

          <button
            className="mobile-login"
            onClick={() => {
              closeMenu();
              navigate("/login");
            }}
          >
            <User
              size={15}
              strokeWidth={1.5}
            />

            LOGIN
          </button>

        </div>

      )}

    </nav>
  );
}

export default Navbar;