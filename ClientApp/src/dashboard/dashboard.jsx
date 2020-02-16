import React, { Component, Fragment } from 'react';
import { Table, Segment, Dimmer, Loader, Statistic, Icon } from 'semantic-ui-react';
import Filter from '../filter/filter';
import axios from 'axios';
import { connect } from 'react-redux';

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


    render() {
        const cssHorizontalOverflow = {
            overflow: 'auto'
        };

        const { data } = this.props

        return (
            <Fragment>
                <Segment basic>
                    <Filter></Filter>
                </Segment>

                <Segment basic style={cssHorizontalOverflow}>
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
                                                <Statistic.Value>{genderLookup[item.key[1]] === 'men' ? (<Icon name='male' size='large' />) : (<Icon name='female' size='large' />)}  </Statistic.Value>
                                            </Statistic>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Statistic size='mini'>
                                                <Statistic.Value>{item.key[2]}</Statistic.Value>
                                            </Statistic>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Statistic size='mini'>
                                                <Statistic.Value>{parseInt(item.values[0], 10).toLocaleString('en-US') }</Statistic.Value>                                                
                                            </Statistic>
                                        </Table.Cell>
                                    </Table.Row>);
                                })
                            )}

                        </Table.Body>
                    </Table>

                    {
                        data.length === 0 && (<Dimmer active inverted>
                            <Loader inverted content='Loading' />
                        </Dimmer>)
                    }
                </Segment>
            </Fragment>
        );
    }
}

export default connect(mapStateToProps)(Dashboard);
