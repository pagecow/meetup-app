import React from 'react';

import { Button, Container, Typography, makeStyles } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ScheduleIcon from '@material-ui/icons/Schedule';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

const useStyles = makeStyles((theme) => ({
    secondaryLight: {
        color: theme.palette.secondary.light,
        fontSize: "14px",
    },
    secondaryDark: {
        color: theme.palette.secondary.dark,
        fontSize: "14px",
    },
    boldText: {
        fontWeight: 900,
    },
    breakText: {
        wordWrap: "break-word"
    },
    leftCont: {
        margin: "40px 0 0 0",
    },
    whiteCont: {
        display: "flex",
        width: "300px",
        backgroundColor: "white",
        padding: "18px",
        outline: "0px",
        borderRadius: "8px",
        margin: "40px 0 0 0",
    },
    whiteCont2: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "300px",
        width: "300px",
        backgroundColor: "white",
        padding: "18px",
        outline: "0px",
        borderRadius: "8px",
        margin: "40px 0 0 0",
    },
    icons: {
        marginRight: "20px",
        color: theme.palette.secondary.light,
    }
}))

function Body(props){
    const classes = useStyles();
    const event_info = props.event_info;
    const rsvps_info = props.rsvps_info;
    console.log("event_info:", event_info);
    console.log("rsvps_info:", rsvps_info);

    let name;
    if(!rsvps_info.member){
        name = null;
    } else {
        name = rsvps_info.group.name
    };

    let thumbnail;
    if(!rsvps_info.member){
        name = null;
    } else {
        thumbnail = rsvps_info.group.group_photo.thumb_link
    };

    let visibility;
    if(!event_info.visibility){
        visibility = null;
    } else if (event_info.visibility) {
        visibility = event_info.visibility;
    }; 
    if (visibility) {
        visibility = event_info.visibility.charAt(0).toUpperCase() + visibility.slice(1);
    };

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let options2 = { timeZone: 'America/Chicago', hour: '2-digit', minute: '2-digit' };
    let date  = new Date(event_info.time);
    let endTime  = new Date(event_info.time + event_info.duration);
    console.log(date);
    console.log(endTime);

    function createMarkup() {
        return {__html: event_info.description};
      }

    return (
        <div id="body">
            <Container id="body-container" maxWidth="md">
                <Container className={classes.leftCont} maxWidth="sm">
                    <Typography className={classes.boldText} variant="h6">Details</Typography>
                    <Typography className={classes.breakText} dangerouslySetInnerHTML={createMarkup()} />
                </Container>

                <div>
                    <Container className={classes.whiteCont}>
                        <img className="group-img" src={thumbnail} />
                        <div>
                            <Typography className={classes.boldText}>{name}</Typography>
                            <Typography className={classes.secondaryLight}>{visibility} group</Typography>
                        </div>
                    </Container>

                    <Container className={classes.whiteCont2}>
                        <div className="event-info">
                            <CheckIcon className={classes.icons} color="secondary" />
                            <div>
                                <Typography className={classes.secondaryDark}>RSVP Opens</Typography>
                                <Typography className={classes.secondaryDark}>{date.toLocaleDateString("en-US", options)}</Typography>
                                <Typography className={classes.secondaryDark}>{date.toLocaleTimeString("en-US", options2)}</Typography>
                            </div>
                        </div>
                        <div className="event-info">
                            <ScheduleIcon className={classes.icons} color="secondary" />
                            <div>
                                <Typography className={classes.secondaryDark}>{date.toLocaleDateString("en-US", options)}</Typography>
                                <Typography className={classes.secondaryDark}>{date.toLocaleTimeString("en-US", options2)} to {endTime.toLocaleTimeString("en-US", options2)}</Typography>
                                <Typography className={classes.secondaryDark}>(Not Finished)</Typography>
                                <Typography className={classes.secondaryDark}>Add to calendar (Not Finished)</Typography>
                            </div>
                        </div>
                        <div className="event-info">
                            <LocationOnOutlinedIcon className={classes.icons} color="secondary" />
                            <div>
                                <Typography className={classes.secondaryDark}>(Not Finished)</Typography>
                                <Typography className={classes.secondaryDark}>(Not Finished)</Typography>
                                <Typography className={classes.secondaryDark}>(Not Finished)</Typography>
                            </div>
                        </div>
                        
                    </Container>
                </div>
            </Container>
        </div>
    )
}

export default Body;