import fetch from 'isomorphic-fetch'
import * as actionTypes from './actionTypes'

export function fetchAlbums() {
  return fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        throw new Error(`Error occured when fetching photos with ${response.statusText}`)
      }
    })
}

export function loadAlbumsSuccess(data) {
  return {
    type: actionTypes.LOAD_ALBUMS_SUCCESS,
    payload: {
      albums: data
    }
  }
}

export function loadAlbumsError(error) {
  return {
    type: actionTypes.LOAD_ALBUMS_FAIL,
    payload: error,
    error: true
  }
}

export function loadAlbums() {
  return function(dispatch) {
    dispatch({
      type: actionTypes.LOAD_ALBUMS
    })
    return fetchAlbums()
      .then(function(data) {
        dispatch(loadAlbumsSuccess(data))
      })
      .catch(function(error) {
        dispatch(loadAlbumsError(error))
      })
  }
}
