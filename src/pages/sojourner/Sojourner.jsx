import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#13103B',
  },
  paper: {
    textAlign: 'center',
  },
  alignement: {
    textAlign: 'center',
  },
}));

const Sojourner = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Box className={classes.alignement}>
            <section style={{ width: '100%', color: '#FFF' }}>
              <Box letterSpacing={1} fontSize="1.8rem">
                <h1>Sojourner</h1>
              </Box>
              <div
                style={{
                  width: '100%',
                  textAlign: 'center',
                }}
              >
                <img
                  src="https://static.turbosquid.com/Preview/000226/660/6D/sojourner-rover-3d-model_Z.jpg"
                  alt="Sojourner rover"
                  height="500px"
                />
              </div>
              <Typography component="div">
                <Box
                  display="flex"
                  p={2}
                  m={2}
                  justifyContent="center"
                  alignItems="center"
                  flexWrap="wrap"
                >
                  <Box
                    p={2}
                    m={2}
                    color="#FFF"
                    bgcolor="#19103B"
                    border="1px solid #BBB"
                    borderRadius="10px"
                    height="50px"
                    width="150px"
                    minWidth="150px"
                  >
                    <Box fontWeight="fontWeightBold">Status: </Box>
                    complete
                  </Box>
                  <Box
                    p={2}
                    m={2}
                    color="#FFF"
                    bgcolor="#19103B"
                    border="1px solid #BBB"
                    borderRadius="10px"
                    height="50px"
                    width="150px"
                    minWidth="150px"
                  >
                    <Box fontWeight="fontWeightBold">Launch date: </Box>
                    1996-12-04
                  </Box>
                  <Box
                    p={2}
                    m={2}
                    color="#FFF"
                    bgcolor="#19103B"
                    border="1px solid #BBB"
                    borderRadius="10px"
                    height="50px"
                    width="150px"
                    minWidth="150px"
                  >
                    <Box fontWeight="fontWeightBold">Landind date: </Box>
                    1997-07-04
                  </Box>
                  <Box
                    p={2}
                    m={2}
                    color="#FFF"
                    bgcolor="#19103B"
                    border="1px solid #BBB"
                    borderRadius="10px"
                    height="50px"
                    width="150px"
                    minWidth="150px"
                  >
                    <Box fontWeight="fontWeightBold">Time on mars: </Box>
                    83 sols
                  </Box>
                  <Box
                    p={2}
                    m={2}
                    color="#FFF"
                    bgcolor="#19103B"
                    border="1px solid #BBB"
                    borderRadius="10px"
                    height="50px"
                    width="150px"
                    minWidth="150px"
                  >
                    <Box fontWeight="fontWeightBold">Pictures took: </Box>
                    550
                  </Box>
                </Box>
              </Typography>
            </section>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Sojourner;
