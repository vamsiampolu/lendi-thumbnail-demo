import React from 'react'
import renderer from 'react-test-renderer'
import Thumbnail from './Thumbnail'

describe('Thumbnail', () => {
  it('renders correctly', function() {
    const props = {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "http://placehold.it/600/92c952",
      "thumbnailUrl": "http://placehold.it/150/30ac17"
    }
    const component = renderer.create(<Thumbnail {...props}/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
