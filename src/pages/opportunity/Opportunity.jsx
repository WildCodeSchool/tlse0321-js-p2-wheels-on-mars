import LayoutRoverPage from '../../components/LayoutRover/LayoutRoverPage';

const Opportunity = () => {
  const rover = {
    name: 'Opportunity',
  };
  return (
    <div>
      <LayoutRoverPage {...rover} />
    </div>
  );
};
export default Opportunity;
