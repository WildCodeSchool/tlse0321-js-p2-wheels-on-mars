import axios from 'axios';
import { useEffect, useState } from 'react';

const HeroBanner = ({ name }) => {
  const [infosRover, setInfosRover] = useState([]);
  useEffect(() => {
    axios
      .get(`https://mars-photos.herokuapp.com/api/v1/manifests/${name}`)
      .then((response) => response.data)
      .then((data) => {
        // console.log(data.photo_manifest);
        setInfosRover(data.photo_manifest);
      });
  }, []);
  return (
    <>
      <section className="hero-container">
        <h1>{name}</h1>
        <iframe
          src="https://mars.nasa.gov/layout/embed/model/?s=3&rotate=true"
          title="rover"
          width="800"
          height="450"
          scrolling="no"
          frameBorder="0"
          allowFullScreen
        />
        <div id="status-info">
          <ul>
            <li>Status :{infosRover.status}</li>
            <li>Launch date :{infosRover.launch_date}</li>
            <li>Landind date:{infosRover.landing_date}</li>
            <li>Time on mars:{infosRover.max_sol}</li>
            <li>Pictures took:{infosRover.total_photos}</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
