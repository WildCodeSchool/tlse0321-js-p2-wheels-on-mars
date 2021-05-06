import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Avatar } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import logoGithub from '../../assets/logos/GitHub-Logo.png';
import logoWild from '../../assets/logos/logo-wild.png';
import logoNasa from '../../assets/logos/NASA_logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: theme.spacing(5),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 'auto',
    margin: 4,
    background: 'black',
  },
  fullList: {
    width: '10rem',
    padding: '0',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    flexWrap: 'nowrap',
    whiteSpace: 'nowrap',
  },
  listStyle: {
    listStyle: 'none',
    textAlign: 'center',
  },
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  contact: {
    padding: 30,
    textAlign: 'center',
  },
  lastSection: {
    alignItems: 'start',
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  footerCopyright: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    flexWrap: 'nowrap',
    whiteSpace: 'nowrap',
    aligntItems: 'baselin',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

const Footer = () => {
  const classes = useStyles();
  const themeUse = useTheme();
  const isMatch = useMediaQuery(themeUse.breakpoints.down('sm'));
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#13103B' }}>
        <Box className={classes.container}>
          <Toolbar
            className={classes.toolBar}
            style={{ flexDirection: `${isMatch ? 'column' : 'row'}` }}
          >
            <Box>
              <Divider
                className={classes.divider}
                position="inherit"
                orientation="vertical"
              />
            </Box>
            <Box className="secondCol">
              <List className={classes.fullList}>
                <ListItem
                  component={Link}
                  to="/"
                  button
                  className={classes.listItem}
                  style={{ marginTop: 30 }}
                >
                  <ListItemText>Home</ListItemText>
                </ListItem>
                <ListItem
                  component={Link}
                  to="/perseverance"
                  button
                  className={classes.listItem}
                >
                  <ListItemText>Perseverance</ListItemText>
                </ListItem>

                <ListItem
                  component={Link}
                  to="/curiosity"
                  button
                  className={classes.listItem}
                >
                  <ListItemText>Curiosity</ListItemText>
                </ListItem>

                <ListItem
                  component={Link}
                  to="/opportunity"
                  button
                  className={classes.listItem}
                >
                  <ListItemText>Opportunity</ListItemText>
                </ListItem>

                <ListItem
                  component={Link}
                  to="/spirit"
                  button
                  className={classes.listItem}
                >
                  <ListItemText>Spirit</ListItemText>
                </ListItem>

                <ListItem
                  component={Link}
                  to="/aboutus"
                  button
                  className={classes.listItem}
                  style={{ marginBottom: isMatch ? 0 : 30 }}
                >
                  <ListItemText>About Us</ListItemText>
                </ListItem>
              </List>
            </Box>
            <Box>
              <Divider
                className={classes.divider}
                position="inherit"
                orientation="vertical"
              />
            </Box>
            <Box className={classes.secondCol}>
              <Box className={classes.contact}>
                <Typography variant="subtitle1" gutterBottom>
                  Careers at NASA !
                  <a
                    href="https://www.nasa.gov/careers"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.flexCenter}
                  >
                    <Avatar alt="wild code school" src={logoNasa} />
                  </a>
                </Typography>

                <Typography variant="subtitle1" gutterBottom>
                  Our school :
                  <a
                    href="https://www.wildcodeschool.com/fr-FR"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.flexCenter}
                  >
                    <Avatar alt="wild code school" src={logoWild} />
                  </a>
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Fork Me ! :
                  <a
                    href="https://github.com/WildCodeSchool/tlse0321-js-p2-wheels-on-mars"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.flexCenter}
                  >
                    <Avatar alt="github" src={logoGithub} />
                  </a>
                </Typography>
              </Box>
            </Box>
          </Toolbar>
          <Box className={classes.footerCopyright}>
            <Typography>Â©2021 Nasa Wilders</Typography>
          </Box>
        </Box>
      </AppBar>
    </div>
  );
};

export default Footer;
