import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/sojourner">Sojourner</Link>
      </li>
      <li>
        <Link to="/spirit">Spirit</Link>
      </li>
      <li>
        <Link to="/opportunity">Opportunity</Link>
      </li>
      <li>
        <Link to="/curiosity">Curiosity</Link>
      </li>
      <li>
        <Link to="/perseverance">Perseverance</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
