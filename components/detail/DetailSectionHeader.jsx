'use strict';

import React from 'react';

class DetailSectionHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: {item:{}}};
    }

    componentDidMount() {

    }

    render() {
        var links = [];
        if (this.props.links != null) {
            this.props.links.forEach((link) => {
                if (link.node) {
                   links.push(link.node);
                } else {
                    links.push(
                        <a href="#" onClick={link.value}>
                            {link.label}
                        </a>
                    );
                }
            });
        }

        return (
            <div className="section-header">
                <span className="section-title">{this.props.children}</span>
                {links}
            </div>
        );
    }

}

module.exports = DetailSectionHeader;