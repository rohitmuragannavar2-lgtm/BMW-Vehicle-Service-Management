import React from "react";
import {
  ArrowRight,
  Car,
  Gauge,
  Gem,
  Wrench,
  CalendarDays,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Discover.css";

const discoverCards = [
  {
    image: "/explore.png",
    icon: <Car />,
    title: "Explore AutoSphere Models",
    text: "Discover our range of premium cars, SUVs, electric vehicles, and performance models.",
    link: "View All Models",
    path: "/models",
  },
  {
    image: "/vehicle.png",
    icon: <Gauge />,
    title: "Find Your Vehicle",
    text: "Find the perfect vehicle that matches your lifestyle and driving needs.",
    link: "Find Your Vehicle",
    path: "/models",
  },
  {
    image: "/performance.png",
    icon: <Gauge />,
    title: "Performance",
    text: "Experience the power, precision, and performance that define AutoSphere.",
    link: "Learn More",
    path: "/performance",
  },
  {
    image: "/comfort.png",
    icon: <Gem />,
    title: "Luxury & Comfort",
    text: "Crafted with premium materials and innovative comfort features.",
    link: "Discover Luxury",
    path: "/luxury",
  },
  {
    image: "/auto.png",
    icon: <UserRound />,
    title: "AutoSphere Experience",
    text: "Immerse yourself in the AutoSphere world through events, driving, and more.",
    link: "Explore Experience",
    path: "/experience",
  },
  {
    image: "/service.png",
    icon: <Wrench />,
    title: "Service & Ownership",
    text: "Dedicated service and support for a smooth and worry-free ownership experience.",
    link: "Learn More",
    path: "/service-ownership",
  },
];

function Discover() {
  return (
    <div className="discover-page">

      <section className="discover-hero">
        <div className="discover-hero-content">
          <span className="discover-label">
            DISCOVER AUTOSPHERE
          </span>

          <h1>
            The Ultimate
            <br />
            Driving Experience.
          </h1>

          <p>
            Explore the world of AutoSphere. From iconic design and
            thrilling performance to intelligent technology and
            unforgettable ownership experiences.
          </p>

         
        </div>

        <div className="discover-hero-image">
          <img src="/hhh.png" alt="AutoSphere Vehicle" />
        </div>
      </section>

      <section className="discover-cards-section">
        <div className="discover-cards">

          {discoverCards.map((card, index) => (
            <div className="discover-card" key={index}>

              <div className="discover-card-image">
                <img src={card.image} alt={card.title} />
              </div>

              <div className="discover-card-content">

                <div className="discover-card-icon">
                  {card.icon}
                </div>

                <h2>{card.title}</h2>

                <p>{card.text}</p>

                <Link
                  to={card.path}
                  className="discover-link"
                >
                  {card.link}
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>
          ))}

        </div>
      </section>

      <section className="discover-test-drive">

        <div className="test-drive-icon">
          <CalendarDays size={34} />
        </div>

        <div className="test-drive-content">
          <h2>Book a Test Drive</h2>

          <p>
            Experience the thrill of driving an AutoSphere vehicle.
            Book your test drive today.
          </p>
        </div>

        <Link to="/test-drive" className="test-drive-btn">
          Book Now
          <ArrowRight size={20} />
        </Link>

      </section>

    </div>
  );
}

export default Discover;