import ImageSlider from './ImageSlider';
import data from '../../dto.json';

const sliderData = data.rovers[0].traverseMap;

function RoadMap() {
  return <ImageSlider slides={sliderData} />;
}

export default RoadMap;
