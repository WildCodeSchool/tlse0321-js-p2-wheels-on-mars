import { useState, useEffect } from 'react';
import axios from 'axios';

const Card = ({
  name, img, text, route,
}) => {
  const [infosRover, setInfosRover] = useState([]);

  useEffect(() => {
    axios
      .get(`https://mars-photos.herokuapp.com/api/v1/manifests/${name}`)
      .then((response) => response.data)
      .then((data) => {
        setInfosRover(data.photo_manifest);
      });
  }, []);
  const CardContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: '300px',
    height: '500px',
    backgroundColor: '#fff',
    boxShadow: '12px 12px 2px 1px rgba(0, 0, 255, .2)',
  };
  const ImgCardHeader = {
    width: '100%',
    height: '40%',
    background: `url(${img})center`,
    backgroundSize: 'cover',
    margin: '0 0 ',
  };
  const CardTitle = {
    fontSize: '2rem',
    fontFamily: 'Rajdhani',
    fontWeight: '500',
    color: '#2e2c2c',
    margin: '0.5rem auto',
    padding: '0 0.5rem',
  };
  const CardInfos = {
    display: 'flex',
    flexDirection: 'row',
  };
  const CardText = {
    fontSize: '0.9rem',
    fontFamily: 'Rajdhani',
    fontWeight: 200,
    color: '#2e2c2c',
    margin: 0,
    padding: '0.5rem 1rem',
  };
  const CardStatus = {
    fontSize: '1rem',
    fontFamily: 'Rajdhani',
    fontWeight: 300,
    color: '#2e2c2c',
    margin: 0,
    padding: '0 1rem',
  };
  const CardButton = {
    height: 'auto',
    border: 'none',
    fontSize: '1rem',
    alignSelf: 'flex-end',
    justifyself: 'flex-end',
    margin: '0.8rem',
    padding: '0.5rem',
    fontFamily: 'Rajdhani',
    fontWeight: 400,
    backgroundColor: '#fff',
    color: '#2e2c2c',
  };

  return (
    <div style={CardContainer}>
      <div style={ImgCardHeader} />
      <h1 style={CardTitle}>{name}</h1>
      <div style={CardInfos}>
        <h2 style={CardStatus}>
          Status Mission : <strong>{infosRover.status}</strong>
        </h2>
        <h2 style={CardStatus}>
          Total Photos : <strong>{infosRover.total_photos}</strong>
        </h2>
      </div>
      <p style={CardText}>{text}</p>
      <button type="button" style={CardButton} onClick={route}>
        Read more ...
      </button>
    </div>
  );
};
export default Card;
