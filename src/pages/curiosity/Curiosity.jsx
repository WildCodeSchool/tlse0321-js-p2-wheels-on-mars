import LayoutRoverPage from '../../components/LayoutRover/LayoutRoverPage';
import data from '../../dto.json';

const roversData = data.rovers[0].curiosity;

const Curiosity = () => (
  <div>
    <LayoutRoverPage {...roversData} />
  </div>
);

export default Curiosity;
