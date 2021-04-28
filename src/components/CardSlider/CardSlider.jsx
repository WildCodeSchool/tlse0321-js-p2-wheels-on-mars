import { Carousel } from '3d-react-carousal';
import Card from './Card';

const CardSlider = () => {
  const slides = [<Card />, <Card />, <Card />, <Card />];
  return (
    <div>
      <Carousel slides={slides} interval={1000} />
    </div>
  );
};

export default CardSlider;
