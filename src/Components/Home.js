import React from 'react';
import { Container, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  helloThereStyle: {
    fontStyle: 'oblique',
  },
  homePage: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  buttonStyle: {
    width: '200px',
  }
})

function Home() {
  const classes = useStyles();

  return (
    <Container className={classes.homePage} maxWidth='false'>
      <Typography className={classes.helloThereStyle} color="primary" variant="h2">Meetup App</Typography>
      <Button className={classes.buttonStyle} color="primary" variant="outlined" >outlined</Button>
      <Button className={classes.buttonStyle} color="primary" variant="contained" >contained</Button>
    </Container>
  );
}

export default Home;
