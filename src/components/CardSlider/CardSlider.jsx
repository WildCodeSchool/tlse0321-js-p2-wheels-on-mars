import { Carousel } from '3d-react-carousal';
import { useHistory } from 'react-router-dom';
import Card from './Card';
import data from '../../dto.json';

const { opportunity } = data.rovers[0];
const { curiosity } = data.rovers[0];
const { perseverance } = data.rovers[0];
const { spirit } = data.rovers[0];

const CardSlider = () => {
  const SliderContainer = {
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#13103b93',
  };

  const history = useHistory();

  const routeCuriosity = () => history.push('/curiosity');
  const routeOpportunity = () => history.push('/opportunity');
  const routePerseverance = () => history.push('/perseverance');
  const routeSpirit = () => history.push('/spirit');

  const slides = [
    <Card {...curiosity} route={routeCuriosity} />,
    <Card {...opportunity} route={routeOpportunity} />,
    <Card {...perseverance} route={routePerseverance} />,
    <Card {...spirit} route={routeSpirit} />,
  ];
  return (
    <>
      <header style={{ textAlign: 'center' }}>
        <h1>Exploration rovers:</h1>
      </header>
      <div style={SliderContainer}>
        <Carousel slides={slides} interval={1000} />
      </div>
    </>
  );
};

export default CardSlider;
