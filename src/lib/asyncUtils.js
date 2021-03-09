export const createPromiseThunk = (type, promiseCreator) => {
  const [PENDING, SUCCESS, ERROR] = [
    `${type}_PENDING`,
    `${type}_SUCCESS`,
    `${type}_ERROR`,
  ];

  return (...param) => async (dispatch) => {
    dispatch({ type: PENDING });
    // dispatch({ type, param });
    try {
      const payload = await promiseCreator(...param);
      dispatch({ type: SUCCESS, payload }); // 성공
      // return payload;
    } catch (error) {
      dispatch({ type: ERROR, payload: error }); // 실패
      throw error;
    }
  };
};
