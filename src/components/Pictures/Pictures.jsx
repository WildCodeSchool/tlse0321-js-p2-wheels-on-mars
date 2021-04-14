import axios from 'axios';
import { useState } from 'react';

const Pictures = () => {
  const [result, setResult] = useState([]);
  const fetchPictures = () => {
    const url =
      'https://mars-photos.herokuapp.com/api/v1/rovers/Perseverance/latest_photos?';
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        console.log(data.latest_photos);
        setResult(data.latest_photos);
      });
    //       const roverHtml = `
    //     <h1>${rover[0].name}</h1>
    //     `;
    //       document.getElementById('Rover').innerHTML = roverHtml;
    //     });
  };
  fetchPictures();
  return (
    <>
      <h1>{result}</h1>
    </>
  );
};

export default Pictures;
