import LayoutRoverPage from '../../components/LayoutRover/LayoutRoverPage';

const CURIOSITY_ROVER_3D_URL = require('../../constants/CURIOSITY_ROVER_3D_URL');

const Curiosity = () => (
  <div>
    <LayoutRoverPage {...CURIOSITY_ROVER_3D_URL} />
  </div>
);

export default Curiosity;
