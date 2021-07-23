import axios from 'axios';
import { BONDS_REQUEST_FAIL, BONDS_REQUEST_START, BONDS_REQUEST_SUCCESS } from '../actionTypes';

export const bondsFetchStart = () => ({
  type: BONDS_REQUEST_START,
});

export const bondsFetchSuccess = (payload) => ({
  type: BONDS_REQUEST_SUCCESS,
  payload,
});

export const bondsFetchFails = (payload) => ({
  type: BONDS_REQUEST_FAIL,
  payload,
});

export const fetchBonds = () => async (dispatch) => {
  dispatch(bondsFetchStart());
  try {
    const OFZ = await axios.get('https://iss.moex.com/iss/engines/stock/markets/bonds/boards/TQOB/securities.json');
    const CORP = await axios.get('https://iss.moex.com/iss/engines/stock/markets/bonds/boards/TQCB/securities.json');
    const response = [...OFZ.data.securities.data, ...CORP.data.securities.data];
    dispatch(bondsFetchSuccess(response));
  } catch (err) {
    dispatch(bondsFetchFails(err));
  }
};
