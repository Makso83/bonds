import { BONDS_REQUEST_FAIL, BONDS_REQUEST_START, BONDS_REQUEST_SUCCESS } from '../actionTypes';
import mapBondsToState from '../../utils/mapBondsToState';

const initialState = {
  isLoading: false,
  isLoaded: false,
  error: null,
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BONDS_REQUEST_START: {
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
      };
    }
    case BONDS_REQUEST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: mapBondsToState(action.payload),
        error: null,
      };
    }
    case BONDS_REQUEST_FAIL: {
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        data: [],
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
