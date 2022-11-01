import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './VideoPlayer';
import Sidebar from './Sidebar';
import Notifications from './Notifications';

import '../App.css';

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

const Room = (props) => {
  const classes = useStyles();
  const myProps = props;
  console.log(props);

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
          <Typography gutterBottom variant="h5">{myProps.props.proHeader}</Typography>
          {myProps.props.proLinks.map((link, index) => <a target="_blank" rel="noopener noreferrer" href={link}>{myProps.props.proLinkNames[index]}</a>)}
        </div>
        <div className={classes.stats_child}>
          <Typography gutterBottom variant="h5">{myProps.props.neutralHeader}</Typography>
          {myProps.props.neutralLinks.map((link, index) => <a target="_blank" rel="noopener noreferrer" href={link}>{myProps.props.neutralLinkNames[index]}</a>)}
        </div>
        <div className={classes.stats_child}>
          <Typography gutterBottom variant="h5">{myProps.props.conHeader}</Typography>
          {myProps.props.conLinks.map((link, index) => <a target="_blank" rel="noopener noreferrer" href={link}>{myProps.props.conLinkNames[index]}</a>)}
        </div>
      </div>
    </div>
  );
};

export default Room;
