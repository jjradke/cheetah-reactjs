'use strict';

import React from 'react';
import Table from './Table';
import ExternalTableContainer from './ExternalTableContainer';
import { Modal, Button } from 'react-bootstrap';

var dialogStyle = {
    position: 'absolute',
    top: '20%',
    left: $(window).width()/2 - 400,
    right: '0',
    overflow: 'overlay',
    backgroundColor: 'white',
    padding: '10px',
    width: '800px',
    zIndex: 99999
};

class SelectDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = props;

        if (this.props.data) {
            this.state.mode = 'local';
        } else {
            this.state.mode = 'remote';
        }

        this.selectedItems = [];


        this.columns = this.props.columns? this.props.columns : [{
            name: "Checkbox",
            type: "checkbox"
        },{
            name: "Id"
        },{
            name: "Description"
        }];

        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.generateCheckbox = this.generateCheckbox.bind(this);
        this.generateRadio = this.generateRadio.bind(this);
        this.done = this.done.bind(this);
    }

    handleChange(field, event) {
        if (event.target.checked) {
            this.selectedItems.push(field.Id);
        } else {
            this.selectedItems.splice(this.selectedItems.indexOf(field.Id), 1);
        }
    }

    handleSelect(field) {
        this.selectedItems.push(field.Id);

        this.done();
    }

    done() {
        this.props.done(this.selectedItems);

        this.props.onRequestHide();
    }

    generateRadio(item) {
        return <input type='radio' onChange={this.handleSelect.bind(this, item) }/>;
    };

    generateCheckbox(item) {
        return <input type='checkbox' onChange={this.handleChange.bind(this, item) }/>;
    }

    render() {

        var generators = [{
            name: "Checkbox",
            func: this.props.multiple? this.generateSelect : this.generateRadio
        }];

        var table;
        if (this.state.mode == 'local') {
            table = <Table data={this.state.data} columns={this.columns} generators={generators} />;
        } else {
            table = <ExternalTableContainer url={this.state.resource} columns={this.columns} generators={generators} />
        }

        return <Modal {...this.props}
            bsStyle='primary' title='Select' animation={false}>
            <div className='modal-body'>
                {table}
            </div>
            <div className='modal-footer'>
                {this.props.multiple?<Button onClick={this.done}>Done</Button>:''}
                <Button onClick={this.props.onRequestHide}>Cancel</Button>
            </div>
        </Modal>
    }

}

module.exports = SelectDialog;