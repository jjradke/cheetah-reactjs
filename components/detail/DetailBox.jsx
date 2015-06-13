'use strict';

import React from 'react';
import DetailHeader from './DetailHeader';
import Detail from './Detail';

class DetailBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: {item:{}}};
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className='detail-box'>
                <DetailHeader data={this.props.data}  />
                <Detail data={this.props.data}>
                    {this.props.children}
                </Detail>
            </div>
        );
    }

}

module.exports = DetailBox;