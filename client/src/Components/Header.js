import React, { useState, useEffect } from "react";
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { socket } from '../socket';

import Users from './Users'

const useStyles = makeStyles({
    header: {
        fontFamily: 'Orelega One, cursive',
        color: '#0D0D0D',
        fontSize: '80px'

    },
    headerContainer: {
        width: '80%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between'
    },
    theme: {
        fontFamily: 'Open Sans, sans-serif',
        fontWeight: '300',
        borderBottom: '2px solid #0D0D0D',
        backgroundColor: '#BFBFBD',
        fontSize: '1.2em'
      },

});

function Header() {
    const classes = useStyles();

    const [theme, setTheme] = useState('')

    useEffect(() => {
        socket.on("theme", data => {
            setTheme(data);
        });

        return () => {
            socket.off('theme', () => setTheme(''));
        }
    }, []);

    return (

        <div className={classes.headerContainer}>
            <Typography className={classes.header} variant="h1">Write a Story About: <span className={classes.theme}>{theme}</span></Typography>
            <Users />
        </div>
    );
}

export default Header;
