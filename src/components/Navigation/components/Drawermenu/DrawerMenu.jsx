import { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { IconContext } from 'react-icons';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { FaRobot } from 'react-icons/fa';

const useStyles = makeStyles({
  fullList: {
    width: '10rem',
    padding: '0',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'center',
  },
  headListItem: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2rem 0',
  },
});
const DrawerMenu = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        anchor="right"
        onClose={() => setOpenDrawer(!openDrawer)}
        open={openDrawer}
      >
        <Typography className={classes.headListItem}>
          <IconContext.Provider
            value={{
              size: '2rem',
              color: '#941b0c',
              className: 'robot',
            }}
          >
            <FaRobot />
          </IconContext.Provider>
        </Typography>

        <List className={classes.fullList}>
          <ListItem divider button className={classes.listItem}>
            <ListItemIcon>
              <ListItemText>Curiosity</ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem divider button className={classes.listItem}>
            <ListItemIcon>
              <ListItemText>Opportunity</ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem divider button className={classes.listItem}>
            <ListItemIcon>
              <ListItemText>Perseverance</ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem divider button className={classes.listItem}>
            <ListItemIcon>
              <ListItemText>Spirit</ListItemText>
            </ListItemIcon>
          </ListItem>

          {/* <Button
            area-controls="menu"
            variant="contained"
            color="secondary"
            size="large"
          >
            Explore
          </Button> */}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <IconContext.Provider
          value={{
            size: '2rem',
            color: '#941b0c',
            className: 'Menu-icon',
          }}
        >
          <HiOutlineMenuAlt3 />
        </IconContext.Provider>
      </IconButton>
    </>
  );
};

export default DrawerMenu;
