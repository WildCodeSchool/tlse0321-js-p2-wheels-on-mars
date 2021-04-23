import HeroBanner from './HeroBanner';
import RoadMap from '../RoadMap/RoadMap';
import Pictures from '../Pictures/Pictures';

const LayoutRoverPage = ({ name }) => (
  <div className="rover-page-container">
    <HeroBanner name={name} />
    <RoadMap />
    <Pictures name={name} />
  </div>
);

export default LayoutRoverPage;
