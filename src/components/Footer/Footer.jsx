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
import ListItemIcon from '@material-ui/core/ListItemIcon';
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
    float: 'right',
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
    justifyContent: 'space-between',
    aligntItems: 'center',
    flexWrap: 'nowrap',
    whiteSpace: 'nowrap',
    textAlign: 'center',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
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
              >
                <ListItemIcon>
                  <ListItemText>Home</ListItemText>
                </ListItemIcon>
              </ListItem>

              <ListItem
                component={Link}
                to="/perseverance"
                button
                className={classes.listItem}
              >
                <ListItemIcon>
                  <ListItemText>Perseverance</ListItemText>
                </ListItemIcon>
              </ListItem>

              <ListItem
                component={Link}
                to="/curiosity"
                button
                className={classes.listItem}
              >
                <ListItemIcon>
                  <ListItemText>Curiosity</ListItemText>
                </ListItemIcon>
              </ListItem>

              <ListItem
                component={Link}
                to="/opportunity"
                button
                className={classes.listItem}
              >
                <ListItemIcon>
                  <ListItemText>Opportunity</ListItemText>
                </ListItemIcon>
              </ListItem>

              <ListItem
                component={Link}
                to="/spirit"
                button
                className={classes.listItem}
              >
                <ListItemIcon>
                  <ListItemText>Spirit</ListItemText>
                </ListItemIcon>
              </ListItem>

              <ListItem button className={classes.listItem}>
                <ListItemIcon>
                  <ListItemText>The Team</ListItemText>
                </ListItemIcon>
              </ListItem>
              <Box className={classes.footerCopyright}>
                <Typography variant="body2" color="inherit">
                  ©2010-2020 Privacy-Terms
                </Typography>
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
          <Box className="secondCol">
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
            </Box>
            <Box className={classes.lastSection}>
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
