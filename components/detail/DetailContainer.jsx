'use strict'

import React from 'react';
import RestService from './../rest/RestService';
import DetailBox from './DetailBox';

class DetailContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: {item:{}}};
        this.data = [];
    }

    componentDidMount() {
        this.loadFromServer();
    }

    componentWillReceiveProps(nextProps) {
        this.loadFromServer();
    }

    loadFromServer() {
        RestService.get(this.props.url).subscribe((val) => {
            this.setState({data: val.data});

            if (this.props.onLoaded != null) {
                this.props.onLoaded.call(this, val.data);
            }
        })
    }

    render() {
        return (
            <DetailBox data={this.state.data}>
                {this.props.children}
            </DetailBox>
        );
    }

}

module.exports = DetailContainer;