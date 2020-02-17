import React, { Component, Fragment } from 'react';
import { Segment, Container, Header, Icon, Button, Grid } from 'semantic-ui-react';
import NavBar from './navbar/navbar';
import RecentHistory from './history/history';

import Dashboard from './dashboard/dashboard';
import { Route } from 'react-router-dom';
import Home from './home/home';

class App extends Component {
    openGithub() {
        window.open('https://github.com/anil-kk/react-redux-app', '_blank')
    }
    render() {
        const headerStyle = {
            paddingTop: '10px'
        };

        return (
            <Fragment>
                <Route exact path='/' component={Home}></Route>
                <Route
                    path='/(.+)'
                    render={() => (
                        <Container>
                            <Segment basic>

                                <Grid stackable>
                                    <Grid.Column floated='left' width={14}>
                                        <Header as='h2' style={headerStyle}>
                                            <Icon name='settings' />
                                            <Header.Content>React Redux AspNetCore</Header.Content>
                                        </Header>
                                    </Grid.Column>

                                    <Grid.Column floated='right' width={2}>
                                        <Button onClick={() => this.openGithub()}><Icon name='github' /> Github</Button>
                                    </Grid.Column>
                                </Grid>

                                
                            </Segment>
                            <Segment basic>
                                <NavBar></NavBar>
                            </Segment>

                            <Segment basic>
                                <Route path='/dashboard' component={Dashboard}></Route>
                                <Route path='/history' component={RecentHistory}></Route>
                            </Segment>
                        </Container>
                    )}
                ></Route>
            </Fragment>
        );
    }
}

export default App;
