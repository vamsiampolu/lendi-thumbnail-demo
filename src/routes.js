import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import Loading from './components/Loading'
import store from './createStore'
import { loadAlbums } from './actions'
import Gallery, { Album } from './containers/Gallery'
import Image from './containers/Image'
import NoMatch from './components/NoMatch'
import '../node_modules/semantic-ui-css/semantic.css'

const onEnter = () => {
  store.dispatch(loadAlbums())
}

const routes  = (<Route path='/' component={App} onEnter={onEnter}>
  <IndexRoute component={Gallery} />
  <Route path='/albums/:albumId' component={Album} />
  <Route path='/images/:id' component={Image} />
  <Route path='*' component={NoMatch} />
</Route>)

export default routes
