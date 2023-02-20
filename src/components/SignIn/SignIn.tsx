import React, { useState } from 'react';
import firebase from 'firebase/app';
import { useAuth, AuthCheck } from 'reactfire';
import 'firebase/auth';
import { Input } from '../SharedComponents/Input';
import { Container, Button, makeStyles, Typography, Snackbar } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { Navbar } from '../Navbar'

const Alert = ( props: AlertProps ) => {
    return <MuiAlert elevation={ 6 } variant="filled" { ...props } />;
};

const useStyles = makeStyles({
    googleButton: {
        backgroundColor: '#CC5803',
        marginTop: '2em',
        padding: '0',
        color: 'white',
        height: '50px',
        width: '240px',
        border: 'none',
        textAlign: 'center',
        boxShadow: 'rgb(0 0 0 / 25%) 0px 2px 4px 0px',
        fontSize: '16px',
        lineHeight: '48px',
        display: 'block',
        borderRadius: '3px',
        fontFamily: 'Roboto, arial, sans-serif',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#F7934C',
          },
    },
    typographyStyle: {
        fontFamily: 'Roboto, arial, sans-serif',
        textAlign: 'center',
        fontSize: '2em'
    },
    containerStyle: {
        marginTop: '2em',
    },
    snackBar: {
        color: 'white',
        backgroundColor: '#4CAF50'
    },
    button: {
        backgroundColor: '#F7B05B',
        color: '#1F1300',
        '&:hover': {
            backgroundColor: '#F7934C',
          },
    }
});

interface SignInProps {
    history: RouteComponentProps["history"];
    location: RouteComponentProps["location"];
    match: RouteComponentProps["match"];
}

export const SignIn = withRouter(( props: SignInProps ) => {

    const auth = useAuth();
    const classes = useStyles();
    const { history } = props;
    const [open, setOpen ] = useState(false);

    const handleSnackOpen = () => {
        setOpen(true);
        // history.push('/')
    };

    const handleSnackClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        };

        setOpen(false);
        history.push('/')
    };

    const sign_in = async () => {
        const response = await auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
        if (response.user) {
            handleSnackOpen();
        }
    };

    const sign_out = async () => {
        await auth.signOut();
    }

  return (
    <div>
      <Navbar />
      <Container maxWidth="sm" className={ classes.containerStyle }>
        <Typography className={ classes.typographyStyle }>Sign In</Typography>
        <form>
            <div>
                <label htmlFor="email">Email</label>
                <Input name="email" placeholder="Enter Your Email Here" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <Input name="password" placeholder="Enter Your Password Here" />
            </div>
            <Button type="submit" variant="contained" className={ classes.button }>Submit</Button>
        </form>

        <AuthCheck fallback={
            <Button className={ classes.googleButton } onClick={ sign_in }>Sign In With Google</Button>
        }>
            <Button variant="contained" color="secondary" onClick={ sign_out }>Sign Out</Button>
        </AuthCheck>
        <Snackbar message={ 'Success' } open={ open } autoHideDuration={ 6000 } onClose={ handleSnackClose }>
            <Alert onClose={ handleSnackClose } severity="success">
                Successful Sign In. Redirecting in 6 seconds...
            </Alert>
        </Snackbar>
      </Container>
    </div>
  )
})
