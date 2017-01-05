import React, { Component } from 'react';
import logo from './logo.svg';
import { Container, Header, Grid } from 'semantic-ui-react'
import AlbumMenu from './containers/AlbumList'
import './App.css';

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Header>Image Gallery</Header>
          <Grid>
            <Grid.Column width={4}>
              <AlbumMenu />
            </Grid.Column>
            <Grid.Column width={12}>
             {this.props.children}
            </Grid.Column>
          </Grid>
      </Container>
    );
  }
}

export default App;
