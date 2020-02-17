import React, { Component } from 'react';
import { Header, Button, Icon, Grid, List, Segment } from 'semantic-ui-react';

class Home extends Component {
    render() {
        const gridStyle = {
            height: '100vh'
        };
        const columnWidth = { maxWidth: '450px' };
        const classNames = 'center aligned middle aligned';

        const { history } = this.props
        return (
            <Grid style={gridStyle} className={classNames}>
                <Grid.Column style={columnWidth}>
                    <Header as='h2' icon textAlign='center'>
                        <Icon name='settings' circular />
                        <Header.Content>SCB Client</Header.Content>
                    </Header>

                    <Segment basic>
                        <List>
                            <List.Item>
                                <List.Icon name='react' />
                                <List.Content>React</List.Content>
                             </List.Item>
                            <List.Item icon='js' content='Redux' />
                            <List.Item icon='css3' content='Semantic UI' />
                            <List.Item icon='code' content='ASPNetCore Proxy Server' />
                            <List.Item icon='database' content='SCB, Sweden Statistics open API' />
                            <List.Item
                                icon='mail'
                                content={<a href='mailto:anilkumar1988@gmail.com'>anilkumar1988@gmail.com</a>}
                            />
                            <List.Item
                                icon='github'
                                content={<a href='https://github.com/anil-kk/react-redux-app'>Github</a>}
                            />
                        </List>
                    </Segment>

                    <Button size='huge' primary onClick={() => history.push('/dashboard')}>
                        <Icon name='send'></Icon>Explore!
                    </Button>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Home;
