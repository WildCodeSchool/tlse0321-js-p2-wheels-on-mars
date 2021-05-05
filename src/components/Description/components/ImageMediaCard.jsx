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
    maxWidth: '60%',
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

export default function ImgMediaCard({ name, image, txt }) {
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card className={isMatch ? classes.cardResponsive : classes.card}>
      <CardMedia
        component="img"
        alt={name}
        height="100%"
        image={image}
        title={name}
      />
      <CardActionArea className={classes.cardContent}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" component="p">
            {txt}
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
