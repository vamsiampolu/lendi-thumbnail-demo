import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'


export default function Loading(props) {
  return (<Dimmer page active>
    <Loader size='huge'> Loading </Loader>
  </Dimmer>)
}
