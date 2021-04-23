import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import Theme from './components/Navigation/components/Utils/Theme';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/home/Home';
import Sojourner from './pages/sojourner/Sojourner';
import Spirit from './pages/spirit/Spirit';
import Opportunity from './pages/opportunity/Opportunity';
import Curiosity from './pages/curiosity/Curiosity';
import Perseverance from './pages/perseverance/Perseverance';
import NotFound from './pages/notFound/NotFound';
import Footer from './components/Footer/Footer';

const App = () => (
  <>
    <ThemeProvider theme={Theme}>
      <Navigation />
    </ThemeProvider>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sojourner" exact component={Sojourner} />
      <Route path="/spirit" exact component={Spirit} />
      <Route path="/opportunity" exact component={Opportunity} />
      <Route path="/curiosity" exact component={Curiosity} />
      <Route path="/perseverance" exact component={Perseverance} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </>
);
export default App;
