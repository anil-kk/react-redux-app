import React, { Component } from 'react';
import { Dropdown, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateFilteredRegions } from './selectedFilterActions';
import { regionOptions } from '../scb';

const mapFilterState = state => ({
  filteredRegions: state.filteredRegions
});

const actions = {
  updateFilteredRegions
};

const optionsStatic = [
  { key: 'angularKEY', text: 'AngularTEXT', value: 'angularVALUE' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' }
];

class Filter extends Component {
  state = { regionSearchQuery: '', regionSelectOptions: regionOptions };

  handleRegionSelectChange = (e, { regionSearchQuery, value }) => {
    this.props.updateFilteredRegions(value); //USING REDUX STORE ACTIONS
    this.setState({ regionSearchQuery });
  };
  handleRegionSearchQuery = (e, { regionSearchQuery }) => {
    this.setState({ regionSearchQuery });
  };

  render() {
    const { regionSelectOptions, regionSearchQuery } = this.state;

    return (
      <Grid stackable columns={3}>
        <Grid.Column>
          <Dropdown
            placeholder='Region'
            fluid
            multiple
            search
            selection
            options={regionSelectOptions}
            searchQuery={regionSearchQuery}
            onChange={this.handleRegionSelectChange}
            onSearchChange={this.handleRegionSearchQuery}
          />
        </Grid.Column>
        <Grid.Column>
          <Dropdown
            placeholder='Gender'
            fluid
            multiple
            search
            selection
            options={optionsStatic}
          />
        </Grid.Column>
        <Grid.Column>
          <Dropdown
            placeholder='Year'
            fluid
            multiple
            search
            selection
            options={optionsStatic}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapFilterState, actions)(Filter);
