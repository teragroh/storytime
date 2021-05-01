import React, { useState } from "react";
import { TextField, IconButton} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Send} from '@material-ui/icons';

import { socket } from '../socket';

const useStyles = makeStyles({
    inputContainer: {
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

function Input() {
    const classes = useStyles();

    const [word, setWord] = useState("");

    const handleChange = (e) => {
        setWord(e.target.value)
    }

    const handleClick = () => {
        if (!/\S/.test(word)) return
        socket.emit('story', word);
        setWord('')
    }

    return (
        <div className={classes.inputContainer}>
            <TextField type="text" value={word} onChange={handleChange} />
            <IconButton onClick={handleClick}><Send /></IconButton>
        </div>
    );
}

export default Input;
