This project is a Meetup app clone. It interacts with Meetup's api to generate an event description page.

This app was definitely more complex than it had to be. The purpose of making it more complex was to show that I knew how to use Redux, Node.js, SQL, and Heroku. This could have been a front-end-only application. I also used both Material-UI's built in useStyles function and standard CSS to show I knew how to use both.

The live version of this application can be found at this url: http://165.227.23.18:7777/#/

Here's how to get the application up and running on your local machine:

## Installation

### `clone the application`

### `npm install`

### `create a .env file`

Copy and paste this to your .env file:

SERVER_PORT=7777 <br />
CONNECTION_STRING=postgres://cacrlpviwtlvnh:9943f86fe58292734b6c9fe6f1b187edfdac93dda57b88a629661112ed25ed72@ec2-18-206-84-251.compute-1.amazonaws.com:5432/dfrfafiklsn6mr?ssl=true 

### `open two terminals`

### `type 'nodemon' into one terminal`

This will start the server and connect to the database. The terminal should say 'Port running on port 7777' and 'db connected'.

### `type 'npm start' into the second terminal`

The application should open in http://localhost:3000/
