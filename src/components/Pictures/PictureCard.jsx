import './pictureCard.css';

// display pictures and information about each rover.
const PictureCard = ({ rover }) => (
  <li className="card">
    <img src={rover.img_src} alt={rover.Id} />
    <div className="data-container">
      <ul>
        <li>{rover.rover.name}</li>
        <li>{rover.camera.full_name}</li>
        <li>Sol : {rover.sol}</li>
        <li>Earth date : {rover.earth_date}</li>
      </ul>
    </div>
  </li>
);

export default PictureCard;
