const Card = () => {
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
    background: 'url("#")center',
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
      <h1 style={CardTitle}>Rover Name</h1>
      <div style={CardInfos}>
        <h2 style={CardStatus}>
          Status Mission : <strong>Active</strong>
        </h2>
        <h2 style={CardStatus}>
          Location : <strong>ISS</strong>
        </h2>
      </div>
      <p style={CardText}>
        Le Crew Dragon est une capsule habitée de SpaceX, un dérivé de la
        capsule Dragon utilisée pour le ravitaillement de la Station spatiale
        internationale. ... Il peut transporter 6 tonnes de charge utile à
        destination de la Station spatiale internationale et redescendre 3
        tonnes de fret.
      </p>
      <h2 style={CardStatus}>
        Article :{' '}
        <a href="https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow">
          This is a link
        </a>
      </h2>
      <button type="button" style={CardButton}>
        Read more ...
      </button>
    </div>
  );
};
export default Card;
