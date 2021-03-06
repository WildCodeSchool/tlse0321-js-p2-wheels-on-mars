import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/home/Home';
import Spirit from './pages/spirit/Spirit';
import Opportunity from './pages/opportunity/Opportunity';
import Curiosity from './pages/curiosity/Curiosity';
import Perseverance from './pages/perseverance/Perseverance';
import NotFound from './pages/notFound/NotFound';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';

const App = () => (
  <>
    <Navigation />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/spirit" exact component={Spirit} />
      <Route path="/opportunity" exact component={Opportunity} />
      <Route path="/curiosity" exact component={Curiosity} />
      <Route path="/perseverance" exact component={Perseverance} />
      <Route path="/aboutus" exact component={AboutUs} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </>
);
export default App;
