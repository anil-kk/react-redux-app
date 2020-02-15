import React, { Component } from 'react';
import { Header, Button, Icon, Grid } from 'semantic-ui-react';

class Home extends Component {
  render() {
    const gridStyle = {
      height: '100vh'
    };
    const columnWidth = { maxWidth: '500px' };
    const classNames = 'center aligned middle aligned';

    const {history} = this.props
    return (
      <Grid style={gridStyle} className={classNames}>
        <Grid.Column style={columnWidth}>
          <Header as='h2' icon textAlign='center'>
            <Icon name='settings' circular />
            <Header.Content>SCB CLient</Header.Content>
          </Header>
          <Button size='huge' primary onClick={()=> history.push('/dashboard')}>
            <Icon name='send'></Icon>Explore!
          </Button>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Home;
