import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Hero from './Hero';

const LayoutRoverPage = () => (
  <div className="rover-page-">
    <Navigation />
    <Hero />
    {/* <Description />
    <PictureSlider />
    <PicturesGallery /> */}
    <Footer />
  </div>
);

export default LayoutRoverPage;
