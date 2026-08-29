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


function Login() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });


  // =========================================================
  // INPUT CHANGE
  // =========================================================

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  // =========================================================
  // LOGIN
  // =========================================================

  const handleLogin = (e) => {

    e.preventDefault();

    console.log("Owner Login:", formData);

    // Save login status
    localStorage.setItem(
      "bmwLoggedIn",
      "true"
    );

    // Save user
    localStorage.setItem(
      "bmwUser",
      formData.username
    );

    // Go to dashboard
    navigate("/owner-dashboard");

  };


  // =========================================================
  // PAGE
  // =========================================================

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

            <h2>
              BMW
            </h2>

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


        {/* =================================================
            BACK TO DASHBOARD
        ================================================= */}

        <button
          type="button"
          className="login-back-button"
          onClick={() =>
            navigate("/dashboard")
          }
        >

          <ArrowLeft size={18} />

          <span>
            BACK TO DASHBOARD
          </span>

        </button>



        {/* LANGUAGE */}

        <div className="login-language">

          <span>
            ◎
          </span>

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
                placeholder="Phone Number / Email"
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
                  setShowPassword(
                    !showPassword
                  )
                }
              >

                {showPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}

              </button>

            </div>



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