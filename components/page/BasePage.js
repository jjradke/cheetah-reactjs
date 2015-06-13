'use strict';

import React from 'react';

class BasePage extends React.Component {
    constructor(props) {
        super(props);

        if (!this.state) {
            this.state = {};
        }
        this.state.requested = false;
        this.state.success = false;
    }

    isSuccess() {
        return this.state.requested && this.state.success;
    }

    isRequested() {
        return this.state.requested;
    }

    succeed(message) {
        this.state.requested = true;
        this.state.success = true;
        if (!!message) this.state.message = message;
        this.setState(this.state);
    }

    fail(message) {
        this.state.requested = true;
        this.state.success = false;
        if (!!message) this.state.message = message;
        this.setState(this.state);
    }
}

module.exports = BasePage;