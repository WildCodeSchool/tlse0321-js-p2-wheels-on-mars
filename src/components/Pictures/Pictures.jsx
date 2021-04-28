import axios from 'axios';
import { useEffect, useState } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
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
  listTile: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  tileBar: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

// ce composant est censee recup les donnes des photo des rover
const Pictures = ({ name }) => {
  const [totalPicture, setTotalPicture] = useState([]);
  const [limitedPicture, setLimitedPicture] = useState([]);
  const [rangeValue, setRangeValue] = useState(5);
  const [solInputValue, setSolInputValue] = useState(55);
  const themeUse = useTheme();
  const isMatch = useMediaQuery(themeUse.breakpoints.down('sm'));
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(
        `http://mars-photos.herokuapp.com/api/v1/rovers/${name}/photos?sol=${solInputValue}`,
      )
      .then((res) => res.data)
      .then((data) => {
        setTotalPicture(data.photos);
      });
    const limitPicture = () => {
      totalPicture.length = rangeValue;
      setLimitedPicture(totalPicture);
    };
    limitPicture();
  }, [totalPicture, rangeValue]);

  return (
    <div className={classes.pictures}>
      <h2>Rover pictures</h2>
      <div>
        <form>
          <label htmlFor="limitPicture" className="limitPictureLabel">
            <span>Max pictures {rangeValue} :</span>
            <input
              id="limitPicture"
              type="range"
              min="1"
              max="250"
              step="1"
              value={rangeValue}
              text-value={rangeValue}
              onChange={(e) => setRangeValue(e.target.value)}
            />
          </label>
          <label htmlFor="solNumber" className="solNumber">
            <span>SOL :</span>
            <input
              type="number"
              value={solInputValue}
              onChange={(e) => setSolInputValue(e.target.value)}
            />
          </label>
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
            .filter((rover) => rover.sol <= solInputValue)
            .map((rover) => (
              <GridListTile key={rover.img} className={classes.listTile}>
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
                />
              </GridListTile>
            ))}
        </GridList>
      </div>
    </div>
  );
};
export default Pictures;
