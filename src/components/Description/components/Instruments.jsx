import InstrumentArticle from './InstrumentArticle';

const Instruments = ({ technique }) => (
  <>
    <header style={{ textAlign: 'center' }}>
      <h1>Instruments</h1>
    </header>
    <InstrumentArticle instruments={technique} />
  </>
);
export default Instruments;
