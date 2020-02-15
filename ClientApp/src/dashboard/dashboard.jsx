import React, { Component, Fragment } from 'react';
import { Table, Segment } from 'semantic-ui-react';
import Filter from '../filter/filter';
class Dashboard extends Component {
  render() {
    const cssHorizontalOverflow = {
      overflow: 'auto'
    };
    return (
      <Fragment>
        <Segment basic>
          <Filter></Filter>
        </Segment>

        <Segment basic style={cssHorizontalOverflow}>
          <Table unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Region</Table.HeaderCell>
                <Table.HeaderCell>Gender</Table.HeaderCell>
                <Table.HeaderCell>Year</Table.HeaderCell>
                <Table.HeaderCell>Count</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>John Lilki</Table.Cell>
                <Table.Cell>2013</Table.Cell>
                <Table.Cell>Males</Table.Cell>
                <Table.Cell>1000</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jamie Harington</Table.Cell>
                <Table.Cell>2014</Table.Cell>
                <Table.Cell>Females</Table.Cell>
                <Table.Cell>10000</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jill Lewis</Table.Cell>
                <Table.Cell>2014</Table.Cell>
                <Table.Cell>Males</Table.Cell>
                <Table.Cell>100000</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>
      </Fragment>
    );
  }
}

export default Dashboard;
