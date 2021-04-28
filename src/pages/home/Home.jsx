import './Home.css';

const Home = () => {
  const container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  };
  const h1 = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#13103B',
    color: '#FFF',
    fontSize: '1.8rem',
    margin: 0,
    height: '135px',
    width: '100%',
  };
  return (
    <div style={container}>
      <h1 style={h1}>Wheels on mars</h1>
      <iframe
        src="https://solarsystem.nasa.gov/gltf_embed/2372"
        title="mars 3d"
        height="500"
        width="100%"
        scrolling="no"
        frameBorder="0"
        allowFullScreen
        backgroundImage="https://leblob.fr/sites/default/files/styles/full_width_big/public/2019-02/astro.jpg?h=1257b885&itok=T0ew8nOO"
      />
      <div className="HomeMessage">
        <h2>Explore mars !</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
          tempore inventore, quibusdam pariatur blanditiis delectus molestiae
          odio praesentium aut. Porro ipsum provident expedita maiores non, ipsa
          cum est recusandae iure.
        </p>
      </div>
    </div>
  );
};
export default Home;
