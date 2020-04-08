require('dotenv').config();
const express = require('express');
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

const app = express();

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected')
});

app.get('/api/events/:urlname', (req, res) => {
    const {urlname} = req.params;
    console.log(urlname)

    res.status(200).send('get request fired')
})

const port = SERVER_PORT;
app.listen(port, () => console.log(`Port running on port ${port}`));