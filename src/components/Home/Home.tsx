import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Navbar } from '../Navbar';
import { Link, BrowserRouter as Route } from 'react-router-dom';

interface Props {
  title: string;
};

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

export const Home = ( props: Props ) => {

  const classes = useStyles();

  return (
    <>
    <Navbar />
      <div className={`${ classes.background } ${ classes.p10 }`}>
        <div className={`${ classes.row } ${classes.p10}`}>
          <h2 className={ classes.header }>{ props.title }</h2>
        </div>
        <div className={`${ classes.main_text } ${ classes.row } ${classes.p10}`}>
          <h4>Some other text can go here.</h4>
        </div>
        <div className={`${ classes.row } ${classes.p10}`}>
          <Button className={ classes.button }>
            <Link to='/cars' className={ classes.buttonText }>Take me to my cars</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
