import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    height: '200px',
    maxWidth: '80%',
    display: 'flex',
    margin: '2rem auto',
    color: '#fff',
  },
  cardResponsive: {
    height: 'auto',
    maxWidth: '80%',
    display: 'flex',
    flexDirection: 'column',
    margin: '2rem auto',
    color: '#fff',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'start',
    backgroundColor: '#13103C',
  },
  cardButton: {
    alignSelf: 'flex-end',
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card className={isMatch ? classes.cardResponsive : classes.card}>
      <CardMedia
        component="img"
        alt="Space"
        height="100%"
        image="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
        title="Space"
      />
      <CardActionArea className={classes.cardContent}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Space
          </Typography>
          <Typography variant="body2" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions className={classes.cardButton}>
          <Button size="small" style={{ color: '#fff' }}>
            Learn More ...
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
