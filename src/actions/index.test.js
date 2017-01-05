import * as actionTypes from './actionTypes'
import { loadAlbums } from './index'
import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import FetchError from 'node-fetch/lib/fetch-error'

describe('fetchAlbums', () => {
  afterEach(() => nock.cleanAll())

  it('creates LOAD_ALBUMS_SUCCESS when successful', () => {
    const middlewares = [thunk]
    const mockStore = configureMockStore(middlewares)
    const body =[
    {
      "albumId": 100,
      "id": 4993,
      "title": "est qui qui id fugit",
      "url": "http://placehold.it/600/c96241",
      "thumbnailUrl": "http://placehold.it/150/3db3b6"
    },
    {
      "albumId": 100,
      "id": 4994,
      "title": "in vel error quas officiis repellendus commodi",
      "url": "http://placehold.it/600/6ffa50",
      "thumbnailUrl": "http://placehold.it/150/16ee77"
    },
    {
      "albumId": 100,
      "id": 4995,
      "title": "sequi sunt enim aut at",
      "url": "http://placehold.it/600/e5109",
      "thumbnailUrl": "http://placehold.it/150/a912da"
    }
    ]

    nock(`https://jsonplaceholder.typicode.com/`)
      .get(`/photos`)
      .reply(200, body)

      const expectedActions = [
        {
          type: actionTypes.LOAD_ALBUMS
        },
        {
          type: actionTypes.LOAD_ALBUMS_SUCCESS,
          payload: {
            albums: body
          }
        }
      ]

      const store = mockStore({})
      return store.dispatch(loadAlbums())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
  })

  it('dispatches LOAD_ALBUMS_FAIL if it fails', () => {
    const middlewares = [thunk]
    const mockStore = configureMockStore(middlewares)
    nock(`https://jsonplaceholder.typicode.com/`)
    .get(`/photos`)
    .replyWithError('something awful happened')

    const expectedActions = [
    {
      type: actionTypes.LOAD_ALBUMS
    },
    {
      type: actionTypes.LOAD_ALBUMS_FAIL,
      payload: new FetchError(`request to https://jsonplaceholder.typicode.com/photos failed, reason: something aweful happened`),
      error: true
    }
    ]

    const store = mockStore({})

    return store.dispatch(loadAlbums())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })

  })
})

