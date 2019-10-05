import { CHANGE_USERNAME, CHANGE_PASSWORD } from './constants';

// The initial state of the App
const initialState = {
  username: '',
  password: ''
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      return { ...state, username: action.username };
    case CHANGE_PASSWORD:
    console.log(action);
      return {...state, password: action.password }
    default:
      return state;
  }
}

export default loginReducer;
