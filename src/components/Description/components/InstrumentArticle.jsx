import { Paper, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImageMediaCard from './ImageMediaCard';

const useStyles = makeStyles({
  textContent: {
    textAlign: 'start',
    margin: '1rem',
  },
});

const InstrumentArticle = ({ instruments }) => {
  const classes = useStyles();
  const camera1 = instruments.cameras.cam1;
  const camera2 = instruments.cameras.cam2;
  const camera3 = instruments.cameras.cam3;
  const camera4 = instruments.cameras.cam4;
  return (
    <Paper elevation={0}>
      <Container>
        <Typography variant="h5" className={classes.textContent}>
          What are Science Instruments?
        </Typography>
        <Typography variant="body1" className={classes.textContent}>
          Science instruments are state-of-the-art tools for acquiring
          information about Martian geology, atmosphere, environmental
          conditions, and potential biosignatures.
        </Typography>
        <img
          src={instruments.img}
          alt="rover"
          style={{ height: 'auto', width: '100%' }}
        />
        <Typography variant="h5" className={classes.textContent}>
          Technologies on Board :
        </Typography>
        <Typography variant="body1" className={classes.textContent}>
          Technology development makes missions possible. Each Mars mission is
          part of a continuing chain of innovation. Each relies on past missions
          for proven technologies and contributes its own innovations to future
          missions. This chain allows NASA to push the boundaries of what is
          currently possible, while still relying on proven technologies.
        </Typography>
        <ImageMediaCard
          name={camera1.name}
          image={camera1.img}
          txt={camera1.text}
        />
        <ImageMediaCard
          name={camera2.name}
          image={camera2.img}
          txt={camera2.text}
        />
        <ImageMediaCard
          name={camera3.name}
          image={camera3.img}
          txt={camera3.text}
        />
        <ImageMediaCard
          name={camera4.name}
          image={camera4.img}
          txt={camera4.text}
        />
      </Container>
    </Paper>
  );
};

export default InstrumentArticle;
