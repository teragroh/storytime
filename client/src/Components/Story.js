import React, { useState, useEffect } from "react";
import { Typography, Card, CardContent} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { socket } from '../socket';

const useStyles = makeStyles({
    card: {
        width: '80%',
        margin: '0 auto',
        minHeight: '300px',
        backgroundColor: '#F2EFE9'
    },
    story: {
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '30px'
    },
});

function Story() {
    const classes = useStyles();

    const [story, setStory] = useState("");

    useEffect(() => {
        socket.on("story", data => {
            setStory(prevState => {
                return prevState + " " + data
            });
        });

        return () => {
            socket.off('story', () => setStory(''))
        }

    }, []);

    return (

        <Card className={classes.card} variant="outlined">
            <CardContent>
                <Typography className={classes.story} variant="body">{story}</Typography>
            </CardContent>
        </Card>

    );
}

export default Story;
