import axios from 'axios';
import { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import BoxInformation from './BoxInformation';

const HeroBanner = ({ name, iframe }) => {
  const [infosRover, setInfosRover] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${name}/?api_key=6SQbBBh5nKhOO3Dq0gORo0cdLBTHCeJUCfNVns9s`,
      )
      .then((response) => response.data)
      .then((data) => {
        setInfosRover(data.rover);
      });
  }, []);

  return (
    <>
      <section>
        <Typography component="div">
          <Box>
            <Box letterSpacing={1} fontSize="1.8rem">
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
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            m={1}
          >
            <BoxInformation>
              <Box fontWeight="fontWeightBold">Status: </Box>
              {infosRover.status}
            </BoxInformation>
            <BoxInformation>
              <Box fontWeight="fontWeightBold">Launch date: </Box>
              {infosRover.launch_date}
            </BoxInformation>
            <BoxInformation>
              <Box fontWeight="fontWeightBold">Landind date: </Box>
              {infosRover.landing_date}
            </BoxInformation>
            <BoxInformation>
              <Box fontWeight="fontWeightBold">Time on mars: </Box>
              {infosRover.max_sol} sols
            </BoxInformation>
            <BoxInformation>
              <Box fontWeight="fontWeightBold">Pictures took: </Box>
              {infosRover.total_photos}
            </BoxInformation>
          </Box>
        </Typography>
      </section>
    </>
  );
};

export default HeroBanner;
