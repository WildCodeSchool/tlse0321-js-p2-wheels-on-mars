import {
  Paper, Typography, Container, Avatar, Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    border: 'solid 6px #13103C',
  },
  textStart: {
    textAlign: 'start',
  },
  box: {
    backgroundColor: '#13103C',
    padding: '1rem',
    color: '#fff',
  },
  img: {
    height: 'auto',
    width: '100%',
  },
}));
const ScienceArticle = () => {
  const classes = useStyles();
  return (
    <Paper elevation={0}>
      <Container>
        <Typography variant="body1" className={classes.textStart}>
          Perseverance is set to explore Jezero crater. From orbit, this crater
          shows all the promising signs of a place that was likely friendly to
          life in the distant past. The rover’s goal is to study the site in
          detail for its past conditions and seek the very signs of past life.
          Its mission is to identify and collect the most compelling rock core
          and soil samples, which a future mission could retrieve and bring back
          to Earth for more detailed study. Perseverance will also test
          technologies needed for the future human and robotic exploration of
          Mars.
        </Typography>
        <img
          src="https://mars.nasa.gov/imgs/mars2020/science-overview-rover.jpg"
          alt="rover"
          className={classes.img}
        />
        <Typography variant="body1" className={classes.textStart}>
          Perseverance is set to explore Jezero crater. From orbit, this crater
          shows all the promising signs of a place that was likely friendly to
          life in the distant past. The rover’s goal is to study the site in
          detail for its past conditions and seek the very signs of past life.
          Its mission is to identify and collect the most compelling rock core
          and soil samples, which a future mission could retrieve and bring back
          to Earth for more detailed study. Perseverance will also test
          technologies needed for the future human and robotic exploration of
          Mars.
        </Typography>
        <Typography variant="h4">4 Goals</Typography>
        <Box display="flex" justifyContent="space-around">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Avatar
              className={classes.large}
              src="https://images.unsplash.com/photo-1521401661174-c6ef32c9dfea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            />
            <Typography variant="h5">Geology</Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Avatar
              className={classes.large}
              src="https://images.unsplash.com/photo-1576158114131-f211996e9137?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <Typography variant="h5">Geology</Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Avatar
              className={classes.large}
              src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <Typography variant="h5">Geology</Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Avatar
              className={classes.large}
              src="https://images.unsplash.com/photo-1541873676-a18131494184?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=661&q=80"
            />
            <Typography variant="h5">Geology</Typography>
          </Box>
        </Box>
        <Paper elevation={3} className={classes.box}>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Typography
                variant="h4"
                style={{ padding: '1rem', textAlign: 'start' }}
              >
                Geology goal:
              </Typography>
              <Typography
                variant="body1"
                style={{ padding: '1rem', textAlign: 'start' }}
              >
                Petit poney, petit poney Tu es tout gris et tout petit Petit
                poney, petit poney Petit poney, petit poney Tu es tout gris et
                tout petit Petit poney, petit poney Tu gambades dans les prés
                Sans te soucier du temps qui passe Petit poney, petit poney La
                nuit qui tombe sur les prés C&#39est aussi ça la vie qui passe
                Petit poney, petit poney Petit poney, petit poney Tu es tout
                gris et tout petit Petit poney, petit poney Petit poney, petit
                poney Tu es tout gris et tout petit Petit poney, petit poney Tu
                gambades dans les prés Sans te soucier du temps qui passe Petit
                poney, petit poney La nuit qui tombe sur les prés C&#39est aussi
                ça la vie qui passe Petit poney, petit poney Petit poney, petit
                poney Tu es tout gris et tout petit Petit poney, petit poney
              </Typography>
            </Box>
            <Avatar
              className={classes.large}
              src="https://images.unsplash.com/photo-1541873676-a18131494184?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=661&q=80"
            />
          </Box>
        </Paper>
      </Container>
    </Paper>
  );
};

export default ScienceArticle;
