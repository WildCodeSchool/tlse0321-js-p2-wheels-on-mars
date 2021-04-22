// import Footer from '../Footer/Footer';
import HeroBanner from './HeroBanner';
// import Description from './Description';
// import RoadMap from '../RoadMap/RoadMap';
import Pictures from '../Pictures/Pictures';

const LayoutRoverPage = ({ name }) => (
  <div className="rover-page-container">
    <HeroBanner name={name} />
    {/* <Description /> */}
    {/* <RoadMap /> */}
    <Pictures name={name} />
    {/* <Footer />  */}
  </div>
);

export default LayoutRoverPage;
