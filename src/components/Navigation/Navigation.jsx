import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Sojourner">Sojourner</Link>
      </li>
      <li>
        <Link to="/Spirit">Spirit</Link>
      </li>
      <li>
        <Link to="/Opportunity">Opportunity</Link>
      </li>
      <li>
        <Link to="/Curiosity">Curiosity</Link>
      </li>
      <li>
        <Link to="/Perseverance">Perseverance</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
