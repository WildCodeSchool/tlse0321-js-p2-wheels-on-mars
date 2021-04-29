import CardSlider from '../../components/CardSlider/CardSlider';
import Header from '../../components/Header/Header';
import './Home.css';

const Home = () => (
  <>
    <div className="container">
      <Header />
      <div className="homeMessage">
        <h2>Mars Exploration Rovers</h2>
        <p>
          The mission consists of deploying rovers on the Martian soil to study
          its surface, take pictures and collect samples of the Martian soil.
          ... The final goal is to be able to carry out a detailed analysis of
          the Martian soil samples on Earth and in particular to identify
          possible ancient life forms.
        </p>
        <p>
          As of February 2021, there have been five successful robotically
          operated Mars rovers, all managed by the Jet Propulsion Laboratory:
          <em>Sojourner, Opportunity, Spirit, Curiosity, and Perseverance.</em>
        </p>
        <p>
          On January 24, 2016, NASA reported that current studies on Mars by
          Curiosity and Opportunity would be searching for evidence of ancient
          life, including a biosphere based on autotrophic, chemotrophic or
          chemolithoautotrophic microorganisms, as well as ancient water,
          including fluvio-lacustrine environments that may have been habitable.
        </p>
      </div>
    </div>
    <CardSlider />
  </>
);

export default Home;
