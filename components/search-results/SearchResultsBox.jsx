'use strict'

import React from 'react';
import SearchQuery from './SearchQuery';
import SearchResults from './SearchResults';

class SearchResultsBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: props.data};
    }

    getSearchQueryComponent() {
        return this.refs.query;
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
        this.setState({data: nextProps.data});
    }

    render() {
        return (
            <div>
                <SearchQuery fields={this.props.searchFields} ref='query' handleSearch={this.props.handleSearch} />
                <SearchResults resourceName={this.props.resourceName} columns={this.props.columns} idField={this.props.idField} data={this.state.data} total={this.props.total} ref='results' />
            </div>
        );
    }

}

module.exports = SearchResultsBox;