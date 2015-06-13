'use strict';

import React from 'react';

class Page extends React.Component {
    constructor() {
        this.state = {
            requested: false,
            success: false
        };
    }

    isSuccess() {
        return this.state.requested && this.state.success;
    }

    isRequested() {
        return this.state.requested;
    }

    render() {
        return (
            <div class="row">
                <div class="col-md-8">
                    <section>
                        <h4>{this.props.message}</h4>
                        <hr/>
                        {this.props.section}
                    </section>
                </div>
            </div>
        );
    }


}

module.exports = Page;