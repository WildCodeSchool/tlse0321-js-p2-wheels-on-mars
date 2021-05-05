import {
  Paper,
  Typography,
  Container,
  Avatar,
  Box,
  ButtonBase,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

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

const ScienceArticle = ({ science }) => {
  const bullInfo = [
    {
      title: science.goals.goal1,
      text: science.goals.text1,
    },
    {
      title: science.goals.goal2,
      text: science.goals.text2,
    },
    {
      title: science.goals.goal3,
      text: science.goals.text3,
    },
    {
      title: science.goals.goal4,
      text: science.goals.text4,
    },
  ];

  const [textValue, setTextValue] = useState(0);
  const classes = useStyles();
  return (
    <Paper elevation={0}>
      <Container>
        <Typography variant="body1" className={classes.paragraph}>
          {science.text1}
        </Typography>
        <img src={science.img} alt="rover" className={classes.img} />
        <Typography variant="body1" className={classes.paragraph}>
          {science.text2}
        </Typography>
        <Typography variant="h4" align="center">
          4 Goals
        </Typography>
        <Box display="flex" justifyContent="space-around" flexWrap="wrap" m={2}>
          <ButtonBase
            centerRipple="true"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Avatar
              onClick={() => setTextValue(0)}
              className={classes.large}
              src="https://images.unsplash.com/photo-1521401661174-c6ef32c9dfea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            />
            <Typography variant="h5" align="center">
              {science.goals.goal1}
            </Typography>
          </ButtonBase>
          <ButtonBase
            centerRipple="true"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Avatar
              onClick={() => setTextValue(1)}
              className={classes.large}
              src="https://images.unsplash.com/photo-1576158114131-f211996e9137?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <Typography variant="h5" align="center">
              {science.goals.goal2}
            </Typography>
          </ButtonBase>
          <ButtonBase
            centerRipple="true"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Avatar
              onClick={() => setTextValue(2)}
              className={classes.large}
              src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <Typography variant="h5" align="center">
              {science.goals.goal3}
            </Typography>
          </ButtonBase>
          <ButtonBase
            centerRipple="true"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Avatar
              onClick={() => setTextValue(3)}
              className={classes.large}
              src="https://images.unsplash.com/photo-1541873676-a18131494184?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=661&q=80"
            />
            <Typography variant="h5" align="center">
              {science.goals.goal4}
            </Typography>
          </ButtonBase>
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
