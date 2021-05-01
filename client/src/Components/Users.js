import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Person } from '@material-ui/icons';

import { socket } from '../socket';

const useStyles = makeStyles({
    users: {
        color: '#8C8B88'
    },

});

function Users() {
    const classes = useStyles();

    const [count, setCount] = useState('')

    useEffect(() => {

        socket.on("count", data => {
            setCount(data);
        });

        return () => {
            socket.off('count', () => setCount(''));
        }
    }, []);

    return (
        <div className={classes.users}>
            {
                [...Array(count)].map(x => <Person />)
            }
        </div>

    );
}

export default Users;
