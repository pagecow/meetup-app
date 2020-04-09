import React from 'react';

import { Button, Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    secondaryLight: {
        color: theme.palette.secondary.light,
    },
    secondaryDark: {
        color: theme.palette.secondary.dark,
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
        height: "96px",
        width: "300px",
        backgroundColor: "white",
        padding: "18px",
        outline: "0px",
        borderRadius: "8px",
        margin: "40px 0 0 0",
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
    let date  = new Date(event_info.time);

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

                <Container className={classes.whiteCont}>
                    <img className="group-img" src={thumbnail} />
                    <div>
                        <Typography className={classes.boldText}>{name}</Typography>
                        <Typography className={classes.secondaryLight}>{visibility} group</Typography>
                    </div>
                </Container>
            </Container>
        </div>
    )
}

export default Body;