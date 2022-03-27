import axios from 'axios';
import * as actions from '../apiActions';

const baseURL = '';
const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.generateCallBegan.type) return next(action);

    const { path, longUrl, onStart, onSuccess, onError } = action.payload;
    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
      const response = await axios.post(
        `${baseURL}${path}`,
        { url: longUrl },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // recieved response without error
      dispatch(actions.generateCallSucess(response.data));

      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      // dispatch error occured action
      console.dir(error)
      dispatch(actions.generateCallFailed(error.message));
      if (onError) dispatch({ type: onError, payload: error.response.data });
    }
  };

export default api;
