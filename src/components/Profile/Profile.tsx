import React from 'react'
import { Navbar } from '../Navbar';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  header: {
    color: '#F7934C',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    backgroundColor: '#1F1300',
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    position: 'absolute',
    zIndex: -1,
  },
  main_text: {
    color: '#FFC15E',
  },
  button: {
    color: '#1F1300',
    backgroundColor: '#F7B05B',
    borderRadius: '5px',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: '#F7934C',
    },
  },
  p10: {
    padding: '10px',
  },
  buttonText: {
    color: '#1F1300',
    textDecoration: 'none',
  },
});

export const Profile = () => {

  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Navbar />
        <h2 className={`${classes.main_text} ${classes.row} ${classes.p10}`}>Profile Information goes here</h2>
    </div>
  )
}
