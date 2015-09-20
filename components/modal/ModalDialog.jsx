'use strict';

import React from 'react';
import { Modal, Button } from 'react-bootstrap';
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

    preventDefault = (e) => {
        e.stopPropagation();
        e.preventDefault();
        e.returnValue = false;
        return e.returnValue;
    };

    open = () => {
        console.log('opening...');
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
        this.setState({ open: false });
        window.onwheel = null;
        window.onmousewheel = null;
        window.ontouchmove = null;
        $('body').unbind('touchmove');
        document.onkeydown = null;
        return false;
    };

    getContent = () => {
      // empty - should be overridden
    };

    getStyle = () => {
        // empty - should be overridden
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
                    <div style={this.getStyle()}>
                        <div className="col-xs-12">
                            <i style={this.styles.closeButton} className={classNames("fa", "fa-times-thin")}
                               onClick={this.close}></i>
                        </div>

                        {this.getContent()}
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}

module.exports = ModalDialog;