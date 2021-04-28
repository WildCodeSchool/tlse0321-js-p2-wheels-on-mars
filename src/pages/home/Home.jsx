import Card from '../../components/CardSlider/Card';

const opportunity = {
  name: 'Opportunity',
  img:
    'https://cdn.radiofrance.fr/s3/cruiser-production/2019/02/bb2fa6fd-80f1-4777-8fcb-9644cd45ac98/1136_000_1de43e.jpg',
};

const Home = () => (
  <>
    <Card {...opportunity} />
  </>
);

export default Home;
