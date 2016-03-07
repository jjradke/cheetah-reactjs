'use strict';

import React from 'react';
import { Redirect, Router } from 'react-router';
import DataStore from '../rest/DataStore';
import RestService from '../rest/RestService';

class DetailHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: {item:{}}};
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.hasNext = this.hasNext.bind(this);
        this.hasPrevious = this.hasPrevious.bind(this);
        this.back = this.back.bind(this);
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
    }

    previous() {
        DataStore.previous(this.props.resourceName);
        DataStore.getByIndex(this.props.resourceName).subscribe((data) => {
            this.context.router.transitionTo(this.getRouteName(this.props.resourceName), { id: encodeURIComponent(data.Id) });
        });
    }

    next() {
        DataStore.next(this.props.resourceName);
        DataStore.getByIndex(this.props.resourceName).subscribe((data) => {
            this.context.router.transitionTo(this.getRouteName(this.props.resourceName), { id: encodeURIComponent(data.Id) });
        });
    }

    hasPrevious() {
        return DataStore.hasPrevious(this.props.resourceName);
    }

    hasNext() {
        return DataStore.hasNext(this.props.resourceName);
    }

    back() {
        this.context.router.transitionTo(this.props.resourceName);
    }

    update() {
        var data = this.props.update();

        RestService.update(this.props.resourceName, this.props.data.Id, this.props.data).subscribe((result) => {
           console.log(result);
        });
    }

    delete() {
        RestService.delete(this.props.resourceName, this.props.data.Id).subscribe((result) => {
            this.context.router.transitionTo(this.props.resourceName);
        });
    }

    componentDidMount() {
    }

    getRouteName(resourceName) {
        console.log(resourceName.substring(resourceName.length));
        if (resourceName.substring(resourceName.length-3) != 'ies') {
            return this.props.resourceName.substring(0,
                this.props.resourceName.length-1);
        } else {
            return this.props.resourceName.substring(0,
                    this.props.resourceName.length-3) + 'y';
        }
    }

    render() {
        return (
            <article className="secondary-nav">
                <div className="text-right">
                    {this.hasPrevious()?
                        <button className="btn btn-sm hidden-xs" onClick={this.previous}> &#9666;Previous</button>
                    :null}
                    {this.hasNext()?
                        <button className="btn btn-sm hidden-xs" onClick={this.next}>Next &#9656;</button>
                        :null}
                    <a className="btn btn-sm btn-default" onClick={this.back}>Back to Search Results</a>
                    <button className="btn btn-sm btn-default" onClick={this.update}>Save</button>
                    <button className="btn btn-sm btn-default" onClick={this.delete}>Delete</button>
                </div>
            </article>
        );
    }

}

DetailHeader.contextTypes = {
    router: React.PropTypes.func
};

module.exports = DetailHeader;