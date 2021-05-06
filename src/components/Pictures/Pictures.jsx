import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import Toolbar from '@material-ui/core/Toolbar';
import './picture.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  gridList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
    flexWrap: 'wrap',
    padding: '1rem',
  },
  tileBar: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  barTool: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  submitButton: {
    backgroundColor: '#13103B',
    borderRadius: '10px',
    border: '1px solid #13103B',
    color: '#FFF',
    cursor: 'pointer',
    display: 'inline',
    fontWeight: '600',
    padding: '0.5rem 1rem',
    pointerEvents: 'auto',
    marginLeft: '1rem',
  },
  cursorIsWaiting: {
    backgroundColor: '#302f42',
    borderRadius: '10px',
    border: '1px solid #302f42',
    color: '#FFF',
    display: 'inline',
    fontWeight: '600',
    padding: '0.5rem 1rem',
    marginLeft: '1rem',
    pointerEvents: 'none',
  },
}));

// This components get all pictures, filter and send the result in the "PictureCard" component.
const Pictures = ({ name }) => {
  const [totalPicture, setTotalPicture] = useState([]);
  const [limitedPicture, setLimitedPicture] = useState([]);
  const [rangeValue, setRangeValue] = useState(5);
  const [solInputValue, setSolInputValue] = useState(55);
  const [enableClick, setEnableClick] = useState(true);
  const themeUse = useTheme();
  const isMatch = useMediaQuery(themeUse.breakpoints.down('sm'));
  const classes = useStyles();
  const searchPictureURL = `http://mars-photos.herokuapp.com/api/v1/rovers/${name}/photos?sol=${solInputValue}`;
  
  const [selectedTile, setSelectedTile] = useState(null);

  const handleClickOpen = (tile) => {
    setSelectedTile(tile);
  };

  const handleClose = () => {
    setSelectedTile(null);
  };

  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
  };

  const handleSolChange = (e) => {
    setSolInputValue(parseInt(e.target.value, 10));
  };

  // Add delay on the submit button to avoid spam API request
  const handleToggleClick = () => {
    setEnableClick(false);
    setTimeout(() => {
      setEnableClick(true);
    }, 2000);
  };

  const fetchDataPictue = () => {
    axios
      .get(searchPictureURL)
      .then((res) => res.data)
      .then((data) => {
        setTotalPicture(data.photos);
      });

    const limitPicture = () => {
      totalPicture.length = rangeValue;
      setLimitedPicture(totalPicture);
    };
    limitPicture();
  };

  useEffect(() => {
    fetchDataPictue();
  }, [solInputValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchDataPictue();
  };

  return (
    <div className={classes.pictures}>
      <h2>Rover pictures</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="limitPicture" className="limitPictureLabel">
            <span>Max pictures {rangeValue} :</span>
            <input
              id="limitPicture"
              type="range"
              min="1"
              max="100"
              step="1"
              value={rangeValue}
              text-value={rangeValue}
              onChange={handleRangeChange}
            />
          </label>
          <label htmlFor="solNumber" className="solNumber">
            <span>SOL :</span>
            <input
              type="number"
              value={solInputValue}
              onChange={handleSolChange}
            />
          </label>
          <input
            type="submit"
            value="Search"
            onClick={handleToggleClick}
            className={
              enableClick ? classes.submitButton : classes.cursorIsWaiting
            }
          />
        </form>
      </div>
      <div className={classes.container}>
        <GridList
          className={classes.gridList}
          cellHeight={300}
          spacing={20}
          cols={`${isMatch ? 1 : 3}`}
          style={{ width: `${isMatch ? '60%' : '80%'}`, height: 'auto' }}
        >
          {limitedPicture
            .filter((rover) => rover.sol === solInputValue)
            .map((rover) => (
              <GridListTile key={rover.img}>
                <img src={rover.img_src} alt={rover.rover.name} />
                <GridListTileBar
                  title={rover.rover.name}
                  subtitle={(
                    <span>
                      Cam: {rover.camera.full_name}
                      <br />
                      Sol: {rover.sol}
                      <br />
                      Earth Date: {rover.earth_date}
                    </span>
                  )}
                  actionIcon={(
                    <IconButton
                      aria-label={`info about ${rover.title}`}
                      className={classes.icon}
                      style={{ color: '#D3D3D3' }}
                      value={rover.id}
                      onClick={() => handleClickOpen(rover)}
                    >
                      <FullscreenIcon />
                    </IconButton>
                  )}
                />
              </GridListTile>
            ))}
        </GridList>
      </div>
      <Dialog open={selectedTile !== null} onClose={handleClose}>
        <Toolbar className={classes.barTool}>
          <IconButton
            edge="end"
            onClick={handleClose}
            style={{ color: '#000000' }}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
        {selectedTile && (
          <img src={selectedTile.img_src} alt={selectedTile.title} />
        )}
      </Dialog>
    </div>
  );
};
export default Pictures;
