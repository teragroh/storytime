import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';

import { socket } from './socket';

import Header from './Components/Header'
import Story from './Components/Story'
import Input from './Components/Input'

const useStyles = makeStyles({
  root: {
    height: '100vh',
    backgroundColor: '#F2EFE9',
  },
  container: {
    width: '95%',
    height: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'

  },
});

function App() {
  const classes = useStyles();

  useEffect(() => {
    return () => {
      socket.disconnect();
    }
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Header />
        <Story />
        <Input />
      </div>
    </div>
  );
}

export default App;
