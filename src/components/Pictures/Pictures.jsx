import axios from 'axios';
import { useEffect, useState } from 'react';

// ce composant est censee recup les donnes des photo des rover
const Pictures = ({ name }) => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://mars-photos.herokuapp.com/api/v1/rovers/${name}/latest_photos`,
      )
      .then((response) => response.data)
      .then((data) => {
        setResult(data.latest_photos);
      });
  }, []);
  return (
    <>
      {result.map((photo) => (
        <img src={photo.img_src} alt={photo.Id} />
      ))}
    </>
  );
};
export default Pictures;
