import { actionTypes } from './actions'
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  error: false,
  data: null,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE: 
      return {
        ...state,
        data: action.payload
      }
    case actionTypes.FAILURE:
      return {
        ...state,
        error: action.error,
      }
    case actionTypes.LOAD_DATA:
      return {
        ...state,
        data: null,
      }

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
      }

    default:
      return state
  }
}

export default reducer
