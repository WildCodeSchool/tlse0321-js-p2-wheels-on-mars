import LayoutRoverPage from '../../components/Layout-Rover/LayoutRoverPage';

const Spirit = () => {
  const rover = {
    name: 'Spirit',
  };
  return (
    <div>
      <LayoutRoverPage {...rover} />
    </div>
  );
};

export default Spirit;
