import ImageSlider from './ImageSlider';

const SliderData = require('../../constants/ROADMAP_DATA');

function RoadMap() {
  return <ImageSlider slides={SliderData} />;
}

export default RoadMap;
