import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./Models.css";


const cars = [
  {
    name: "BMW M2",
    slug: "m2",
    category: "M",
    image: "/m2.avif",
    power: "453 HP",
    acceleration: "4.1 SEC",
    drive: "RWD",
  },
  {
    name: "BMW M3",
    slug: "m3",
    category: "M",
    image: "/m3.avif",
    power: "503 HP",
    acceleration: "3.9 SEC",
    drive: "M xDRIVE",
  },
  {
    name: "BMW M4",
    slug: "m4",
    category: "M",
    image: "/m4.jpeg",
    power: "503 HP",
    acceleration: "3.9 SEC",
    drive: "M xDRIVE",
  },
  {
    name: "BMW M5",
    slug: "m5",
    category: "M",
    image: "/m5.jpg",
    power: "717 HP",
    acceleration: "3.5 SEC",
    drive: "M xDRIVE",
  },
  {
    name: "BMW X1",
    slug: "x1",
    category: "X",
    image: "/x1.avif",
    power: "241 HP",
    acceleration: "6.2 SEC",
    drive: "xDRIVE",
  },
  {
    name: "BMW X3",
    slug: "x3",
    category: "X",
    image: "/x3.avif",
    power: "255 HP",
    acceleration: "6.0 SEC",
    drive: "xDRIVE",
  },
  {
    name: "BMW X5",
    slug: "x5",
    category: "X",
    image: "/x5.avif",
    power: "375 HP",
    acceleration: "5.3 SEC",
    drive: "xDRIVE",
  },
  {
    name: "BMW X7",
    slug: "x7",
    category: "X",
    image: "/x7.avif",
    power: "375 HP",
    acceleration: "5.8 SEC",
    drive: "xDRIVE",
  },
  {
    name: "BMW i4",
    slug: "i4",
    category: "i",
    image: "/i4.webp",
    power: "536 HP",
    acceleration: "3.7 SEC",
    drive: "AWD",
  },
  {
    name: "BMW i5",
    slug: "i5",
    category: "i",
    image: "/i5.webp",
    power: "593 HP",
    acceleration: "3.8 SEC",
    drive: "AWD",
  },
  {
    name: "BMW i7",
    slug: "i7",
    category: "i",
    image: "/i7.jpg",
    power: "536 HP",
    acceleration: "4.5 SEC",
    drive: "xDRIVE",
  },
  {
    name: "BMW 7 SERIES",
    slug: "7-series",
    category: "7",
    image: "/7.avif",
    power: "375 HP",
    acceleration: "4.9 SEC",
    drive: "xDRIVE",
  },
];

function Models() {
 const [searchParams] = useSearchParams();

const category = searchParams.get("category");

const [filter, setFilter] = useState(
  category || "ALL"
);

  const navigate = useNavigate();

  const filteredCars =
    filter === "ALL"
      ? cars
      : cars.filter(
          (car) => car.category === filter
        );

  return (
    <main className="models-page">

      <div className="models-background"></div>

      <div className="models-grid-bg"></div>


      {/* HEADER */}

      <section className="models-heading">

        <div>

          <p className="models-eyebrow">
            THE BMW COLLECTION
          </p>

          <h1>
            FIND YOUR
            <br />
            <span>BMW.</span>
          </h1>

          <p className="models-intro">
            Explore a collection of BMW vehicles
            engineered for performance, luxury
            and an unmistakable driving experience.
          </p>

        </div>


        <div className="models-total">

          <strong>
            {filteredCars.length
              .toString()
              .padStart(2, "0")}
          </strong>

          <span>
            MODELS
          </span>

        </div>

      </section>


      {/* FILTER */}

      <nav className="models-filter">

        {["ALL", "M", "X", "i", "7"].map(
          (item) => (

            <button
              key={item}
              onClick={() =>
                setFilter(item)
              }
              className={
                filter === item
                  ? "model-filter-active"
                  : ""
              }
            >
              {item}
            </button>

          )
        )}

      </nav>


      {/* CARDS */}

      <section className="models-container">

        {filteredCars.map(
          (car, index) => (

            <article
              className="model-card"
              key={car.name}
            >

              <div className="model-image">

                <img
                  src={car.image}
                  alt={car.name}
                />

                <div className="model-image-overlay"></div>

                <span className="model-index">
                  {(index + 1)
                    .toString()
                    .padStart(2, "0")}
                </span>

                <span className="model-category">

                  {car.category === "M"
                    ? "M PERFORMANCE"
                    : car.category === "X"
                    ? "X SERIES"
                    : car.category === "i"
                    ? "BMW i"
                    : "LUXURY"}

                </span>

              </div>


              {/* INFORMATION */}

              <div className="model-main-info">

                <div>

                  <p>
                    BMW
                  </p>

                  <h2>
                    {car.name}
                  </h2>

                </div>


               <button
  className="model-explore"
  onClick={() =>
    navigate(`/models/${car.slug}`)
  }
>
  <span>EXPLORE MODEL</span>
  <span className="explore-arrow">↗</span>
</button>

              </div>


              {/* SPECIFICATIONS */}

              <div className="model-specifications">

                <div>

                  <span>
                    POWER
                  </span>

                  <strong>
                    {car.power}
                  </strong>

                </div>


                <div>

                  <span>
                    0–100 KM/H
                  </span>

                  <strong>
                    {car.acceleration}
                  </strong>

                </div>


                <div>

                  <span>
                    DRIVE
                  </span>

                  <strong>
                    {car.drive}
                  </strong>

                </div>

              </div>

            </article>

          )
        )}

      </section>

    </main>
  );
}

export default Models;