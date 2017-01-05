import * as actionTypes from './actions/actionTypes'

export default function (state = {}, action) {
  switch(action.type) {
    case actionTypes.LOAD_ALBUMS:
      return { isFetching: true }
    case actionTypes.LOAD_ALBUMS_SUCCESS:
      return {
        isFetching: false,
        albums: action.payload.albums
      }
    case actionTypes.LOAD_ALBUMS_FAIL:
      return {
        isFetching: false,
        error: action.payload
      }
    default:
      return state
  }
}
