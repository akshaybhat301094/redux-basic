import * as ACTIONS from './actionTypes';

export const bugAdded = (description) => ({
  type: ACTIONS.BUG_ADDED,
  payload: {
    description: description,
  },
});

export function bugRemoved(id) {
  return {
    type: ACTIONS.BUG_REMOVED,
    payload: {
      id,
    },
  };
}

export const markResolved = (id) => ({
  type: ACTIONS.BUG_RESOLVED,
  payload: {
    id,
  },
});
