import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 0,
    height: 600,
    width: 600,
  },
}));

const PictureCard = ({ rover }) => {
  const classes = useStyles();
  const tileData = [
    {
      img: rover.img_src,
      id: rover.Id,
      camera: rover.camera.full_name,
      sol: rover.sol,
      date: rover.earth_date,
    },
  ];
  return (
    <div>
      <GridList cellHeight={180} className={classes.gridList}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} className="item">
            <img src={tile.img} alt={tile.id} />
            <GridListTileBar
              title={tile.id}
              subtitle={<span>{tile.camera}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default PictureCard;
