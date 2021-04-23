import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Missions from './components/Missions';
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
              <Link to="/science">Science</Link>
            </li>
            <li>
              <Link to="/instruments">Instruments</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Missions} />
          <Route path="/science" component={Science} />
          <Route path="/instruments" component={Instruments} />
        </Switch>
      </Router>
    </>
  );
};
export default Descriptions;
