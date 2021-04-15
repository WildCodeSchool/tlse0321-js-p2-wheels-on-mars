import LayoutRoverPage from '../../components/Layout-Rover/LayoutRoverPage';

const Curiosity = () => {
  const rover = {
    name: 'Curiosity',
  };
  return (
    <div>
      <LayoutRoverPage {...rover} />
    </div>
  );
};

export default Curiosity;
