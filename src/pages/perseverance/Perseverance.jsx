import LayoutRoverPage from '../../components/LayoutRover/LayoutRoverPage';

const Perseverance = () => {
  const rover = {
    name: 'Perseverance',
    iframe: 'https://mars.nasa.gov/gltf_embed/25042',
  };
  return (
    <div>
      <LayoutRoverPage {...rover} />
    </div>
  );
};
export default Perseverance;
