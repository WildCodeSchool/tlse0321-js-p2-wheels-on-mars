const Hero = () => {
  <>
    <section className="hero-container">
      <h1>Rover Name</h1>
      <iframe
        src="https://mars.nasa.gov/layout/embed/model/?s=3&rotate=true"
        title="rover"
        width="800"
        height="450"
        scrolling="no"
        frameBorder="0"
        allowFullScreen
      />
      <div id="status-info">
        <ul>
          <li>Status :</li>
          <li>Launch date :</li>
          <li>Landind date:</li>
          <li>Time on mars:</li>
          <li>Pictures took:</li>
        </ul>
      </div>
    </section>
  </>;
};

export default Hero;
