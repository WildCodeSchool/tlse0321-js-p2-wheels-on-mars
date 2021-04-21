import LayoutRoverPage from '../../components/LayoutRover/LayoutRoverPage';

const Curiosity = () => {
  const rover = {
    name: 'Curiosity',
    iframe: 'https://mars.nasa.gov/gltf_embed/24584',
  };
  return (
    <div>
      <LayoutRoverPage {...rover} />
    </div>
  );
};

export default Curiosity;
