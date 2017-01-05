import React from 'react'
import { Image } from 'semantic-ui-react'

export function SimpleImage(props) {
  debugger
  console.log(props)
  if(props.url) {
    return (<Image fluid src={props.url} />)
  } else {
    return null
  }
}
