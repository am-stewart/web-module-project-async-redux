import axios from 'axios';

export const FETCH_START = "FETCH-START";
export const FETCH_FAIL = "FETCH-FAIL";
export const FETCH_SUCCESS = "FETCH-SUCCESS";

export const getQuote = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios.get('https://taylorswiftapi.herokuapp.com/get')
      .then(resp => {
        dispatch(fetchSuccess(resp.data));
      })
      .catch(err => {
        dispatch(fetchFail(err));
      })
  }
}

export const fetchStart = () => {
  return({type:FETCH_START});
}

export const fetchSuccess = (quote) => {
  return({type:FETCH_SUCCESS, payload: quote});
}

export const fetchFail = (errorMessage) => {
  return({type:FETCH_FAIL, payload: errorMessage});
}