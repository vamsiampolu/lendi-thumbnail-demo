import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import uniq from 'lodash.uniq'

export function AlbumItem(props) {
  return (<Menu.Item><Link to={"/albums/" + props.albumId}>Album {props.albumId}</Link></Menu.Item>)
}

export function SimpleAlbumMenu(props) {
  if(props.albums && props.albums.length) {
    const albumItems = props.albums.map(albumId  => (<AlbumItem key={albumId} albumId={albumId} />))
    return (<Menu pointing vertical>{albumItems}</Menu>)
  } else {
    return null;
  }

}

const mapStateToProps = state => {
  if(state.isFetching) {
    return {albums: [] }
  }
  const albumIds = uniq(state.albums.map(item => item.albumId))
  return {albums: albumIds }
}
const AlbumMenu = connect(mapStateToProps)(SimpleAlbumMenu)
export default AlbumMenu
