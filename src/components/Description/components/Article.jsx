import { Typography } from '@material-ui/core';

const Article = ({ mission }) => (
  <article style={{ textAlign: 'start' }}>
    <Typography variant="h5">{mission.title1}</Typography>
    <br />
    <Typography variant="body1">{mission.text1}</Typography>
    <br />
    <Typography variant="h5">{mission.title2}</Typography>
    <br />
    <Typography variant="body1">{mission.text2}</Typography>
    <br />
    <Typography variant="h5">{mission.title3}</Typography>
    <br />
    <Typography variant="body1">{mission.text3}</Typography>
    <Typography variant="body1">{mission.text4}</Typography>
  </article>
);

export default Article;
