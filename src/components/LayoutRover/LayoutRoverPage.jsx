// import Footer from '../Footer/Footer';
// import Description from './Description';
// import PictureSlider from './PictureSlider';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Pictures from '../Pictures/Pictures';
import HeroBanner from './HeroBanner';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const LayoutRoverPage = ({ name }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <HeroBanner name={name} />
          </Paper>
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
