import React from 'react'
import { SimpleGallery } from './Gallery'
import renderer from 'react-test-renderer'

describe('Gallery', () => {
  it('renders correctly whe Loading', () => {
    const propsLoading = {
      isFetching: true
    }

    const component = renderer.create(<SimpleGallery {...propsLoading} />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with Thumbnails', () => {
    const albums = [
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "http://placehold.it/600/92c952",
      "thumbnailUrl": "http://placehold.it/150/30ac17"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "http://placehold.it/600/771796",
      "thumbnailUrl": "http://placehold.it/150/dff9f6"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "http://placehold.it/600/24f355",
      "thumbnailUrl": "http://placehold.it/150/1941e9"
    }
    ]
    const propsImages = {
      albums,
      isFetching: false
    }
    const component = renderer.create(<SimpleGallery {...propsImages} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should display error correctly', () => {
    const props = {
      error: new Error('something aweful happened')
    }

    const component = renderer.create(<SimpleGallery {...props} />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
