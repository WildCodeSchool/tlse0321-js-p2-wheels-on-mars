import LayoutRoverPage from '../../components/LayoutRover/LayoutRoverPage';

const PERSEVERANCE_ROVER_3D_URL = require('../../constants/PERSEVERANCE_ROVER_3D_URL');

const Perseverance = () => (
  <div>
    <LayoutRoverPage {...PERSEVERANCE_ROVER_3D_URL} />
  </div>
);
export default Perseverance;
