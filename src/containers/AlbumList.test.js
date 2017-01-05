import React from 'react'
import renderer from 'react-test-renderer'
import { SimpleAlbumMenu } from './AlbumList'

describe('SimpleAlbumMenu', () => {
  it('renders correctly when albumItems do not exist', () => {
    const props = {
      albums: []
    }
    const component = renderer.create(<SimpleAlbumMenu {...props} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when albumItems exist', () => {
    const props = {
      albums: ['1','2','3']
    }

    const component = renderer.create(<SimpleAlbumMenu {...props} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
