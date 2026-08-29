import "./Performance.css";

function Performance() {
  return (
    <section className="performance">

      {/* AI VIDEO */}
      <video
        className="performance-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/Rohit.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="performance-overlay"></div>

      {/* TEXT */}
      <div className="performance-content">

        <p className="performance-label">
          BMW M PERFORMANCE
        </p>

        <h2>
          BORN
          <br />
          TO MOVE.
        </h2>

        <div className="performance-line"></div>

        <p className="performance-description">
          Power is more than numbers.
          It is the feeling when the road
          disappears beneath you.
        </p>

       

      </div>

      {/* BOTTOM TEXT */}
      <div className="performance-bottom">
        <span>PRECISION</span>
        <span>POWER</span>
        <span>FREEDOM</span>
      </div>

    </section>
  );
}

export default Performance;