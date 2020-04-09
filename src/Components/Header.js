import React from 'react';
import { Breadcrumbs, Link } from '@material-ui/core';

function Header(){
    return (
        <header id="header">
            <img id='logo' src='https://www.meetup.com/mu_static/en-US/logo--script.004ada05.svg' alt=''/>
            <Breadcrumbs separator="">
                <Link color="secondary" underline="none" href="https://www.meetup.com/find/events/">Explore</Link>
                <Link color="secondary" underline="none" href="https://secure.meetup.com/messages/">Messages</Link>
                <Link color="secondary" underline="none" href="/">Notifications</Link>
            </Breadcrumbs>
        </header>
    )
}

export default Header;