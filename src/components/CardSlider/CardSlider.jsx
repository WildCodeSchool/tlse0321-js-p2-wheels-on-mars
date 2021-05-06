import { Carousel } from '3d-react-carousal';
import { useHistory } from 'react-router-dom';
import Card from './Card';

const opportunity = require('../../constants/OPPORTUNITY_ROVER_3D_URL');
const curiosity = require('../../constants/CURIOSITY_ROVER_3D_URL');
const perseverance = require('../../constants/PERSEVERANCE_ROVER_3D_URL');
const spirit = require('../../constants/SPIRIT_ROVER_3D_URL');

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
