import React from 'react';
import Logo from '../img/logo2.png';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
class HomeTemp extends React.Component {
  state = {
    distance: ''
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      let distance;
      const launchDate = new Date('Dec 1 2018 12:00:00').getTime()
      const today = new Date().getTime()
      distance = launchDate - today;
      this.setState({ distance: distance })

    }, 1000);

  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const { distance } = this.state;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(distance % (1000 * 60) / (1000));
    let countdown;
    if (days > 0) {
      countdown = (
        <div className='countdown'>
          <div>
            {days}<p>Days</p>
          </div>
          <div>
            {hours}<p>Hours </p>

          </div>
          <div>
            {minutes}<p>Minutes</p>

          </div>
          <div>
            {seconds}<p>Seconds</p>

          </div>
        </div>
      )
    } else {
      countdown = <span></span>
    }

    return (
      <div className='landing-temp'>
        <div className='landing-inner-temp'>
          <img src={Logo} alt='Logo' height='250px' width='250px' />
          <p>A Reat Time Chat Team app for developers and Programmers</p>
          <h1 className='comingoon'>Coming Soon</h1>
          <Link className='beta' to='/auth'>Join beta</Link>
          {countdown}

        </div>

      </div>
    )
  }

}

export default HomeTemp;