import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';

import './App.css';

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginBottom: '10px',
    paddingTop: '5px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  stats_parent: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stats_child: {
    borderRadius: 5,
    margin: '10px 10px',
    padding: '20px',
    paddingTop: '5px',
    paddingBottom: '35px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    background: 'white',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">PoliTalk</Typography>
      </AppBar>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
      <div className={classes.stats_parent}>
        <div className={classes.stats_child}>
          <Typography gutterBottom variant="h5">Pro Choice</Typography>
          <a href="https://web.mit.edu/pro-choice/www/facts.html">MIT Pro Choice</a>
        </div>
        <div className={classes.stats_child}>
          <Typography gutterBottom variant="h5">Neutral</Typography>
          <a href="https://www.cdc.gov/reproductivehealth/data_stats/abortion.htm">CDC Statistics</a>
          <a href="https://www.who.int/news-room/fact-sheets/detail/abortion">World Health Organization</a>
        </div>
        <div className={classes.stats_child}>
          <Typography gutterBottom variant="h5">Anti Abortion</Typography>
          <a href="https://abort73.com/abortion_facts/us_abortion_statistics/">Abort 73</a>
        </div>
      </div>
    </div>
  );
};

export default App;
