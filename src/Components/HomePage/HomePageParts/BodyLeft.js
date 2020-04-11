import React from 'react';

import { Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    boldText: {
        fontWeight: 900,
    },
    breakText: {
        wordWrap: "break-word",
        marginBottom: "30px",
    },
    leftCont: {
        margin: "40px 0 0 0",
    },
    whiteCont: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "180px",
        width: "135px",
        backgroundColor: "white",
        padding: "20px 8px 0px",
        outline: "0px",
        borderRadius: "8px",
        margin: "40px 0 0 0",
    }
}))

function BodyLeft(props){
    const classes = useStyles();
    const event_info = props.event_info;
    const rsvps_info = props.rsvps_info;

    let thumbnail, name, role;
    if(!rsvps_info.member){
        thumbnail = null;
        name = null;
        role = null;
    } else {
        thumbnail = rsvps_info.member.photo.thumb_link;
        name = rsvps_info.member.name;
        role = rsvps_info.member.role;
    };
    if (role) {
        role = rsvps_info.member.role.charAt(0).toUpperCase() + role.slice(1);
    };

    function createMarkup() {
        return {__html: event_info.description};
      }

    return (  
        <div id="body-left-container" className={classes.leftCont} maxWidth="sm">
            <Typography className={classes.boldText} variant="h6">Details</Typography>
            <Typography className={classes.breakText} dangerouslySetInnerHTML={createMarkup()} />
            <Typography className={classes.boldText} variant="h6">Attendees (1)</Typography>
            <Container className={classes.whiteCont} >
                <img className="hosted-img-2" src={thumbnail}/>
                <Typography className={classes.boldText}>{name}</Typography>
                <Typography >{role}</Typography>
            </Container>
        </div>
    )
}

export default BodyLeft;