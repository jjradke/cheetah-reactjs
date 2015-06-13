'use strict';

import React from 'react';
import DataStore from './../rest/DataStore';
import ExternalTable from './ExternalTable';

export default class ExternalTableContainer extends React.Component {

    constructor(props) {
        super(props);
        if (props.data) {
            this.state = {data: props.data, total: props.total};
        } else {
            this.state = {data: []};
        }

        this.getMoreData = this.getMoreData.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data) {
            this.setState({data: nextProps.data});
        }
    }

    getMoreData(requestData) {
        DataStore.getByOffset(this.props.url, requestData).subscribe((val) => {
            this.setState({data: val, total: DataStore.total(this.props.url) });
        });
    }

    render() {
        if (this.props.generators != null && this.state.data && this.state.data.length > 0) {
            this.props.generators.forEach((generator) => {
                this.state.data.forEach((data, i) => {
                    data[generator.name] = generator.func.call(null, data, i);
                });
            });
        }
        return (
            <ExternalTable data={this.state.data} total={this.state.total} getData={this.getMoreData} columns={this.props.columns} />
        );
    }

}