import React from 'react'
import Loading from '../components/Loading'
import Thumbnail from '../components/Thumbnail'
import { Card } from 'semantic-ui-react'
import { connect } from 'react-redux'

export function SimpleGallery(props) {
  if(props.isFetching) {
    return (<Loading />)
  } else if(props.albums) {
    const thumbnails = props.albums.map(item => (<Thumbnail key={item.albumId + '#' + item.id} {...item} />))
    return (<Card.Group>
      {thumbnails}
    </Card.Group>)
  } else if(props.error) {
    return (<div>An error occured</div>)
  }
}

const mapStateToProps = (state) => ({
    albums: state.albums,
    isFetching: state.isFetching,
    error: state.error
})

const Gallery = connect(mapStateToProps)(SimpleGallery)

const mapStateToAlbumProps = (state, ownProps) => {
  if(state.albums && state.albums.length) {
    const albums = state.albums.filter(item => item.albumId == ownProps.params.albumId)
    return {
      isFetching: state.isFetching,
      albums,
      error: state.error
    }
  } else {
      return {
        isFetching: state.isFetching,
        error: state.error
      }
  }
}

export const Album = connect(mapStateToAlbumProps)(SimpleGallery)

export default Gallery
