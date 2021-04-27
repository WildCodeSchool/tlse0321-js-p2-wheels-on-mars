import {
  Paper, Typography, Container, Avatar, Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const bullInfo = [
  {
    title: 'Geology Goal:',
    text:
      'The rovers are designed to study the rock record to reveal more about the geologic processes that created and modified the Martian crust and surface through time. Each layer of rock on the Martian surface contains a record of the environment in which it was formed. The rover seeks evidence of rocks that formed in water and that preserve evidence of organics, the chemical building blocks of life.',
  },
  {
    title: 'Climate Goal:',
    text:
      "Past Martian climate conditions are a focus of the Perseverance rover mission. The rover's instruments are looking for evidence of ancient habitable environments where microbial life could have existed in the past.",
  },
  {
    title: 'Biology samples:',
    text: `The rovers focuses on surface-based studies of the Martian environment, seeking preserved signs of biosignatures in rock samples that formed in ancient Martian environments with conditions that might have been favorable to microbial life.
    It is the first rover mission designed to seek signs of past microbial life. Earlier rovers first focused on and confirmed that Mars once had habitable conditions.`,
  },
  {
    title: 'Prepare human arrival on Mars:',
    text: `The rovers are demonstrating key technologies for using natural resources in the Martian environment for life support and fuel. It is also monitoring environmental conditions so mission planners understand better how to protect future human explorers.
    This science goal relates to national space policy for sending humans to Mars in the 2030s. Similar to the history of the exploration of Earth's moon, robotic missions to Mars provide a crucial understanding of the environment and test innovative technologies for future human exploration.
    Investments in Mars 2020 technologies include contributions from NASA's Human Exploration and Operations (HEO) Mission Directorate and Space Technology Program (STP) as part of NASA's long-term efforts to develop future capabilities for human space exploration.`,
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
  const [textValue, setTextValue] = useState(0);
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
        <Box display="flex" justifyContent="space-around" flexWrap="wrap" m={2}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Avatar
              onClick={() => setTextValue(0)}
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
              onClick={() => setTextValue(1)}
              className={classes.large}
              src="https://images.unsplash.com/photo-1576158114131-f211996e9137?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <Typography variant="h5" align="center">
              Climate
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Avatar
              onClick={() => setTextValue(2)}
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
              onClick={() => setTextValue(3)}
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
                {bullInfo[textValue].title}
              </Typography>
              <Typography
                variant="body1"
                style={{ padding: '1rem', textAlign: 'start' }}
              >
                {bullInfo[textValue].text}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Paper>
  );
};

export default ScienceArticle;
