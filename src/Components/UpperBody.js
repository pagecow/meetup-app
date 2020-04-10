import React from 'react';

import { Button, Container, Typography, makeStyles } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
    secondaryLight: {
        color: theme.palette.secondary.light,
    },
    secondaryLight2: {
        color: theme.palette.secondary.light,
        fontSize: '14px',
        zIndex: -1,
    },
    secondaryDark: {
        color: theme.palette.secondary.dark,
    },
    boldText: {
        fontWeight: 900,
    },
}))

function UpperBody(props){
    const classes = useStyles();
    const event_info = props.event_info;
    const rsvps_info = props.rsvps_info;
    console.log("event_info:", event_info);
    console.log("rsvps_info:", rsvps_info);

    let name;
    if(!rsvps_info.member){
        name = null;
    } else {
        name = rsvps_info.member.name
    };
    console.log(name);

    let thumbnail;
    if(!rsvps_info.member){
        name = null;
    } else {
        thumbnail = rsvps_info.member.photo.thumb_link
    };
    console.log(name);

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let date  = new Date(event_info.time);

    return (
        <div style={{width: "100%"}}>
        <div id="upper-body">
            <Container id="upper-body-container" maxWidth="md">
                <div>
                    <Typography className={classes.secondaryLight}>{date.toLocaleDateString("en-US", options)}</Typography>
                    <Typography variant="h4" className={classes.boldText}>{event_info.name}</Typography>
                    <div className="hosted-by">
                        <img className="hosted-img" src={thumbnail}/>
                        <div>
                            <Typography >Hosted by</Typography>
                            <Typography className={classes.boldText}>{name}</Typography>
                        </div>
                    </div>
                </div>
                <Button 
                    className="button" 
                    color="secondary" 
                    variant="outlined" 
                    startIcon={<ShareIcon/>}> Share </Button>
            </Container>
     </div>

        <div id="second-upper-body-container">
            <Typography className={classes.secondaryLight2}>{date.toLocaleDateString("en-US", options)}</Typography>
            <Typography className={classes.boldText}>{event_info.name}</Typography>
        </div>
    </div>
    )
}

export default UpperBody;