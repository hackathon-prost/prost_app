import { LOAD_REPOS_SUCCESS, LOAD_REPOS, LOAD_REPOS_ERROR, LOAD, USER_LOGIN, USER_LOGIN_ERROR, USER_LOGIN_SUCCESS } 
from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN: {
      const newState = {
        ...state,
        loading: true,
        error: false,
        currentUser: false
      }
      return newState;
    }

    case USER_LOGIN_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        error: false,
        currentUser: action.currentUser
      }
      return newState;
    }

    case USER_LOGIN_ERROR: {
      return { ...state, error: action.error, loading: false };
    }

    case LOAD_REPOS: {
      const newState = {
        ...state,
        loading: true,
        error: false,
        userData: {
          repositories: false,
        },
      };

      return newState;
    }
    case LOAD_REPOS_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        userData: {
          repositories: action.repos,
        },
        currentUser: action.username,
      };
      return newState;
    }

    case LOAD_REPOS_ERROR: {
      return { ...state, error: action.error, loading: false };
    }
    default:
      return state;
  }
}

export default appReducer;
