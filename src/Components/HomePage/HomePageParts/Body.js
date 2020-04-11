import React from 'react';

import BodyLeft from './BodyLeft';
import BodyRightTop from './BodyRightTop';
import BodyRightBottom from './BodyRightBottom';

import { Container, Typography, makeStyles } from '@material-ui/core';

function Body(props){
    const event_info = props.event_info;
    const rsvps_info = props.rsvps_info;

    return (
        <div id="body">
            <Container id="body-container" maxWidth="md">
                <BodyRightTop event_info={event_info} rsvps_info={rsvps_info}/>
                <BodyLeft event_info={event_info} rsvps_info={rsvps_info}/>
                <BodyRightBottom event_info={event_info} rsvps_info={rsvps_info}/>
            </Container>
        </div>
    )
}

export default Body;