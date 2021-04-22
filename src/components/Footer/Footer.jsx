import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Avatar } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logoInstagram from '../../assets/logos/logo-instagram1.png';
import logoFacebook from '../../assets/logos/logo-facebook1.png';
import logoTwitter from '../../assets/logos/logo-twiter1.png';
import logoLinkedin from '../../assets/logos/logo-linkedin.png';

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
    height: '100%',
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
  box: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    textAlign: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
  },
  contact: {
    padding: 30,
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
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#13103B' }}>
        <Toolbar className={classes.toolBar}>
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
                style={{ marginBottom: 5 }}
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

              <ListItem button className={classes.listItem}>
                <ListItemText>The Team</ListItemText>
              </ListItem>
              <Box className={classes.footerCopyright}>
                <ListItem className={classes.listItem}>
                  <ListItemText>©2010-2020</ListItemText>
                </ListItem>
                <ListItem button className={classes.listItem}>
                  <ListItemText>Privacy-Terms</ListItemText>
                </ListItem>
              </Box>
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
                Contact Nasa:
              </Typography>
              <Paper component="form" className={classes.root}>
                <InputBase
                  className={classes.input}
                  placeholder="@"
                  inputProps={{ 'aria-label': 'send' }}
                />
                <IconButton
                  type="submit"
                  className={classes.iconButton}
                  aria-label="send"
                >
                  <SendIcon />
                </IconButton>
              </Paper>
              <Typography variant="subtitle1" gutterBottom>
                Follow us:
              </Typography>
              <Box className={classes.box}>
                <li>
                  <a href="https://www.instagram.com">
                    <Avatar alt="instagram" src={logoInstagram} />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com">
                    <Avatar alt="twitter" src={logoTwitter} />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com">
                    <Avatar alt="facebook" src={logoFacebook} />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com">
                    <Avatar alt="linkedin" src={logoLinkedin} />
                  </a>
                </li>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
