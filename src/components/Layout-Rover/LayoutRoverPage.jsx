import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import HeroBanner from './HeroBanner';
import Description from './Description';
import PictureSlider from './PictureSlider';
import PicturesGallery from './PicturesGallery';

const LayoutRoverPage = () => (
  <div className="rover-page-">
    <Navigation />
    <HeroBanner />
    <Description />
    <PictureSlider />
    <PicturesGallery />
    <Footer />
  </div>
);

export default LayoutRoverPage;
