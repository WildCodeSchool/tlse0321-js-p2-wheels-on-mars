import './pictureCard.css';

const PictureCard = ({ rover }) => (
  <li className="card">
    <img src={rover.img_src} alt={rover.Id} />
    <div className="data-container">
      <ul>
        <li>{rover.rover.name}</li>
        <li>{rover.camera.full_name}</li>
        <li>Sol : {rover.sol}</li>
        <li>Earth_date : {rover.earth_date}</li>
      </ul>
    </div>
  </li>
);

export default PictureCard;
