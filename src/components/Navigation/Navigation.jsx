import { Link } from 'react-router-dom';
import './navigation.scss';
import { IconContext } from 'react-icons';
import { GiPlanetConquest } from 'react-icons/gi';
import { FaRobot } from 'react-icons/fa';
import React, { useState } from 'react';
import {
  AppBar,
  Typography,
  Tabs,
  Tab,
  Toolbar,
  // Button,
  // Menu,
  // MenuItem,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import DrawerMenu from './components/Drawermenu/DrawerMenu';

const Navigation = () => {
  const [value, setValue] = useState(0);
  // const [anchorEl, setAnchorEl] = useState(false);

  const handleClickTab = (e, newValue) => {
    setValue(newValue);
  };
  // const handleOpenMenu = (e) => {
  //   setAnchorEl(e.currentTarget);
  // };
  // const handleCloseMenu = (e) => {
  //   setAnchorEl(false);
  // };
  // Breakpoints
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <AppBar color="primary" style={{ background: 'transparent' }}>
        <Toolbar>
          <Link to="/">
            <Typography>
              <IconContext.Provider
                value={{
                  size: '4rem',
                  color: '#941b0c',
                  className: 'logo-planet',
                }}
              >
                <GiPlanetConquest />
              </IconContext.Provider>
            </Typography>
          </Link>

          {isMatch ? (
            <DrawerMenu />
          ) : (
            <Tabs onChange={handleClickTab} value={value}>
              <Link to="/curiosity">
                <Tab
                  icon={(
                    <IconContext.Provider
                      value={{
                        size: '1.5rem',
                        className: 'tab-icons',
                      }}
                    >
                      <FaRobot />
                    </IconContext.Provider>
                  )}
                  label="Curiosity"
                />
              </Link>
              <Link to="/opportunity">
                <Tab
                  icon={(
                    <IconContext.Provider
                      value={{
                        size: '1.5rem',
                        className: 'tab-icons',
                      }}
                    >
                      <FaRobot />
                    </IconContext.Provider>
                  )}
                  label="Opportunity"
                />
              </Link>
              <Link to="/perseverance">
                <Tab
                  icon={(
                    <IconContext.Provider
                      value={{
                        size: '1.5rem',
                        className: 'tab-icons',
                      }}
                    >
                      <FaRobot />
                    </IconContext.Provider>
                  )}
                  label="Perseverance"
                />
              </Link>
              <Link to="/spirit">
                <Tab
                  icon={(
                    <IconContext.Provider
                      value={{
                        size: '1.5rem',
                        className: 'tab-icons',
                      }}
                    >
                      <FaRobot />
                    </IconContext.Provider>
                  )}
                  label="Spirit"
                />
              </Link>
            </Tabs>
          )}

          {/* <Button
            area-controls="menu"
            onClick={handleOpenMenu}
            variant="contained"
            color="secondary"
            size="large"
          >
            Explore
          </Button> */}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navigation;

/* <Menu
  style={{ marginTop: "3rem" }}
  id="menu"
  anchorEl={anchorEl}
  onClose={handleCloseMenu}
  open={Boolean(anchorEl)}
>
  <MenuItem onClick={handleCloseMenu}>
    <Tab
      icon={
        <IconContext.Provider
          value={{
            size: "1.5rem",
            className: "tab-icons"
          }}
        >
          <FaRobot />
        </IconContext.Provider>
      }
      label="Curiosity"
    />
  </MenuItem>
  <MenuItem onClick={handleCloseMenu}>
    <Tab
      icon={
        <IconContext.Provider
          value={{
            size: "1.5rem",
            className: "tab-icons"
          }}
        >
          <FaRobot />
        </IconContext.Provider>
      }
      label="Opportunity"
    />
  </MenuItem>
  <MenuItem onClick={handleCloseMenu}>
    <Tab
      icon={
        <IconContext.Provider
          value={{
            size: "1.5rem",
            className: "tab-icons"
          }}
        >
          <FaRobot />
        </IconContext.Provider>
      }
      label="Perseverance"
    />
  </MenuItem>
  <MenuItem onClick={handleCloseMenu}>
    {" "}
    <Tab
      icon={
        <IconContext.Provider
          value={{
            size: "1.5rem",
            className: "tab-icons"
          }}
        >
          <FaRobot />
        </IconContext.Provider>
      }
      label="Spirit"
    />
  </MenuItem>
    </Menu> */
