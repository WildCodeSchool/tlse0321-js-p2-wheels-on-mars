import './Home.css';
import Header from '../../components/Header/Header';

const Home = () => (
  <>
    <div className="container">
      <Header />
      <div className="homeMessage">
        <h2>Explore mars !</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          qui blanditiis a dolor illum laborum rem, dignissimos fuga, modi
          laboriosam nulla dicta consequuntur hic? Quod cum ipsa non blanditiis
          tempora!
        </p>
      </div>
    </div>
  </>
);

export default Home;
