import React from 'react';
import { connect } from 'react-redux';
import { updateEventId } from '../redux/reducer';
import { Button, Typography } from '@material-ui/core';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        urlname: '',
        event_id: '',
        event_info: [],
        redirect: false,
    }
  }

  componentDidMount = () => {
    this.setState({
      urlname: this.props.urlname,
    })
  }

  handleEventUpdate = (event_id) => {
    this.props.updateEventId(event_id);
  }

  render() {
    return (
      <body id="home-body">
        <Typography color="primary" variant="h2">Meetup App</Typography>
        <Button className="button" color="primary" variant="outlined" >outlined</Button>
        <Button className="button" color="primary" variant="contained" >contained</Button>
      </body>
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
