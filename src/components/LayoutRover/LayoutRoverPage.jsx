import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import Pictures from '../Pictures/Pictures';
import HeroBanner from './HeroBanner';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#13103B',
  },
  paper: {
    textAlign: 'center',
  },
  alignement: {
    textAlign: 'center',
  },
}));

const LayoutRoverPage = ({ name, iframe }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Box className={classes.alignement}>
            <HeroBanner name={name} iframe={iframe} />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Description</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>PictureSlider</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Pictures name={name} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default LayoutRoverPage;
