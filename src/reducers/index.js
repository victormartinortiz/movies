const reducer = (state, action) => {
  function exist(payloadId) {
    if (state.myList.find(item => item.id === payloadId)) {
      return true;
    }
    return false;
  }

  switch (action.type) {
    case 'SET_FAVORITE':
      if (exist(action.payload.id)) return { ...state };

      return { ...state, myList: [...state.myList, action.payload] };

    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: [...state.myList.filter(item => item.id !== action.payload)]
      };

    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload
      };

    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload
      };

    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload
      };

    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing:
          state.trends.find(item => item.id === Number(action.payload)) ||
          state.originals.find(item => item.id === Number(action.payload)) ||
          []
      };

    case 'SEARCH_REQUEST':
      if (action.payload === '') {
        return {
          ...state,
          search: []
        };
      }

      return {
        ...state,
        search:
          state.trends.filter(item =>
            item.title.toLowerCase().includes(action.payload.toLowerCase())
          ) ||
          state.originals.filter(item =>
            item.title.toLowerCase().includes(action.payload.toLowerCase())
          ) ||
          state.myList.filter(item =>
            item.title.toLowerCase().includes(action.payload.toLowerCase())
          ) ||
          []
      };

    default:
      return state;
  }
};

export default reducer;

/* ||
            state.originals.filter(item =>
              item.title.toLowerCase().includes(action.payload.toLowerCase())
            ) ||
            state.myList.filter(item =>
              item.title.toLowerCase().includes(action.payload.toLowerCase())
            ) */
