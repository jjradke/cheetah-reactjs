'use strict'

import React from 'react';
import RestService from './../rest/RestService';
import SearchField from './SearchField';

class SearchQuery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: {item:{}}};
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
    }

    getSearchQuery() {
        var params = '';
        for (var key in this.refs) {
            var ref = this.refs[key];
            if (key.substring(0,7) == 'search.') {
                var value = ref.getValue();
                if (value != null && value.length > 0) {
                    params += (params == ''?'?':'&') + key.replace('search\.', '') + '=' + value
                }
            }
        }
        return params;
    }

    handleSearch(event) {
        event.preventDefault();

        this.props.handleSearch();
    }

    render() {
        let searchFields = [];

        for (var i = 0; i < this.props.fields.length; i++) {
            var field = this.props.fields[i];
            field.ref = 'search.' + field.name;
            searchFields.push(
                <SearchField field={field.name} label={field.label} ref={field.ref} />
            )
        }

        return (
            <form>
                <p>Search Fields</p>
                {searchFields}
                <button type="submit" onClick={this.handleSearch}>Search</button>
            </form>
        );
    }

}

module.exports = SearchQuery;