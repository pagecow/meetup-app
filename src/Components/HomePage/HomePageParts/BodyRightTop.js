import React from 'react';
import GoogleMapReact from 'google-map-react';

import { Container, Typography, makeStyles } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ScheduleIcon from '@material-ui/icons/Schedule';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
    secondaryLight: {
        color: theme.palette.secondary.light,
        fontSize: "14px",
    },
    secondaryDark: {
        color: theme.palette.secondary.dark,
        fontSize: "14px",
    },
    link: {
        color: "#00a2c7",
        fontSize: "14px",
    },
    boldText: {
        fontWeight: 900,
    },
    whiteCont: {
        display: "flex",
        width: "330px",
        backgroundColor: "white",
        padding: "18px",
        outline: "0px",
        borderRadius: "8px",
        margin: "40px 0 0 0",
    },
    whiteCont2: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        height: "auto",
        width: "100%",
        backgroundColor: "white",
        padding: "18px",
        outline: "0px",
        borderRadius: "8px",
        margin: "0",
    },
    whiteCont3: {
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        backgroundColor: "white",
        padding: "18px",
        outline: "0px",
        borderRadius: "8px",
        margin: "10px 0 0 0",
        padding: "10px",
    },
    icons: {
        marginRight: "20px",
        color: theme.palette.secondary.light,
    }
}))

function BodyRightTop(props){
    const classes = useStyles();
    const event_info = props.event_info;

    let latitude, longitude, location, address, city, state;
    if(!event_info){
        latitude = null;
        longitude = null;
        location = null;
        address = null;
        city = null;
        state = null;
    } else if (event_info.visibility && event_info.venue.lat && event_info.venue.lon && event_info.venue.name) {
        latitude = event_info.venue.lat;
        longitude = event_info.venue.lon;
        location = event_info.venue.name;
        address = event_info.venue.address_1;
        city = event_info.venue.city;
        state = event_info.venue.state;
    }; 

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let options2 = { timeZone: 'America/Chicago', hour: '2-digit', minute: '2-digit' };
    let date  = new Date(event_info.time);
    let endTime  = new Date(event_info.time + event_info.duration);

    return (
       <div id="body-right">
            <div id="body-container">
                <div className="right-info-2">
                    <Container className={classes.whiteCont2}>
                        <div className="event-info">
                            <CheckIcon className={classes.icons} color="secondary" />
                            <div>
                                <Typography className={classes.secondaryDark}>RSVP Opens</Typography>
                                <Typography className={classes.secondaryDark}>Tuesday, May 12, 2020</Typography>
                                <Typography className={classes.secondaryDark}>{date.toLocaleTimeString("en-US", options2)}</Typography>
                            </div>
                        </div>
                        <div className="event-info">
                            <ScheduleIcon className={classes.icons} color="secondary" />
                            <div>
                                <Typography className={classes.secondaryDark}>{date.toLocaleDateString("en-US", options)}</Typography>
                                <Typography className={classes.secondaryDark}>{date.toLocaleTimeString("en-US", options2)} to {endTime.toLocaleTimeString("en-US", options2)}</Typography>
                                <Typography className={classes.secondaryDark}>Every 2nd Tuesday of the month</Typography>
                                <a className={classes.link} href="https://calendar.google.com" target="_blank">Add to calendar</a>
                            </div>
                        </div>
                        <div className="event-info">
                            <LocationOnOutlinedIcon className={classes.icons} color="secondary" />
                            <div>
                                <a href={`https://www.google.com/maps/search/?api=1&query=${latitude}%2C${longitude}`} target="_blank" className={classes.secondaryDark}>{location}</a>
                                <Typography className={classes.secondaryLight}>{address} * {city}, {state}</Typography>
                                <Typography className={classes.secondaryDark} style={{paddingTop: "5px"}}>How to find us</Typography>
                            </div>
                        </div>
                        <div className="google-map">
                            <GoogleMapReact 
                                bootstrapURLKeys={{ key: 'AIzaSyAsvChBYmLNEGzqxdiHOzXQRuKv1KCgTGY', language: 'en' }}
                                center={{lat: latitude, lng: longitude}}
                                defaultZoom={12}
                                >
                                <a href={`https://www.google.com/maps/search/?api=1&query=${latitude}%2C${longitude}`} target="_blank">
                                    <LocationOnIcon
                                        lat={latitude}
                                        lng={longitude}
                                        fontSize="large"
                                        color="primary"
                                        />
                                </a>
                            </GoogleMapReact>
                        </div>    
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default BodyRightTop;