import React, { useState } from 'react';
import { useGetData } from '../../custom-hooks';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import { Drawer as MUIDrawer,
        ListItem,
        List,
        ListItemIcon,
        ListItemText,
        Theme,
        useTheme,
        makeStyles,
        createStyles,
        AppBar,
        Toolbar,
        IconButton,
        Typography,
        Divider,
        Button,
        Dialog,
        DialogActions,
        DialogContent,
        DialogContentText,
        DialogTitle
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import { RouteComponentProps, withRouter, Switch, Route } from 'react-router-dom';
import { DataTable } from '../../components/DataTable';
import { CarForm } from '../CarForm';

interface CarProps {
    history: RouteComponentProps["history"];
    location: RouteComponentProps["location"];
    match: RouteComponentProps["match"];
};

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => createStyles({
    main: {
        display: 'flex',
        flexDirection: 'column',
        // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
        backgroundColor: '#1F1300',
        width: '100%',
        height: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
    },
    h3: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#F7934C',
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        color: '#F7934C',
        textDecoration: 'none',
        backgroundColor: '#1F1300',
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        margin: '0 0 0 0.45em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo_a: {
        color: '#F7934C',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none',
    },
    root: {
      display: 'flex',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      backgroundColor: '#1F1300'
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: '#1F1300',
      color: '#F7934C'
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    toolbar:{
      display: 'flex',
      backgroundColor: '#1F1300',
      color: '#F7B05B',
      fontFamily: "Georgia, 'Times New Roman', Times, serif",
    },
    toolbar_button: {
      marginLeft: 'auto',
      color: '#F7B05B',
      fontFamily: "Georgia, 'Times New Roman', Times, serif",
    },
    margin_top: {
        marginTop: '50px',
    },
    font: {
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
    },
    leftMargin: {
        marginLeft: '240px',
    },
    color: {
        color: '#F7934C'
    }
}));

export const Cars = withRouter(( props: CarProps ) => {
    const { history } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [ open, setOpen ] = useState(false);

    const [dialogOpen, setDialogOpen ] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleDialogClickOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClickClose = () => {
        setDialogOpen(false);
    };

    const itemsList = [
        {
            text: 'Home',
            onClick: () => history.push('/')
        },
        {
            text: 'Cars',
            onClick: () => history.push('/cars')
        },
        {
            text: 'Profile',
            onClick: () => history.push('/profile')
        },
    ];

    return (
        <div className={`${classes.root} ${classes.column}`}>
            <CssBaseline />
            <AppBar position="fixed" className={clsx(classes.appBar, {[classes.appBarShift]: open })}>
                <Toolbar className={classes.toolbar}>
                    <IconButton color="inherit" aria-label="open-drawer" onClick={handleDrawerOpen} edge="start" className={clsx(classes.menuButton, open && classes.hide)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.font} noWrap>
                        Car Inventory
                    </Typography>
                    <Button className={classes.toolbar_button} onClick={handleDialogClickOpen}>Add a New Car</Button>

                    <Dialog open={dialogOpen} onClose={handleDialogClickClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Add a New Car</DialogTitle>
                        <DialogContent>
                            <DialogContentText></DialogContentText>
                            <CarForm />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleDialogClickClose} color="primary">Cancel</Button>
                        </DialogActions>
                    </Dialog>
                </Toolbar>
            </AppBar>
            <MUIDrawer className={classes.drawer} variant="persistent" anchor="left" open={open} classes={{paper: classes.drawerPaper,}}>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon className={classes.color} /> : <ChevronRightIcon className={classes.color} />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {itemsList.map((item, index) => {
                        const { text, onClick } = item;
                        return (
                            <ListItem button key={text} onClick={onClick}>
                                <ListItemText primary={text} />
                            </ListItem>
                        );
                    })}
                </List>
            </MUIDrawer>
            <main className={`${clsx(classes.content, {[classes.contentShift]: open,})} ${classes.leftMargin}`}>
                <div className={classes.drawerHeader} />
                    <DataTable />
            </main>
        </div>
    )
});

