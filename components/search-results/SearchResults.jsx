'use strict'

import React from 'react';
import { Link } from 'react-router';
import RestService from './../rest/RestService';
import DataStore from './../rest/DataStore';
import Table from '../layout/Table';
import ExternalTableContainer from '../layout/ExternalTableContainer';

class SearchResults extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: {item:{}}};

        this.generateViewLink = this.generateViewLink.bind(this);
        this.viewDetail = this.viewDetail.bind(this);
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
        console.log(nextProps);
        this.setState({data: nextProps.data});
    }

    getRouteName(resourceName) {
        console.log(resourceName.substring(resourceName.length));
        if (resourceName.substring(resourceName.length-3) != 'ies') {
            return this.props.resourceName.substring(0,
                this.props.resourceName.length-1);
        } else {
            return this.props.resourceName.substring(0,
                this.props.resourceName.length-3) + 'y';
        }
    }

    viewDetail(sku, index) {
        DataStore.addIndex(this.props.resourceName, index);
        this.context.router.transitionTo(this.getRouteName(this.props.resourceName), { id: encodeURIComponent(sku) });
    }


    generateViewLink(item, i) {
        return <a onClick={this.viewDetail.bind(this, item[this.props.idField?this.props.idField:'Id'], i)}>View</a>;
    };

    render() {
        var generators = [{
            name: "View",
            func: this.generateViewLink
        }];

        this.props.columns.push({
            name: "View"
        });

        var tableContainer = <ExternalTableContainer url={this.props.resourceName} columns={this.props.columns}
                                                     generators={generators} total={this.props.total}
                                                     data={this.state.data} />;
        var content = [];
        if (this.props.data.length > 0) {
            content.push(<p>Results</p>);
            content.push(tableContainer);
        }
        return (
            <div>
                {content}
            </div>
        );
    }

}

SearchResults.contextTypes = {
    router: React.PropTypes.func
};

module.exports = SearchResults;