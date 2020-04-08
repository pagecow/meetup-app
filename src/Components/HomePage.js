import React from 'react';
import { connect } from 'react-redux';
import { updateEventId } from '../redux/reducer';
import { Button, Typography } from '@material-ui/core';
import axios from 'axios';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        urlname: '',
        event_id: '',
        event_info: [],
        rsvps_info: [],
        redirect: false,
    }
  }

  componentDidMount = () => {
    this.handleEventGet();
  }

  handleEventGet = () => {
    axios.get(`/api/events`)
      .then(res => {
        console.log(res.data[0]);
        this.props.updateEventId(res.data[0].id);
      })
      .then(() => {
        axios.get(`/api/events/rsvps/${this.props.event_id}`)
          .then(res => console.log(res.data[0]))
      })
  }

  render() {
    return (
      <div id="home-page">
        <body id="home-body">
          <Typography color="primary" variant="h2">Meetup App</Typography>
          <Button className="button" color="primary" variant="outlined" >outlined</Button>
          <Button className="button" color="primary" variant="contained" >contained</Button>
        </body>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return reduxState
}

const mapDispatchToProps = {
  updateEventId
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);