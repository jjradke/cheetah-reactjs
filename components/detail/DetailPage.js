'use strict';

import React from 'react';
import RestService from '../rest/RestService';

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: {item:{}}};

        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleUpdate() {
        for (var fieldName in this.refs) {
            var fieldValue = this.refs[fieldName].getValue();

            this.state.data.item[fieldName] = fieldValue;
        }

        return this.state.data.item;
    }

    componentDidMount() {
        this.loadFromServer(this.props.id);
    }

    componentWillReceiveProps(nextProps) {
        this.loadFromServer(nextProps.id);

        for (var fieldName in this.refs) {
            var fieldValue = this.refs[fieldName];

            fieldValue.reset();
        }
    }

    loadFromServer(id) {
        RestService.find(this.props.resourceName, decodeURIComponent(id)).subscribe((data) => {
            data = this.onDataLoad(data);

            this.setState({data: {item:data}});
        })
    }

    onDataLoad(data) {
        return data;
    }
}

module.exports = DetailPage;