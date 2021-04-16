// import Footer from '../Footer/Footer';
import HeroBanner from './HeroBanner';
// import Description from './Description';
// import PictureSlider from './PictureSlider';
import Pictures from '../Pictures/Pictures';

const LayoutRoverPage = ({ name }) => (
  <div className="rover-page-container">
    <HeroBanner name={name} />
    {/* <Description />
    <PictureSlider /> */}
    <Pictures name={name} />
    {/* <Footer />  */}
  </div>
);

export default LayoutRoverPage;
