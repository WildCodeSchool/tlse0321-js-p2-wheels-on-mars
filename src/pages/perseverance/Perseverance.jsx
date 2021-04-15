import LayoutRoverPage from '../../components/Layout-Rover/LayoutRoverPage';

const Perseverance = () => {
  const rover = {
    name: 'Perseverance',
  };
  return (
    <div>
      <LayoutRoverPage {...rover} />
    </div>
  );
};
export default Perseverance;
