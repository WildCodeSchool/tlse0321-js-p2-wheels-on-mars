import LayoutRoverPage from '../../components/Layout-Rover/LayoutRoverPage';

const Perseverance = () => {
  const rover = {
    name: 'Spirit',
  };
  return (
    <div>
      <LayoutRoverPage {...rover} />
    </div>
  );
};
export default Perseverance;
