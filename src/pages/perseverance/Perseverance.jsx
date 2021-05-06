import LayoutRoverPage from '../../components/LayoutRover/LayoutRoverPage';
import data from '../../dto.json';

const { perseverance } = data.rovers[0];

const Perseverance = () => (
  <div>
    <LayoutRoverPage {...perseverance} />
  </div>
);
export default Perseverance;
