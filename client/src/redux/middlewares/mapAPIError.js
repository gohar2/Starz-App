import axios from 'axios';

export const mapAPIError = error => {
  const custom = null;
  if (!axios.isAxiosError(error)) return custom;

  if (error.response) {
    // server throw status > 200
    const err = error.response.data;
    return err.Message || custom;
  } else if (error.request) {
    // The request was made but no response was received
    return error.message || custom;
  } else {
    // Something happened in setting up the request that triggered an Error
    return error.message;
  }
};
