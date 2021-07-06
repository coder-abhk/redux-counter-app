import { INCREMENT, DECREMENT } from "../actions/actionTypes";

const initialState = {
  count: 0,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case DECREMENT: {
      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : 0,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducers;
