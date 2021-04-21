import axios from 'axios';
import { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const HeroBanner = ({ name, iframe }) => {
  const [infosRover, setInfosRover] = useState([]);
  useEffect(() => {
    axios
      .get(`https://mars-photos.herokuapp.com/api/v1/manifests/${name}`)
      .then((response) => response.data)
      .then((data) => {
        setInfosRover(data.photo_manifest);
      });
  }, []);
  return (
    <>
      <section style={{ width: '100%', color: '#FFF' }}>
        <Typography component="div">
          <Box letterSpacing={1} m={1}>
            <h1>{name}</h1>
          </Box>
          <iframe
            src={iframe}
            title="rover"
            height="500"
            width="100%"
            scrolling="no"
            frameBorder="0"
            allowFullScreen
          />

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
              bgcolor="#242424"
              borderRadius="10px"
              height="50px"
              width="150px"
              minWidth="150px"
            >
              <Box fontWeight="fontWeightBold">Status: </Box>
              {infosRover.status}
            </Box>
            <Box
              p={2}
              m={2}
              color="#FFF"
              bgcolor="#242424"
              borderRadius="10px"
              height="50px"
              width="150px"
              minWidth="150px"
            >
              <Box fontWeight="fontWeightBold">Launch date: </Box>
              {infosRover.launch_date}
            </Box>
            <Box
              p={2}
              m={2}
              color="#FFF"
              bgcolor="#242424"
              borderRadius="10px"
              height="50px"
              width="150px"
              minWidth="150px"
            >
              <Box fontWeight="fontWeightBold">Landind date: </Box>
              {infosRover.landing_date}
            </Box>
            <Box
              p={2}
              m={2}
              color="#FFF"
              bgcolor="#242424"
              borderRadius="10px"
              height="50px"
              width="150px"
              minWidth="150px"
            >
              <Box fontWeight="fontWeightBold">Time on mars: </Box>
              {infosRover.max_sol} sols
            </Box>
            <Box
              p={2}
              m={2}
              color="#FFF"
              bgcolor="#242424"
              borderRadius="10px"
              height="50px"
              width="150px"
              minWidth="150px"
            >
              <Box fontWeight="fontWeightBold">Pictures took: </Box>
              {infosRover.total_photos}
            </Box>
          </Box>
        </Typography>
      </section>
    </>
  );
};

export default HeroBanner;
