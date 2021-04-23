import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import LayoutMissions from './components/Missions';
import Science from './components/Science';
import Instruments from './components/Instruments';

const useStyles = makeStyles({
  nav: {
    backgroundColor: '#110E32',
  },
  ul: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '1rem',
    listStyle: 'none',
    textAlign: 'center',
  },
});

const Descriptions = () => {
  const classes = useStyles();
  return (
    <>
      <Router>
        <nav className={classes.nav}>
          <ul className={classes.ul}>
            <li className="inactive">
              <Link to="/">Mission</Link>
            </li>
            <li>
              <Link to="/roverName/science">Science</Link>
            </li>
            <li>
              <Link to="/roverName/Tech">Instruments</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={LayoutMissions} />
          <Route path="/roverName/science" component={Science} />
          <Route path="/roverName/tech" component={Instruments} />
        </Switch>
      </Router>
    </>
  );
};
export default Descriptions;
