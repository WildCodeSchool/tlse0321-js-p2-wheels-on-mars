import ScienceArticle from './ScienceArticle';

const Science = ({ science }) => (
  <>
    <header style={{ textAlign: 'center' }}>
      <h1>Science</h1>
    </header>
    <ScienceArticle science={science} />
  </>
);
export default Science;
