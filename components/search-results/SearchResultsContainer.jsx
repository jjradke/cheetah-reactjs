'use strict'

import React from 'react';
import RestService from './../rest/RestService';
import SearchResultsBox from './SearchResultsBox';
import DataStore from '../rest/DataStore';
import AuthManager from '../security/AuthManager';

class SearchResultsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {data: []};
    }

    componentDidMount() {
        if (DataStore.size(this.props.resourceName) > 0) {
            this.props.total = DataStore.total(this.props.resourceName);
            DataStore.get(this.props.resourceName).subscribe((data) => {
                this.setState({data: data});
            });
        }
    }

    handleSearch() {
        var boxComponent = this.refs.box;
        var queryComponent = boxComponent.getSearchQueryComponent();
        var params = queryComponent.getSearchQuery();

        if (this.props.pageSize) {
            if (params.length == 0) {
                params = '?_size=' + this.props.pageSize;
            } else {
                params += '&_size=' + this.props.pageSize;
            }
        }

        DataStore.get(this.props.resourceName, params, true).subscribe((data) => {
            this.props.total = DataStore.total(this.props.resourceName);
            this.setState({data: data});
        }, (error) => {

        });
    }

    render() {
        return (
            <SearchResultsBox resourceName={this.props.resourceName} data={this.state.data} searchFields={this.props.searchFields}
                              columns={this.props.columns} ref='box' idField={this.props.idField} handleSearch={this.handleSearch}
                              total={this.props.total} />
        );
    }

}

module.exports = SearchResultsContainer;