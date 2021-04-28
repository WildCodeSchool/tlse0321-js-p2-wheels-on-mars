import { Box } from '@material-ui/core';

const BoxInformation = ({ children }) => (
  <>
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
      {children}
    </Box>
  </>
);

export default BoxInformation;
