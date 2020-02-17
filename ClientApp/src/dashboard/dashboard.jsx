import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Table, Segment, Dimmer, Loader, Statistic, Icon, Responsive } from 'semantic-ui-react';
import Filter from '../filter/filter';
import { regionsLookup, genderLookup } from '../scb';

const mapStateToProps = state => ({
    filteredRegions: state.filteredRegions,
    filteredYears: state.filteredYears,
    filteredGenders: state.filteredGenders,
    data: state.data
});

class Dashboard extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.filteredRegions !== this.props.filteredRegions) {
            console.log('REGIONS CHANGED')
        }
        if (prevProps.filteredYears !== this.props.filteredYears) {
            console.log('YEARS CHANGED')
        }
        if (prevProps.filteredGenders !== this.props.filteredGenders) {
            console.log('GENDERS CHANGED')
        }
        if (prevProps.data !== this.props.data) {
            console.log(' DATA CHANGED')
        }
    }

    getIconForGender = (gender) => {
        return genderLookup[gender] === 'men' ? (<Icon name='male' color='red' size='large' />) : (<Icon name='female' color='green' size='large' />);
    }

    getNumberRepresentation = (numberInStringFormat) => {
        return parseInt(numberInStringFormat, 10).toLocaleString('en-US');
    }

    showLoader = () => {
        if (this.props.data.length === 0) {
            return (<Dimmer active inverted>
                <Loader inverted content='Loading' />
            </Dimmer>);
        }
    }


    render() {
        const { data } = this.props

        return (
            <Fragment>
                <Segment basic>
                    <Filter></Filter>
                </Segment>

                <Responsive as={Segment} basic minWidth={400}>
                    <Table unstackable striped>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Region</Table.HeaderCell>
                                <Table.HeaderCell>Gender</Table.HeaderCell>
                                <Table.HeaderCell>Year</Table.HeaderCell>
                                <Table.HeaderCell>Total Births</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {data.length > 0 && (
                                data.map(item => {
                                    return (<Table.Row key={item.key.join()}>
                                        <Table.Cell>
                                            <Statistic size='mini'>
                                                <Statistic.Value>{regionsLookup[item.key[0]]}</Statistic.Value>
                                            </Statistic>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Statistic size='mini'>
                                                <Statistic.Value>{this.getIconForGender(item.key[1])} </Statistic.Value>
                                            </Statistic>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Statistic size='mini'>
                                                <Statistic.Value>{item.key[2]}</Statistic.Value>
                                            </Statistic>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Statistic size='mini' color='orange'>
                                                <Statistic.Value>{this.getNumberRepresentation(item.values[0])}</Statistic.Value>
                                            </Statistic>
                                        </Table.Cell>
                                    </Table.Row>);
                                })
                            )}
                        </Table.Body>
                    </Table>
                </Responsive>

                <Responsive as={Segment} basic maxWidth={399}>
                    <Table stackable striped>
                        <Table.Body>
                            {data.length > 0 && (
                                data.map(item => {
                                    return (<Table.Row key={item.key.join()}>
                                        <Table.Cell>
                                            <Statistic size='mini'>
                                                <Statistic.Label>Region</Statistic.Label>
                                                <Statistic.Value>{regionsLookup[item.key[0]]}</Statistic.Value>
                                            </Statistic>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Statistic size='tiny' floated='left'>
                                                <Statistic.Label>Gender</Statistic.Label>
                                                <Statistic.Value>{this.getIconForGender(item.key[1])}  </Statistic.Value>
                                            </Statistic>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Statistic size='tiny' floated='right'>
                                                <Statistic.Label>Year</Statistic.Label>
                                                <Statistic.Value>{item.key[2]}</Statistic.Value>
                                            </Statistic>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Statistic size='large' color='orange'>
                                                <Statistic.Label>Total Births</Statistic.Label>
                                                <Statistic.Value>{this.getNumberRepresentation(item.values[0])}</Statistic.Value>
                                            </Statistic>
                                        </Table.Cell>
                                    </Table.Row>);
                                })
                            )}

                        </Table.Body>
                    </Table>
                </Responsive>

                {this.showLoader()}

            </Fragment>
        );
    }
}

export default connect(mapStateToProps)(Dashboard);
