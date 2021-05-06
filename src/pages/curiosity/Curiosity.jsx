import LayoutRoverPage from '../../components/LayoutRover/LayoutRoverPage';
import data from '../../dto.json';

const { curiosity } = data.rovers[0];

const Curiosity = () => (
  <div>
    <LayoutRoverPage {...curiosity} />
  </div>
);

export default Curiosity;
