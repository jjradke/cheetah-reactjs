'use strict';

import React from 'react';
import { Modal } from 'react-bootstrap';
import classNames from "classnames";

class ModalDialog extends React.Component {

    constructor(props) {
        super(props);

        this.state = { open: props.open || false };

        this.styles = {
            closeButton: {
                cursor: "pointer",
                fontSize: "32px",
                fontWeight: "lighter",
                float: "right"
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.open != this.props.open) {
            if (nextProps.open) {
                this.open();
            } else {
                this.close();
            }
        }
    }

    preventDefault = (e) => {
        e.stopPropagation();
        e.preventDefault();
        e.returnValue = false;
        return e.returnValue;
    };

    open = () => {
        var keys = {37: 1, 38: 1, 39: 1, 40: 1, 32: 1, 33: 1, 34: 1, 35: 1, 36: 1};
        if (this.props.onOpen) {
            this.props.onOpen();
        }

        this.setState({ open: true });
        window.onwheel = this.preventDefault;
        window.onmousewheel = this.preventDefault;
        window.ontouchmove = this.preventDefault;
        $('body').bind('touchmove', (e) => {
            e.preventDefault();
            return false;
        });
        document.onkeydown = (e) => { if (keys[e.keyCode]) { e.preventDefault(); return false; } };
        return false;
    };

     close = () => {
        if (this.props.onClose) {
         this.props.onClose();
        }

        this.setState({ open: false });
        window.onwheel = null;
        window.onmousewheel = null;
        window.ontouchmove = null;
        $('body').unbind('touchmove');
        document.onkeydown = null;
        return false;
    };

    render() {
        return (
            <Modal
                dialogClassName={this.props.dialogName}
                show={this.state.open}
                onHide={this.close}
                animation={false}
                bsSize={this.props.size}>
                <Modal.Body>
                    <div style={this.props.containerStyle}>
                        <div className="col-xs-12">
                            <i style={this.styles.closeButton} className={classNames("fa", "fa-times-thin")}
                               onClick={this.close}></i>
                        </div>

                        {this.props.children}
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}

module.exports = ModalDialog;