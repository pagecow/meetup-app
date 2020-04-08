require('dotenv').config();
const express = require('express');
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

const app = express();
const fetch = require('node-fetch');

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected')
});

app.get('/api/events', async(req, res) => {
    const db = req.app.get('db');

    let urlObj = await db.get_url();
    let url = urlObj[0].meetup_url;
    console.log(url);

    fetch(`https://api.meetup.com/${url}/events?&sign=true&photo-host=public&page=1`)
        .then(res => res.json())
        .then(data => res.status(200).send(data)) 
})

app.get('/api/events/rsvps/:event_id', async(req, res) => {
    const {event_id} = req.params;
    console.log(event_id);

    const db = req.app.get('db');

    let urlObj = await db.get_url();
    let url = urlObj[0].meetup_url;
    console.log(url);

    fetch(`https://api.meetup.com/${url}/events/${event_id}/rsvps`)
        .then(res => res.json())
        .then(data => res.status(200).send(data)) 
})

const port = SERVER_PORT;
app.listen(port, () => console.log(`Port running on port ${port}`));