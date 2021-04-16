import LayoutRoverPage from '../../components/LayoutRover/LayoutRoverPage';

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
