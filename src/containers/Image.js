import React from 'react'
import { connect } from 'react-redux'
import { SimpleImage } from '../components/Image'

const mapStateToProps = (state, ownProps) => {
  if(state.albums) {
    const { url } = state.albums.filter(item => item.id == ownProps.params.id)[0]
    return { url }
  } else {
    return { url: null }
  }
}

let Image = connect(mapStateToProps)(SimpleImage)

export default Image
