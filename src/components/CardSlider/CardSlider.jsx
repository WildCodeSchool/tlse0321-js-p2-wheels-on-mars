import { Carousel } from '3d-react-carousal';
import Card from './Card';

const opportunity = require('../../constants/OPPORTUNITY_ROVER_3D_URL');
const curiosity = require('../../constants/CURIOSITY_ROVER_3D_URL');
const perseverance = require('../../constants/PERSEVERANCE_ROVER_3D_URL');
const spirit = require('../../constants/SPIRIT_ROVER_3D_URL');

const CardSlider = () => {
  const SliderContainer = {
    margin: '2rem auto',
  };

  const slides = [
    <Card {...curiosity} />,
    <Card {...opportunity} />,
    <Card {...perseverance} />,
    <Card {...spirit} />,
  ];

  return (
    <div style={SliderContainer}>
      <Carousel slides={slides} interval={1000} />
    </div>
  );
};

export default CardSlider;
