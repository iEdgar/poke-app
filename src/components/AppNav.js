import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

function AppNav(props){

    const { classes } = props;

    return(
        <AppBar position="static" className={classes.NavColor}>
                <Toolbar variant="dense">
                    <Typography variant="h6">
                        PokeApp
                    </Typography>
                </Toolbar>
        </AppBar>
    );
}

export default withStyles({
    NavColor:{
        backgroundColor: '#333333'
    }
})(AppNav);