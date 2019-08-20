import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  UPDATE_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT
} from './types';

// get logs from server
export const getLogs = () => {
  return async (dispatch, getState) => {
    try {
      setLoading();

      const res = await fetch('/logs');
      const data = await res.json();

      dispatch({
        type: GET_LOGS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: LOGS_ERROR,
        payload: error.response.data
      });
    }
  };
};

// delete log from server
export const deleteLog = id => {
  return async (dispatch, getState) => {
    try {
      setLoading();

      await fetch(`/logs/${id}`, {
        method: 'DELETE'
      });

      dispatch({
        type: DELETE_LOG,
        payload: id
      });
    } catch (error) {
      dispatch({
        type: LOGS_ERROR,
        payload: error.response.data
      });
    }
  };
};

// update log on server
export const updateLog = log => {
  return async (dispatch, getState) => {
    try {
      setLoading();

      const res = await fetch(`/logs/${log.id}`, {
        method: 'PUT',
        body: JSON.stringify(log),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await res.json();

      dispatch({
        type: UPDATE_LOG,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: LOGS_ERROR,
        payload: error.response.data
      });
    }
  };
};

// add a new log
export const addLog = log => {
  return async (dispatch, getState) => {
    try {
      setLoading();

      const res = await fetch('/logs', {
        method: 'POST',
        body: JSON.stringify(log),
        headers: {
          'COntent-Type': 'application/json'
        }
      });
      const data = await res.json();

      dispatch({
        type: ADD_LOG,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: LOGS_ERROR,
        payload: error.response.data
      });
    }
  };
};

// set current log
export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  };
};

// clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
