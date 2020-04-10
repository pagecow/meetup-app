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
    breakText: {
        wordWrap: "break-word",
        marginBottom: "30px",
    },
    leftCont: {
        margin: "40px 0 0 0",
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
        flexDirection: "column",
        justifyContent: "space-between",
        height: "490px",
        width: "330px",
        backgroundColor: "white",
        padding: "18px",
        outline: "0px",
        borderRadius: "8px",
        margin: "40px 0 200px 0",
    },
    whiteCont3: {
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
    },
    whiteCont4: {
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

function Body(props){
    const classes = useStyles();
    const event_info = props.event_info;
    const rsvps_info = props.rsvps_info;
    console.log("event_info:", event_info);
    console.log("rsvps_info:", rsvps_info);

    let name, thumbnail, thumbnail2, name2, role;
    if(!rsvps_info.member){
        name = null;
        thumbnail = null;
        thumbnail2 = null;
        name2 = null;
        role = null;
    } else {
        name = rsvps_info.group.name;
        thumbnail = rsvps_info.group.group_photo.thumb_link;
        thumbnail2 = rsvps_info.member.photo.thumb_link;
        name2 = rsvps_info.member.name;
        role = rsvps_info.member.role;
    };
    if (role) {
        role = rsvps_info.member.role.charAt(0).toUpperCase() + role.slice(1);
    };

    let visibility, latitude, longitude, location, address, city, state;
    if(!event_info){
        visibility = null;
        latitude = null;
        longitude = null;
        location = null;
        address = null;
        city = null;
        state = null;
    } else if (event_info.visibility && event_info.venue.lat && event_info.venue.lon && event_info.venue.name) {
        visibility = event_info.visibility;
        latitude = event_info.venue.lat;
        longitude = event_info.venue.lon;
        location = event_info.venue.name;
        address = event_info.venue.address_1;
        city = event_info.venue.city;
        state = event_info.venue.state;
    }; 
    if (visibility) {
        visibility = event_info.visibility.charAt(0).toUpperCase() + visibility.slice(1);
    };

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let options2 = { timeZone: 'America/Chicago', hour: '2-digit', minute: '2-digit' };
    let date  = new Date(event_info.time);
    let endTime  = new Date(event_info.time + event_info.duration);

    function createMarkup() {
        return {__html: event_info.description};
      }

    return (
        <div id="body">
            <Container id="body-container" maxWidth="md">
            <div className="right-info-2">
                    <Container className={classes.whiteCont4}>
                        <img className="group-img" src={thumbnail} />
                        <div>
                            <Typography className={classes.boldText}>{name}</Typography>
                            <Typography className={classes.secondaryLight}>{visibility} group</Typography>
                        </div>
                    </Container>

                    <Container className={classes.whiteCont4}>
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
                                yesIWantToUseGoogleMapApiInternals
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
                
                <Container className={classes.leftCont} maxWidth="sm">
                    <Typography className={classes.boldText} variant="h6">Details</Typography>
                    <Typography className={classes.breakText} dangerouslySetInnerHTML={createMarkup()} />
                    <Typography className={classes.boldText} variant="h6">Attendees (1)</Typography>
                    <Container className={classes.whiteCont3} >
                        <img className="hosted-img-2" src={thumbnail2}/>
                        <Typography className={classes.boldText}>{name2}</Typography>
                        <Typography >{role}</Typography>
                    </Container>
                </Container>

                <div className="right-info">
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
                        <div style={{height: "200px", width: "330px", margin: "0 0 -18px -18px"}}>
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
            </Container>
        </div>
    )
}

export default Body;