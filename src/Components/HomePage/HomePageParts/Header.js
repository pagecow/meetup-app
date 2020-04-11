import React from 'react';

import { Breadcrumbs, Link } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

function Header(){
    return (
        <header id="header">
            <img id='logo' src='https://www.meetup.com/mu_static/en-US/logo--script.004ada05.svg' alt=''/>
            <Breadcrumbs id="menu" separator="">
                <Link color="secondary" underline="none" href="https://www.meetup.com/find/events/">Explore</Link>
                <Link color="secondary" underline="none" href="https://secure.meetup.com/messages/">Messages</Link>
                <Link color="secondary" underline="none" href="/">Notifications</Link>
            </Breadcrumbs>
            <Breadcrumbs id="menu2" separator="">
                <div className="second-header">
                    <SearchIcon color="secondary" underline="none" href="https://www.meetup.com/find/events/"/> 
                    <Link color="secondary" underline="none" href="https://www.meetup.com/find/events/">Explore</Link>
                </div>
                <div className="second-header">
                    <GroupOutlinedIcon color="secondary" underline="none" href="https://www.meetup.com/find/"/> 
                    <Link color="secondary" underline="none" href="https://www.meetup.com/find/">Groups</Link>
                </div>
                <div className="second-header">
                    <ChatBubbleOutlineIcon color="secondary" underline="none" href="https://secure.meetup.com/messages/"/> 
                    <Link color="secondary" underline="none" href="https://secure.meetup.com/messages/">Messages</Link>
                </div>
                <div className="second-header">
                    <NotificationsNoneIcon color="secondary" underline="none" href="https://www.meetup.com/find/?activity=true"/> 
                    <Link color="secondary" underline="none" href="https://www.meetup.com/find/?activity=true">Notifications</Link>
                </div>
            </Breadcrumbs>
        </header>
    )
}

export default Header;