import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/home/Home';
import Sojourner from './pages/sojourner/Sojourner';
import Spirit from './pages/spirit/Spirit';
import Opportunity from './pages/opportunity/Opportunity';
import Curiosity from './pages/curiosity/Curiosity';
import Perseverance from './pages/perseverance/Perseverance';
import NotFound from './pages/notFound/NotFound';
import Pictures from './components/Pictures/Pictures';

const App = () => (
  <>
    <Pictures />
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Sojourner" exact component={Sojourner} />
          <Route path="/Spirit" exact component={Spirit} />
          <Route path="/Opportunity" exact component={Opportunity} />
          <Route path="/Curiosity" exact component={Curiosity} />
          <Route path="/Perseverance" exact component={Perseverance} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  </>
);
export default App;
