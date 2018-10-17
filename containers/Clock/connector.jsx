import { connect } from 'react-redux';
import { dispatchStartClock, dispatchTickClock } from 'store/Clock/actions';
import { selectClockState } from 'store/Clock/selectors';
import Component from './component';

const mapStateToProps = (state) => {
  return {
    clock: selectClockState(state),
  };
};

const dispatchers = {
  dispatchStartClock,
  dispatchTickClock,
};

export default connect(
  mapStateToProps,
  dispatchers
)(Component);
