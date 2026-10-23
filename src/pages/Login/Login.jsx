import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  User,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

import "./Login.css";

// =========================================================
// USERS
// =========================================================

const users = [
  // CUSTOMERS
  {
    id: "C001",
    username: "rohit",
    password: "rohit123",
    name: "Rohit Muragannavar",
    role: "customer",
  },
  {
    id: "C002",
    username: "rahul",
    password: "rahul123",
    name: "Rahul Sharma",
    role: "customer",
  },
  {
    id: "C003",
    username: "arjun",
    password: "arjun123",
    name: "Arjun Patil",
    role: "customer",
  },
  {
    id: "C004",
    username: "vijay",
    password: "vijay123",
    name: "Vijay Kumar",
    role: "customer",
  },
  {
    id: "C005",
    username: "aditya",
    password: "aditya123",
    name: "Aditya Rao",
    role: "customer",
  },
  {
    id: "C006",
    username: "kiran",
    password: "kiran123",
    name: "Kiran Joshi",
    role: "customer",
  },
  {
    id: "C007",
    username: "rohan",
    password: "rohan123",
    name: "Rohan Desai",
    role: "customer",
  },
  {
    id: "C008",
    username: "akash",
    password: "akash123",
    name: "Akash Kulkarni",
    role: "customer",
  },
  {
    id: "C009",
    username: "sanjay",
    password: "sanjay123",
    name: "Sanjay Naik",
    role: "customer",
  },
  {
    id: "C010",
    username: "manoj",
    password: "manoj123",
    name: "Manoj Shetty",
    role: "customer",
  },

  // ADMINS
  {
    id: "A001",
    username: "admin1",
    password: "admin123",
    name: "Admin One",
    role: "admin",
  },
  {
    id: "A002",
    username: "admin2",
    password: "admin123",
    name: "Admin Two",
    role: "admin",
  },
  {
    id: "A003",
    username: "admin3",
    password: "admin123",
    name: "Admin Three",
    role: "admin",
  },
  {
    id: "A004",
    username: "admin4",
    password: "admin123",
    name: "Admin Four",
    role: "admin",
  },

  // SERVICE TEAM
  {
    id: "S001",
    username: "service1",
    password: "service123",
    name: "Service Team One",
    role: "service",
  },
  {
    id: "S002",
    username: "service2",
    password: "service123",
    name: "Service Team Two",
    role: "service",
  },
];

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  // =========================================================
  // INPUT CHANGE
  // =========================================================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  // =========================================================
  // LOGIN
  // =========================================================

  const handleLogin = (e) => {
    e.preventDefault();

    const username = formData.username.trim().toLowerCase();
    const password = formData.password;

    const user = users.find(
      (item) =>
        item.username === username &&
        item.password === password
    );

    // INVALID LOGIN
    if (!user) {
      setError("Invalid username or password.");
      return;
    }

    // =======================================================
    // SAVE LOGIN INFORMATION
    // =======================================================

    localStorage.setItem("bmwLoggedIn", "true");

    localStorage.setItem(
      "bmwUser",
      JSON.stringify(user)
    );

    localStorage.setItem(
      "bmwUserId",
      user.id
    );

    localStorage.setItem(
      "bmwUserRole",
      user.role
    );

    // =======================================================
    // ROLE BASED NAVIGATION
    // =======================================================

    if (user.role === "customer") {
      navigate("/owner-dashboard");
    }

    else if (user.role === "admin") {
      navigate("/admin-dashboard");
    }

    else if (user.role === "service") {
      navigate("/service-team-dashboard");
    }
  };

  return (
    <main className="login-page">

      {/* =====================================================
          LEFT SIDE
      ===================================================== */}

      <section className="login-visual">

        <div className="login-visual-overlay"></div>

        {/* BMW BRAND */}

        <div className="login-brand">

          <div className="login-logo">
            <img
              src="/BMW_India-Logo.wine.png"
              alt="BMW"
            />
          </div>

          <div>
            <h2>BMW</h2>

            <p>
              SHEER DRIVING PLEASURE
            </p>
          </div>

        </div>

        {/* CAR IMAGE */}

        <div className="login-car">

          <img
            src="/login.png"
            alt="BMW M4"
          />

        </div>

        {/* LEFT CONTENT */}

        <div className="login-visual-content">

          <span className="login-small-title">
            BMW OWNER PORTAL
          </span>

          <h1>
            WELCOME BACK.
            <br />
            THE JOURNEY
            <br />
            CONTINUES.
          </h1>

          <div className="login-blue-line"></div>

          <p>
            Sign in to access your BMW account
            and manage your vehicle services.
          </p>

        </div>

      </section>

      {/* =====================================================
          RIGHT SIDE
      ===================================================== */}

      <section className="login-form-section">

        {/* BACK */}

        <button
          type="button"
          className="login-back-button"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={18} />

          <span>
            BACK TO HOME
          </span>
        </button>

        {/* LANGUAGE */}

        <div className="login-language">

          <span>◎</span>

          English

          <span className="language-arrow">
            ⌄
          </span>

        </div>

        {/* FORM */}

        <div className="login-form-container">

          {/* HEADING */}

          <div className="login-heading">

            <p className="login-eyebrow">
              BMW OWNER PORTAL
            </p>

            <h2>
              Welcome to BMW
            </h2>

            <p>
              Login to your owner account
            </p>

          </div>

          {/* LOGIN FORM */}

          <form
            className="login-form"
            onSubmit={handleLogin}
          >

            {/* USERNAME */}

            <div className="login-input">

              <User size={20} />

              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />

            </div>

            {/* PASSWORD */}

            <div className="login-input">

              <Lock size={20} />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>

            </div>

            {/* ERROR */}

            {error && (
              <p
                style={{
                  color: "#d32f2f",
                  fontSize: "14px",
                  marginTop: "8px",
                }}
              >
                {error}
              </p>
            )}

            {/* FORGOT PASSWORD */}

            <div className="forgot-password">

              <button
                type="button"
                onClick={() =>
                  alert(
                    "Password recovery will be connected later."
                  )
                }
              >
                Forgot Password?
              </button>

            </div>

            {/* LOGIN */}

            <button
              type="submit"
              className="login-submit"
            >

              <span>
                LOGIN
              </span>

              <ArrowRight size={18} />

            </button>

          </form>

          {/* CONTACT */}

          <p className="login-contact">

            Don't have an account?

            <button
              type="button"
              onClick={() =>
                alert(
                  "Please contact your BMW administrator."
                )
              }
            >
              Contact administrator.
            </button>

          </p>

        </div>

        {/* FOOTER */}

        <footer className="login-footer">

          <span>
            © 2026 BMW Group. All rights reserved.
          </span>

          <span>
            Privacy Policy
          </span>

          <span>
            Terms of Use
          </span>

        </footer>

      </section>

    </main>
  );
}

export default Login;