import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR
} from './types';

// get techs from server
export const getTechs = () => {
  return async (dispatch, getState) => {
    try {
      setLoading();

      const res = await fetch('/techs');
      const data = await res.json();

      dispatch({
        type: GET_TECHS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: TECHS_ERROR,
        payload: error.response.statusText
      });
    }
  };
};

// add technician to db
export const addTech = tech => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText
    });
  }
};

// delete technician from db
export const deleteTech = id => {
  return async (dispatch, getState) => {
    try {
      setLoading();

      await fetch(`/techs/${id}`, {
        method: 'DELETE'
      });

      dispatch({
        type: DELETE_TECH,
        payload: id
      });
    } catch (error) {
      dispatch({
        type: TECHS_ERROR,
        payload: error.response.statusText
      });
    }
  };
};

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
