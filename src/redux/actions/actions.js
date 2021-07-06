import { INCREMENT, DECREMENT } from "./actionTypes";

// actions
export const incrementHandler = () => {
  return {
    type: INCREMENT,
  };
};

export const decrementHandler = () => {
  return {
    type: DECREMENT,
  };
};
