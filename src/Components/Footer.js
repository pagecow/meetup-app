import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footer: {
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: '#2f363f',
        width: '100%',
        height: '100px'
    },
    text: {
        color: 'white',
        fontSize: '10px',
        position: 'absolute',
        bottom: '14px',
    }
}))

function Footer(){
    const classes = useStyles();

    return (
        <footer id="footer">
            <Container className={classes.footer} maxWidth={false}>
                <Typography className={classes.text}>© 2020 Meetup LLC</Typography>
            </Container>
        </footer>
    )
}

export default Footer;