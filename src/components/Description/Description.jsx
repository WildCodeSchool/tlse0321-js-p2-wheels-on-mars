import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab } from '@material-ui/core';
import './description.scss';
import Missions from './components/Missions';
import Science from './components/Science';
import Instruments from './components/Instruments';
import data from '../../dto.json';

const useStyles = makeStyles({
  nav: {
    backgroundColor: '#fff',
    color: '#110E32',
  },
});

const Descriptions = ({ name }) => {
  const classes = useStyles();
  let infos = null;
  if (name === 'Curiosity') {
    infos = data.rovers[0].curiosity;
  } else if (name === 'Opportunity') {
    infos = data.rovers[0].opportunity;
  } else if (name === 'Perseverance') {
    infos = data.rovers[0].perseverance;
  } else {
    infos = data.rovers[0].spirit;
  }
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const match = useRouteMatch();
  return (
    <>
      <Router>
        <Tabs
          id="white"
          value={value}
          onChange={handleChange}
          indicatorColor=""
          className={classes.nav}
          centered
        >
          <Tab component={Link} to={match.url} label="Mission" />
          <Tab component={Link} to={`${match.url}/science`} label="Science" />
          <Tab
            component={Link}
            to={`${match.url}/instruments`}
            label="Instruments"
          />
        </Tabs>
        <Switch>
          <Route exact path={match.path}>
            <Missions {...infos} />
          </Route>
          <Route path={`${match.path}/science`}>
            <Science {...infos} />
          </Route>
          <Route path={`${match.path}/instruments`}>
            <Instruments {...infos} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
export default Descriptions;
