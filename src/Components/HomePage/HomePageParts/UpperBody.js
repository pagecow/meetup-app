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
    whiteCont: {
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        backgroundColor: "white",
        padding: "18px",
        outline: "0px",
        borderRadius: "8px",
        margin: "0",
        padding: "10px",
        borderBottom: "1px solid rgba(46,62,72,.12)",
    },
}))

function UpperBody(props){
    const classes = useStyles();
    const event_info = props.event_info;
    const rsvps_info = props.rsvps_info;
    console.log("event_info:", event_info);
    console.log("rsvps_info:", rsvps_info);

    let name, thumbnail, thumbnail2;
    if(!rsvps_info.member){
        name = null;
        thumbnail = null;
        thumbnail2 = null;
    } else {
        name = rsvps_info.group.name;
        thumbnail = rsvps_info.member.photo.thumb_link;
        thumbnail2 = rsvps_info.group.group_photo.thumb_link;
    };

    let visibility;
    if(!event_info){
        visibility = null;
    } else if (event_info.visibility && event_info.venue.lat && event_info.venue.lon && event_info.venue.name) {
        visibility = event_info.visibility;
    }; 
    if (visibility) {
        visibility = event_info.visibility.charAt(0).toUpperCase() + visibility.slice(1);
    };

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let date  = new Date(event_info.time);

    return (
        <div style={{width: "100%"}}>
            <div className="right-info-2">
                    <Container className={classes.whiteCont}>
                        <img className="group-img" src={thumbnail2} />
                        <div>
                            <Typography className={classes.boldText}>{name}</Typography>
                            <Typography className={classes.secondaryLight}>{visibility} group</Typography>
                        </div>
                    </Container>
                </div>
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