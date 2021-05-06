import LayoutRoverPage from '../../components/LayoutRover/LayoutRoverPage';
import data from '../../dto.json';

const { opportunity } = data.rovers[0];

const Opportunity = () => (
  <div>
    <LayoutRoverPage {...opportunity} />
  </div>
);
export default Opportunity;
