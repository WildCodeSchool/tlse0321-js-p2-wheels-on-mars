import './header.css';

const Header = () => (
  <>
    <header className="headerHomePage">
      <iframe
        src="https://solarsystem.nasa.gov/gltf_embed/2372"
        className="mars3d"
        title="mars 3d"
        width="100%"
        scrolling="no"
        frameBorder="0"
        allowFullScreen
        backgroundImage="https://leblob.fr/sites/default/files/styles/full_width_big/public/2019-02/astro.jpg?h=1257b885&itok=T0ew8nOO"
      />
      <div className="headerButton">
        <h1>What`s new about Perseverance and his friend Ingenuity</h1>

        <a
          href="https://www.cite-espace.com/actualites-spatiales/ingenuity-premier-survol-mars/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">See more !</button>
        </a>
      </div>
    </header>
  </>
);

export default Header;
