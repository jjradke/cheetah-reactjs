'use strict';

import React from 'react';

class ApplicationBody extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className='body-content'>
                {this.props.children}
            </div>
        );
    }

}

module.exports = ApplicationBody;