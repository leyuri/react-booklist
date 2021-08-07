import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { addNewBook } from '../action';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appbar: {
        background : '#2E3B55'
    }
}));

function TopNavBar({ addNewBook }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        경제/경영
                    </Typography>
                    <Button color="inherit" onClick={() => {
                        addNewBook()
                    }}><AddCircleIcon /></Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default connect(null,{ addNewBook })(TopNavBar)
