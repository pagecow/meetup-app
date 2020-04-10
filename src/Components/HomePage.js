import React from 'react';
import { connect } from 'react-redux';
import { updateEventId } from '../redux/reducer';
import axios from 'axios';

import Header from './Header';
import UpperBody from './UpperBody';
import Body from './Body';
import Footer from './Footer';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
        let data = res.data[0];

        this.props.updateEventId(data.id);

        this.setState({
          event_info: data
        })
      })
      .then(() => {
        axios.get(`/api/events/rsvps/${this.props.event_id}`)
          .then(res => {
            let data = res.data[0];

            this.setState({
              rsvps_info: data
            })
          })
      })
  }

  render() {
    const {event_info, rsvps_info} = this.state;

    return (
      <div id="home-page">
        <Header/>
        <body id="home-body">
          <UpperBody event_info={event_info} rsvps_info={rsvps_info} />
          <Body event_info={event_info} rsvps_info={rsvps_info} />
        </body>
        <Footer/>
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