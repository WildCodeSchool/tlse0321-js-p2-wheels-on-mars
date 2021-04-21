import axios from 'axios';
import { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const HeroBanner = ({ name }) => {
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
      <section style={{ width: '100%' }}>
        <h1>{name}</h1>
        <iframe
          src="https://mars.nasa.gov/layout/embed/model/?s=3&rotate=true"
          title="rover"
          height="450"
          width="100%"
          scrolling="no"
          frameBorder="0"
          allowFullScreen
        />
        <Typography component="div">
          <Box
            display="flex"
            p={2}
            m={5}
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <Box
              p={2}
              m={2}
              bgcolor="grey.300"
              borderRadius="10px"
              width="120px"
            >
              <Box fontWeight="fontWeightBold">Status: </Box>
              {infosRover.status}
            </Box>
            <Box
              p={2}
              m={2}
              bgcolor="grey.300"
              borderRadius="10px"
              width="120px"
            >
              <Box fontWeight="fontWeightBold">Launch date: </Box>
              {infosRover.launch_date}
            </Box>
            <Box
              p={2}
              m={2}
              bgcolor="grey.300"
              borderRadius="10px"
              width="120px"
            >
              <Box fontWeight="fontWeightBold">Landind date: </Box>
              {infosRover.landing_date}
            </Box>
            <Box
              p={2}
              m={2}
              bgcolor="grey.300"
              borderRadius="10px"
              width="120px"
            >
              <Box fontWeight="fontWeightBold">Time on mars: </Box>
              {infosRover.max_sol} days
            </Box>
            <Box
              p={2}
              m={2}
              bgcolor="grey.300"
              borderRadius="10px"
              width="120px"
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
