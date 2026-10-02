import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Menu,
  ArrowUpRight,
  X,
} from "lucide-react";
import gsap from "gsap";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  /* =====================================================
     NAVBAR ANIMATION
  ===================================================== */

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

  /* =====================================================
     CLOSE MOBILE MENU
  ===================================================== */

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* =====================================================
     SERVICES
  ===================================================== */

  const handleServices = () => {
    closeMenu();

    const loggedIn = localStorage.getItem("bmwLoggedIn");

    if (loggedIn === "true") {
      navigate("/service-request");
    } else {
      navigate("/login");
    }
  };

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <nav className="navbar">

      {/* LOGO */}

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


      {/* DESKTOP NAVIGATION */}

      <div className="nav-links">

        {/* HOME */}

        <Link
          to="/"
          className="nav-item active"
          onClick={closeMenu}
        >
          HOME
        </Link>


        {/* MODELS */}

        <Link
          to="/models"
          className="nav-item"
          onClick={closeMenu}
        >
          MODELS
        </Link>


        {/* SERVICES */}

        <button
          className="nav-item nav-service-button"
          onClick={handleServices}
        >
          SERVICES
        </button>


        {/* INNOVATION */}

        <Link
          to="/innovation"
          className="nav-item"
          onClick={closeMenu}
        >
          INNOVATION
        </Link>


        {/* DISCOVER */}

        <Link
          to="/discover"
          className="nav-item"
          onClick={closeMenu}
        >
          DISCOVER
        </Link>

      </div>


      {/* RIGHT ACTIONS */}

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

        <button
          className="register-button"
          onClick={() => navigate("/login")}
        >
          <span>
            REGISTER
          </span>

          <ArrowUpRight
            size={16}
            strokeWidth={1.5}
          />
        </button>


        {/* MOBILE MENU */}

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
            <X
              size={22}
              strokeWidth={1.5}
            />
          ) : (
            <Menu
              size={22}
              strokeWidth={1.5}
            />
          )}
        </button>

      </div>


      {/* MOBILE MENU */}

      {menuOpen && (
        <div className="mobile-menu">

          {/* HOME */}

          <Link
            to="/"
            onClick={closeMenu}
          >
            HOME
          </Link>


          {/* MODELS */}

          <Link
            to="/models"
            onClick={closeMenu}
          >
            MODELS
          </Link>


          {/* SERVICES */}

          <button
            onClick={handleServices}
          >
            SERVICES
          </button>


          {/* INNOVATION */}

          <Link
            to="/innovation"
            onClick={closeMenu}
          >
            INNOVATION
          </Link>


          {/* DISCOVER */}

          <Link
            to="/discover"
            onClick={closeMenu}
          >
            DISCOVER
          </Link>


          {/* LOGIN */}

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