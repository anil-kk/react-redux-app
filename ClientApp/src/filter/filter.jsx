import React, { Component } from 'react';
import { Dropdown, Grid, GridColumn, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateFilteredRegions, updateFilteredYears, updateFilteredGenders, updateData } from './selectedFilterActions';
import { regionOptions, genderOptions, yearOptions } from '../scb';
import axios from 'axios';

const mapStateToProps = state => ({
    filteredRegions: state.filteredRegions,
    filteredYears: state.filteredYears,
    filteredGenders: state.filteredGenders,
    data: state.data
});

const actions = {
    updateFilteredRegions,
    updateFilteredYears,
    updateFilteredGenders,
    updateData
};

class Filter extends Component {
    state = {
        regionSearchQuery: '', genderSearchQuery: '', yearSearchQuery: '',
        regionSelectOptions: regionOptions, genderSelectOptions: genderOptions, yearSelectOptions: yearOptions
    };

    componentDidMount() {
        this.fetchDataFromScb();
    }

    handleRegionSelectChange = (e, { regionSearchQuery, value }) => {
        this.props.updateFilteredRegions(value); //USING REDUX STORE ACTIONS
        this.setState({ regionSearchQuery });
    };
    handleRegionSearchQuery = (e, { regionSearchQuery }) => {
        this.setState({ regionSearchQuery });
    };

    handleGenderSelectChange = (e, { genderSearchQuery, value }) => {
        this.props.updateFilteredGenders(value); //USING REDUX STORE ACTIONS
        this.setState({ genderSearchQuery });
    };
    handleGenderSearchQuery = (e, { genderSearchQuery }) => {
        this.setState({ genderSearchQuery });
    };

    handleYearSelectChange = (e, { yearSearchQuery, value }) => {
        this.props.updateFilteredYears(value); //USING REDUX STORE ACTIONS
        this.setState({ yearSearchQuery });
    };
    handleYearSearchQuery = (e, { yearSearchQuery }) => {
        this.setState({ yearSearchQuery });
    };
   

    fetchDataFromScb() {
        axios.post('/scb', {
            regions: this.props.filteredRegions,
            genders: this.props.filteredGenders,
            years: this.props.filteredYears
        })
            .then((response) => {
                console.log(response.data.data);
                this.props.updateData(response.data.data)
            }, (error) => {
                this.setState({ error, isLoading: false })
            });
    }

    render() {
        const { regionSelectOptions, genderSelectOptions, yearSelectOptions, regionSearchQuery, genderSearchQuery, yearSearchQuery } = this.state;

        return (
            <Grid stackable columns={4}>
                <Grid.Column width={8}>
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
                <Grid.Column width={3}>
                    <Dropdown
                        placeholder='Gender'
                        fluid
                        multiple
                        search
                        selection
                        options={genderSelectOptions}
                        searchQuery={genderSearchQuery}
                        onChange={this.handleGenderSelectChange}
                        onSearchChange={this.handleGenderSearchQuery}
                    />
                </Grid.Column>
                <Grid.Column width={3}>
                    <Dropdown
                        placeholder='Year'
                        fluid
                        multiple
                        search
                        selection
                        options={yearSelectOptions}
                        searchQuery={yearSearchQuery}
                        onChange={this.handleYearSelectChange}
                        onSearchChange={this.handleYearSearchQuery}
                    />
                </Grid.Column>
                <Grid.Column width={2}>
                    <Button primary onClick={() => this.fetchDataFromScb()}>Fetch</Button>
                </Grid.Column>
            </Grid>
        );
    }
}

export default connect(mapStateToProps, actions)(Filter);
