'use strict';

import { Component } from 'react';
import Formsy from 'formsy-react';

class Form extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <Formsy.Form {...this.props}>
                {this.props.children}
            </Formsy.Form>
        );
    }
}

module.exports = Form;