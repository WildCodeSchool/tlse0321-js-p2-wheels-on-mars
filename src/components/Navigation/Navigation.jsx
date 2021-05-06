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
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import DrawerMenu from './components/Drawermenu/DrawerMenu';

const Navigation = () => {
  const [value, setValue] = useState(null);

  const handleClickTab = (e, newValue) => {
    setValue(newValue);
  };

  const returnHome = () => {
    setValue(null);
  };

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <AppBar color="#fff" position="sticky" elevation={1}>
        <Toolbar>
          <Typography component={Link} to="/" onClick={returnHome}>
            <IconContext.Provider
              value={{
                size: '4rem',
                color: '#13103C',
                className: 'logo-planet',
              }}
            >
              <GiPlanetConquest />
            </IconContext.Provider>
          </Typography>

          {isMatch ? (
            <DrawerMenu />
          ) : (
            <Tabs onChange={handleClickTab} value={value}>
              <Tab
                component={Link}
                to="/curiosity"
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

              <Tab
                component={Link}
                to="/opportunity"
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

              <Tab
                component={Link}
                to="/perseverance"
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

              <Tab
                component={Link}
                to="/spirit"
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
            </Tabs>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navigation;
