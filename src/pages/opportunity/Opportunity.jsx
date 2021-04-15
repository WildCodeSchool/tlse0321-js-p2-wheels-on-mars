import LayoutRoverPage from '../../components/Layout-Rover/LayoutRoverPage';

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
