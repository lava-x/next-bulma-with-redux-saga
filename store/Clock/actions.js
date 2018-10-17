// ========================= ACTIONS
export const TICK_CLOCK = 'TICK_CLOCK';
export const START_CLOCK = 'START_CLOCK';

// ========================= DISPATCHERS
export const dispatchStartClock = () => ({ type: START_CLOCK });

export const dispatchTickClock = (isServer) => ({
  type: TICK_CLOCK,
  light: !isServer,
  ts: Date.now(),
});
