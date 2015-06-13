'use strict';

import React from 'react';
import DetailField from './DetailField';

class Detail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: {item:{}}};
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className='detail'>
                {this.props.children}
            </div>
        );
    }

}

module.exports = Detail;