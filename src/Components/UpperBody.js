import React from 'react';

import { Button, Container, Typography, makeStyles } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
    secondaryLight: {
        color: theme.palette.secondary.light,
    },
    secondaryDark: {
        color: theme.palette.secondary.dark
    }
}))

function UpperBody(props){
    const classes = useStyles();
    const event_info = props.event_info;
    const rsvps_info = props.rsvps_info;
    console.log("event_info:", event_info);
    console.log("rsvps_info:", rsvps_info);

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let date  = new Date(event_info.time);

    return (
        <div id="upper-body">
            <Container maxWidth="md">
                <Typography className={classes.secondaryLight}>{date.toLocaleDateString("en-US", options)}</Typography>
                <Typography variant="h3">{event_info.name}</Typography>
                <Button 
                    className="button" 
                    color="secondary" 
                    variant="outlined" 
                    startIcon={<ShareIcon/>}> Share </Button>
            </Container>
        </div>
    )
}

export default UpperBody;