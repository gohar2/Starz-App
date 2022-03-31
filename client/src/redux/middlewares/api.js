import axios from 'axios';
import { toast } from 'react-toastify';
import { mapAPIError } from './mapAPIError';

export const api =
  ({ dispatch, getState }) =>
  next =>
  async action => {
    if (!action.payload?.apiName) return next(action);

    next(action);

    const { apiName, data, method, onFail, onSuccess, url } = action.payload;
    const baseURL = process.env.REACT_APP_BASE_URL;

    dispatch({ payload: apiName, type: 'globalLoading/start' });
    dispatch({ type: `${apiName}/${action.type}` });

    const headers = { key: process.env.REACT_APP_AUTH_KEY };
    try {
      const response = await axios.request({
        baseURL,
        data,
        headers,
        method,
        url
      });
      dispatch({
        payload: response.data,
        type: `${apiName}/${action.type}Success`
      });
      dispatch({ payload: apiName, type: 'globalLoading/stop' });

      onSuccess && dispatch(onSuccess(response.data, data));
    } catch (err) {
      const error = err;
      const { message, response } = error;
      const payload = {
        message: mapAPIError(error),
        statusCode: response?.status,
        statusText: response?.statusText
      };
      if (payload.statusCode === 403) {
        toast.dismiss();
      } else {
        dispatch({ payload, type: `${apiName}/${action.type}Fail` });
        dispatch({ payload, type: `globalErrors/get` });
      }
      dispatch({ payload: apiName, type: 'globalLoading/stop' });
      onFail && dispatch(onFail(message));
    }
  };
