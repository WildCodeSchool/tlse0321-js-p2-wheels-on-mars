import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {
  Paper,
  Container,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import Article from './Article';

const useStyles = makeStyles({
  containe: {
    backgroundColor: '#fff',
  },
  box: {
    backgroundColor: '#13103C',
    padding: '1rem',
    color: '#fff',
  },
  card: {
    float: 'right',
    minWidth: 200,
    maxWidth: 300,
    margin: '1rem',
    textAlign: 'center',
    backgroundColor: ' #fff',
    transition: '0.3s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
    },
    color: '#13103C',
  },
  cardTitle: {
    color: '#13103C',
    marginBottom: '2rem',
  },
  img1: {
    height: '40px',
    width: 'auto',
  },
  img2: {
    height: '60px',
    width: 'auto',
  },
});

const Missions = () => {
  const classes = useStyles();
  return (
    <>
      <header style={{ textAlign: 'center' }}>
        <h1>Mission overview</h1>
      </header>
      <Paper elevation={0}>
        <Container>
          <Box className={classes.box}>
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  className={classes.cardTitle}
                  variant="h5"
                  color="textSecondary"
                  gutterBottom
                >
                  <img
                    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/openmoji/272/ringed-planet_1fa90.png"
                    alt="planet"
                    className={classes.img1}
                  />
                  Quick Facts :
                </Typography>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignContent="center"
                >
                  <List dense="true">
                    <ListItem>
                      <ListItemText
                        primary="Mission Name: "
                        secondary="Mars 2020"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Main Job: "
                        secondary="Seek signs of ancient life and collect rock and soil samples"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Landing Site: "
                        secondary="Jezero Crater, Mars"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Mission Duration:"
                        secondary="At least one Mars year (about 687 Earth days)"
                      />
                    </ListItem>
                  </List>
                </Box>
                <Typography variant="body2" component="p">
                  <img
                    src="https://assets.stickpng.com/images/58429400a6515b1e0ad75acc.png"
                    alt="nasa-logo"
                    className={classes.img2}
                  />
                  <br />
                  `&quot;Space is still a high priority&quot;`
                </Typography>
              </CardContent>
            </Card>
            <Article />
          </Box>
        </Container>
      </Paper>
    </>
  );
};
export default Missions;
