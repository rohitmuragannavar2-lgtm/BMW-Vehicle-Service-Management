import { useEffect, useState } from "react";
import "./Intro.css";

function Intro() {
  const [hideIntro, setHideIntro] = useState(() => {
    return sessionStorage.getItem("introPlayed") === "true";
  });

  useEffect(() => {
    // Already played during this browser session
    if (hideIntro) {
      return;
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem("introPlayed", "true");
      setHideIntro(true);
    }, 4200);

    return () => clearTimeout(timer);
  }, [hideIntro]);

  if (hideIntro) return null;

  return (
    <div className="intro">

      <div className="intro-scene">

        {/* 3D BMW LOGO */}

        <div className="logo-3d">

          <div className="logo-depth"></div>

          <img
            src="/BMW_India-Logo.wine.png"
            alt="BMW"
          />

        </div>


        {/* BMW TEXT */}

        <div className="intro-tagline">
          SHEER DRIVING PLEASURE
        </div>

      </div>

    </div>
  );
}

export default Intro;