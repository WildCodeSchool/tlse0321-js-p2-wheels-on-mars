import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    height: '300px',
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
    alignItems: 'center',
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
        width="50%"
        height="100%"
        alt={name}
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
      </CardActionArea>
    </Card>
  );
}
