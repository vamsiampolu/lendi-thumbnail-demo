import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router'

export default function Thumbnail(props) {
  console.log(`The url is ${props.url}`)
  return (<Card>
    <Image src={props.thumbnailUrl} />
    <Card.Content>
      <Card.Header>
        {props.title}
      </Card.Header>
      <Card.Meta>
        Album {props.albumId}
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <Button basic color='green'>
        <Link to={'/images/' + props.id}> View Image </Link>
      </Button>
    </Card.Content>
  </Card>)
}
