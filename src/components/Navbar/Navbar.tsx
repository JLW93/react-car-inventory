import React, { Suspense } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { AuthCheck } from 'reactfire';

const useStyles = makeStyles({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    navbar: {
        backgroundColor: '#1F1300',
        borderBottom: '1px solid #CC5803',
        zIndex: 1,
    },
    navbarItem: {
        color: '#F7B05B',
        textDecoration: 'none',
    },
    p10: {
        padding: '10px',
    },
    evenly: {
        justifyContent: 'space-evenly',
    },
    start: {
        justifyContent: 'start',
    },
    ul: {
        listStyleType: 'none',
    },
    width60: {
        width: '60%',
    },
    width100: {
        width: '100%',
    },
    p_sides: {
        paddingLeft: '40px',
        paddingRight: '40px',
    },
});

export const Navbar = () => {

    const classes = useStyles();

  return (
    <>
        <div className={`${classes.row} ${classes.navbar} ${classes.width100} ${classes.center} ${classes.p10} ${classes.start}`}>
            <div className={`${classes.width60} ${classes.center}`}>
                <ul className={`${classes.ul} ${classes.row} ${classes.start} ${classes.p_sides}`}>
                    <Suspense fallback={'loading...'}>
                        <AuthCheck fallback={
                            <li>
                                <Button>
                                    <Link to='/SignIn' className={`${classes.navbarItem} ${classes.p_sides}`}>Sign In</Link>
                                </Button>
                            </li>
                        }>
                            <li>
                                <Button>
                                    <Link to='/' className={`${classes.navbarItem} ${classes.p_sides}`}>Home</Link>
                                </Button>
                            </li>
                            <li>
                                <Button>
                                    <Link to='/Cars' className={`${classes.navbarItem} ${classes.p_sides}`}>Cars</Link>
                                </Button>
                            </li>
                            <li>
                                <Button>
                                    <Link to='/Profile' className={`${classes.navbarItem} ${classes.p_sides}`}>Profile</Link>
                                </Button>
                            </li>
                        </AuthCheck>
                    </Suspense>
                </ul>
            </div>
        </div>
    </>
  )
}
