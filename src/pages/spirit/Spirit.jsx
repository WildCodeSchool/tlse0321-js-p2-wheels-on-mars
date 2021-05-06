import LayoutRoverPage from '../../components/LayoutRover/LayoutRoverPage';
import data from '../../dto.json';

const { spirit } = data.rovers[0];

const Spirit = () => (
  <div>
    <LayoutRoverPage {...spirit} />
  </div>
);

export default Spirit;
