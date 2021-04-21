import LayoutRoverPage from '../../components/LayoutRover/LayoutRoverPage';

const Opportunity = () => {
  const rover = {
    name: 'Opportunity',
    iframe: 'https://mars.nasa.gov/layout/embed/model/?s=3&rotate=true',
  };
  return (
    <div>
      <LayoutRoverPage {...rover} />
    </div>
  );
};
export default Opportunity;
