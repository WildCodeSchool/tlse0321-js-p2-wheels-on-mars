import {
  Paper, Typography, Container, Avatar, Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const bullInfo = [
  {
    title: 'Geology Goal:',
    text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quibusdam rerum natus. Inventore cum laudantium doloremque vel dignissimos cumque saepe dolor expedita, et, enim ab voluptate magni ipsum temporibus quo?
    Similique, ad quos? Repellat nisi sunt earum repellendus voluptate sed ut laboriosam dicta. Quisquam voluptates deleniti, aliquam quia temporibus consequuntur itaque ducimus dolorum, atque odit quod, iusto repellendus placeat illum?"`,
  },
  {
    title: 'Topology Goal:',
    text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quibusdam rerum natus. Inventore cum laudantium doloremque vel dignissimos cumque saepe dolor expedita, et, enim ab voluptate magni ipsum temporibus quo?
    Similique, ad quos? Repellat nisi sunt earum repellendus voluptate sed ut laboriosam dicta. Quisquam voluptates deleniti, aliquam quia temporibus consequuntur itaque ducimus dolorum, atque odit quod, iusto repellendus placeat illum?"`,
  },
  {
    title: 'Biology samples:',
    text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quibusdam rerum natus. Inventore cum laudantium doloremque vel dignissimos cumque saepe dolor expedita, et, enim ab voluptate magni ipsum temporibus quo?
    Similique, ad quos? Repellat nisi sunt earum repellendus voluptate sed ut laboriosam dicta. Quisquam voluptates deleniti, aliquam quia temporibus consequuntur itaque ducimus dolorum, atque odit quod, iusto repellendus placeat illum?"`,
  },
  {
    title: 'Prepare human arrival on Mars:',
    text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quibusdam rerum natus. Inventore cum laudantium doloremque vel dignissimos cumque saepe dolor expedita, et, enim ab voluptate magni ipsum temporibus quo?
    Similique, ad quos? Repellat nisi sunt earum repellendus voluptate sed ut laboriosam dicta. Quisquam voluptates deleniti, aliquam quia temporibus consequuntur itaque ducimus dolorum, atque odit quod, iusto repellendus placeat illum?"`,
  },
];

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
  paragraph: {
    textAlign: 'start',
    padding: '1rem',
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
        <Typography variant="body1" className={classes.paragraph}>
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
        <Typography variant="body1" className={classes.paragraph}>
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
        <Typography variant="h4" align="center">
          4 Goals
        </Typography>
        <Box display="flex" justifyContent="space-around" m={2}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Avatar
              className={classes.large}
              src="https://images.unsplash.com/photo-1521401661174-c6ef32c9dfea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            />
            <Typography variant="h5" align="center">
              Geology
            </Typography>
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
            <Typography variant="h5" align="center">
              Topography
            </Typography>
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
            <Typography variant="h5" align="center">
              Biology
            </Typography>
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
            <Typography variant="h5" align="center">
              Human arrival
            </Typography>
          </Box>
        </Box>
        <Paper elevation={3} className={classes.box}>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Typography
                variant="h4"
                style={{ padding: '1rem', textAlign: 'start' }}
              >
                {bullInfo[2].title}
              </Typography>
              <Typography
                variant="body1"
                style={{ padding: '1rem', textAlign: 'start' }}
              >
                {bullInfo[2].text}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Paper>
  );
};

export default ScienceArticle;
