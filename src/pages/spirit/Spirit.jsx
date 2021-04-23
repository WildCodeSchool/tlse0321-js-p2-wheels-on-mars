import LayoutRoverPage from '../../components/LayoutRover/LayoutRoverPage';

const Spirit = () => {
  const rover = {
    name: 'Spirit',
    iframe: 'https://mars.nasa.gov/layout/embed/model/?s=3&rotate=true',
  };
  return (
    <div>
      <LayoutRoverPage {...rover} />
    </div>
  );
};

export default Spirit;
