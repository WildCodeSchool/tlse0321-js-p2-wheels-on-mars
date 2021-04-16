import LayoutRoverPage from '../../components/LayoutRover/LayoutRoverPage';

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
