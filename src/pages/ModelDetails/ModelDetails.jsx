import { useNavigate, useParams } from "react-router-dom";
import "./ModelDetails.css";

const cars = {
  m2: {
    name: "BMW M2",
    category: "M PERFORMANCE",
    image: "/m2.avif",
    price: "₹1.05 Crore",
    power: "453 HP",
    acceleration: "4.1 SEC",
    drive: "RWD",
    description:
      "Compact proportions. Rear-wheel drive. Pure M performance.",
  },

  m3: {
    name: "BMW M3",
    category: "M PERFORMANCE",
    image: "/m3.avif",
    price: "₹1.48 Crore",
    power: "503 HP",
    acceleration: "3.9 SEC",
    drive: "M xDRIVE",
    description:
      "A high-performance sports sedan built for everyday driving and extraordinary moments.",
  },

  m4: {
    name: "BMW M4",
    category: "M PERFORMANCE",
    image: "/m4.jpeg",
    price: "₹1.55 Crore",
    power: "503 HP",
    acceleration: "3.9 SEC",
    drive: "M xDRIVE",
    description:
      "Bold design combined with unmistakable M performance.",
  },

  m5: {
    name: "BMW M5",
    category: "M PERFORMANCE",
    image: "/m5.jpg",
    price: "₹1.99 Crore",
    power: "717 HP",
    acceleration: "3.5 SEC",
    drive: "M xDRIVE",
    description:
      "Executive luxury meets extreme performance.",
  },

  x1: {
    name: "BMW X1",
    category: "X SERIES",
    image: "/x1.avif",
    price: "₹50 Lakh",
    power: "241 HP",
    acceleration: "6.2 SEC",
    drive: "xDRIVE",
    description:
      "Compact luxury SUV designed for modern urban adventures.",
  },

  x3: {
    name: "BMW X3",
    category: "X SERIES",
    image: "/x3.avif",
    price: "₹75 Lakh",
    power: "255 HP",
    acceleration: "6.0 SEC",
    drive: "xDRIVE",
    description:
      "Versatility, luxury and dynamic BMW driving pleasure.",
  },

  x5: {
    name: "BMW X5",
    category: "X SERIES",
    image: "/x5.avif",
    price: "₹95 Lakh",
    power: "375 HP",
    acceleration: "5.3 SEC",
    drive: "xDRIVE",
    description:
      "Premium SUV capability with powerful BMW performance.",
  },

  x7: {
    name: "BMW X7",
    category: "X SERIES",
    image: "/x7.avif",
    price: "₹1.30 Crore",
    power: "375 HP",
    acceleration: "5.8 SEC",
    drive: "xDRIVE",
    description:
      "The ultimate BMW luxury SUV experience.",
  },

  i4: {
    name: "BMW i4",
    category: "BMW i",
    image: "/i4.webp",
    price: "₹75 Lakh",
    power: "536 HP",
    acceleration: "3.7 SEC",
    drive: "AWD",
    description:
      "Electric performance with the unmistakable character of BMW.",
  },

  i5: {
    name: "BMW i5",
    category: "BMW i",
    image: "/i5.webp",
    price: "₹1.20 Crore",
    power: "593 HP",
    acceleration: "3.8 SEC",
    drive: "AWD",
    description:
      "Executive electric performance with advanced technology.",
  },

  i7: {
    name: "BMW i7",
    category: "BMW i",
    image: "/i7.jpg",
    price: "₹2.00 Crore",
    power: "536 HP",
    acceleration: "4.5 SEC",
    drive: "xDRIVE",
    description:
      "Luxury, innovation and electric performance in one experience.",
  },

  "7-series": {
    name: "BMW 7 SERIES",
    category: "LUXURY",
    image: "/7.avif",
    price: "₹1.80 Crore",
    power: "375 HP",
    acceleration: "4.9 SEC",
    drive: "xDRIVE",
    description:
      "The pinnacle of BMW luxury and executive comfort.",
  },
};


function ModelDetails() {

  const { slug } = useParams();

  const navigate = useNavigate();

  const car = cars[slug];


  /* =========================================
     MODEL NOT FOUND
  ========================================= */

  if (!car) {

    return (
      <main className="model-not-found">

        <h1>
          MODEL NOT FOUND
        </h1>

        <button
          onClick={() =>
          navigate(-1)
          }
        >
          BACK TO MODELS
        </button>

      </main>
    );

  }


  return (

    <main className="model-details">


      {/* =====================================
          BACK BUTTON
      ===================================== */}

    <button
  className="model-back"
  onClick={() => navigate(-1)}
>
  <span className="back-arrow">
    ←
  </span>

  <span>
    BACK
  </span>
</button>


      {/* =====================================
          VEHICLE HERO
      ===================================== */}

      <section className="model-details-hero">


        {/* LEFT CONTENT */}

        <div className="model-details-text">


          <p className="model-details-category">
            {car.category}
          </p>


          <h1>
            {car.name}
          </h1>


          <p className="model-details-description">
            {car.description}
          </p>


          {/* SHOWROOM PRICE */}

          <div className="model-price">

            <span>
              SHOWROOM PRICE
            </span>

            <strong>
              {car.price}
            </strong>

          </div>


        </div>


        {/* RIGHT IMAGE */}

        <div className="model-details-image">

          <img
            src={car.image}
            alt={car.name}
          />

        </div>


      </section>


      {/* =====================================
          SPECIFICATIONS
      ===================================== */}

      <section className="model-details-specs">


        {/* POWER */}

        <div>

          <span>
            POWER
          </span>

          <strong>
            {car.power}
          </strong>

        </div>


        {/* ACCELERATION */}

        <div>

          <span>
            0–100 KM/H
          </span>

          <strong>
            {car.acceleration}
          </strong>

        </div>


        {/* DRIVE */}

        <div>

          <span>
            DRIVE
          </span>

          <strong>
            {car.drive}
          </strong>

        </div>


      </section>


    </main>

  );

}


export default ModelDetails;