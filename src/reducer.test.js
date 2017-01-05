import reducer from './reducer'
import * as actionTypes from './actions/actionTypes'

describe('reducer', () => {
  it('sets isFetching flag on LOAD_ALBUMS', () => {
    const state = reducer({}, { type: actionTypes.LOAD_ALBUMS })
    expect(state).toEqual({ isFetching: true })
  })

  it('sets the data on LOAD_ALBUMS_SUCCESS', () => {
    const albums =[
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

    const state = reducer({}, {
      type: actionTypes.LOAD_ALBUMS_SUCCESS,
      payload: {
        albums
      }
    })
    expect(state).toEqual({
      isFetching: false,
      albums
    })
  })

  it('sets an error on LOAD_ALBUMS_FAIL', () => {
    const action = {
      type: actionTypes.LOAD_ALBUMS_FAIL,
      payload: new Error('something aweful happened'),
      error: true
    }
    const state = reducer({}, action)
    expect(state.isFetching).toBe(false)
    expect(state.error).toBeDefined()
  })
})
