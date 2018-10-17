import React, { Component } from 'react';
import Clock from 'components/Clock';

export default class ClockContainer extends Component {
  componentDidMount() {
    this.props.dispatchStartClock();
  }

  render() {
    const { clock } = this.props;
    return <Clock lastUpdate={clock.get('lastUpdate')} />;
  }
}
