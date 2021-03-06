import { Link } from 'react-router-dom';
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
  const [selected, setSelected] = useState(null);

  const handleClickSelect = (e, newValue) => {
    setSelected(newValue);
  };
  return (
    <>
      <Drawer
        anchor="right"
        onClose={() => setOpenDrawer(!openDrawer)}
        open={openDrawer}
      >
        <Typography
          className={classes.headListItem}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <IconContext.Provider
            value={{
              size: '2rem',
              color: '#13103C',
              className: 'robot',
            }}
          >
            <FaRobot />
          </IconContext.Provider>
        </Typography>

        <List
          className={classes.fullList}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <ListItem
            component={Link}
            to="/curiosity"
            divider
            button
            className={classes.listItem}
            selected={selected === 0}
            onClick={(e) => handleClickSelect(e, 0)}
          >
            <ListItemIcon>
              <ListItemText>Curiosity</ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem
            component={Link}
            to="/opportunity"
            divider
            button
            className={classes.listItem}
            selected={selected === 1}
            onClick={(e) => handleClickSelect(e, 1)}
          >
            <ListItemIcon>
              <ListItemText>Opportunity</ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem
            component={Link}
            to="/perseverance"
            divider
            button
            className={classes.listItem}
            selected={selected === 2}
            onClick={(e) => handleClickSelect(e, 2)}
          >
            <ListItemIcon>
              <ListItemText>Perseverance</ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem
            component={Link}
            to="/spirit"
            divider
            button
            className={classes.listItem}
            selected={selected === 3}
            onClick={(e) => handleClickSelect(e, 3)}
          >
            <ListItemIcon>
              <ListItemText>Spirit</ListItemText>
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <IconContext.Provider
          value={{
            size: '2rem',
            color: '#13103C',
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
