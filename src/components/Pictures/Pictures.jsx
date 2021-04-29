import axios from 'axios';
import { useEffect, useState } from 'react';
import PictureCard from './PictureCard';
import './picture.css';

// This components get all pictures, filter and send the result in the "PictureCard" component.
const Pictures = ({ name }) => {
  const [totalPicture, setTotalPicture] = useState([]);
  const [limitedPicture, setLimitedPicture] = useState([]);
  const [rangeValue, setRangeValue] = useState(5);
  const [solInputValue, setSolInputValue] = useState(55);

  useEffect(() => {
    axios
      .get(
        `http://mars-photos.herokuapp.com/api/v1/rovers/${name}/photos?sol=${solInputValue}`,
      )
      .then((res) => res.data)
      .then((data) => {
        setTotalPicture(data.photos);
      });
    const limitPicture = () => {
      totalPicture.length = rangeValue;
      setLimitedPicture(totalPicture);
    };
    limitPicture();
  }, [totalPicture]);

  return (
    <div className="pictures">
      <h2>Rover pictures</h2>
      <div>
        <form>
          <label htmlFor="limitPicture" className="limitPictureLabel">
            <span>Max pictures {rangeValue} :</span>
            <input
              id="limitPicture"
              type="range"
              min="1"
              max="350"
              step="1"
              value={rangeValue}
              text-value={rangeValue}
              onChange={(e) => setRangeValue(e.target.value)}
            />
          </label>
          <label htmlFor="solNumber" className="solNumber">
            <span>SOL :</span>
            <input
              type="number"
              value={solInputValue}
              onChange={(e) => setSolInputValue(e.target.value)}
            />
          </label>
        </form>
      </div>
      <ul className="pictures-list">
        {limitedPicture
          .filter((rover) => rover.sol <= solInputValue)
          .map((rover) => (
            <PictureCard rover={rover} key={rover.id} />
          ))}
      </ul>
    </div>
  );
};
export default Pictures;
