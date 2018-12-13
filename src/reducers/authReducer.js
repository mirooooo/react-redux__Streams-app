import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
  inSignedIn: null,
  userId: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, inSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, inSignedIn: false, userId: null };
    default:
      return state;
  }
};
