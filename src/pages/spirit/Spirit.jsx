import LayoutRoverPage from '../../components/LayoutRover/LayoutRoverPage';

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
