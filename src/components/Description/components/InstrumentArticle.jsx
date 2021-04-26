import { Paper, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImageMediaCard from './ImageMediaCard';

const useStyles = makeStyles({
  textContent: {
    textAlign: 'start',
  },
});

const InstrumentArticle = () => {
  const classes = useStyles();
  return (
    <Paper elevation={0}>
      <Container>
        <Typography variant="h4" className={classes.textContent}>
          What are Science Instruments?
        </Typography>
        <Typography variant="body1" className={classes.textContent}>
          Science instruments are state-of-the-art tools for acquiring
          information about Martian geology, atmosphere, environmental
          conditions, and potential biosignatures.
        </Typography>
        <img
          src="https://mars.nasa.gov/system/resources/detail_files/25045_Perseverance_Mars_Rover_Instrument_Labels-web.jpg"
          alt="rover"
          style={{ height: 'auto', width: '100%' }}
        />
        <Typography variant="h4" className={classes.textContent}>
          Technologies on Board :
        </Typography>
        <ImageMediaCard />
        <ImageMediaCard />
        <ImageMediaCard />
        <ImageMediaCard />
      </Container>
    </Paper>
  );
};

export default InstrumentArticle;