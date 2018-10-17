import Immutable from 'immutable';
import { TICK_CLOCK, START_CLOCK } from './actions';

const initialState = Immutable.fromJS({
  lastUpdate: 0,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case START_CLOCK:
      return state;
    case TICK_CLOCK:
      return state.set('lastUpdate', action.ts);
    default: {
      return state;
    }
  }
};
