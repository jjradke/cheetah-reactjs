'use strict';

import { Component } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = { visible: false };
    }

    preventDefault(e) {
        e.stopPropagation();
        e.preventDefault();
        e.returnValue = false;
        return e.returnValue;
    };

    show = () => {
        var keys = {37: 1, 38: 1, 39: 1, 40: 1, 32: 1, 33: 1, 34: 1, 35: 1, 36: 1};
        this.setState({ visible: true });
        document.addEventListener("click", this.hide);
        window.onwheel = this.preventDefault;
        window.onmousewheel = this.preventDefault;
        window.ontouchmove = this.preventDefault;
        $('body').bind('touchmove', (e) => {
            e.preventDefault();
            return false;
        });
        document.onkeydown = (e) => { if (keys[e.keyCode]) { e.preventDefault(); return false; } };
    };

    hide = (e) => {
        if (e !== undefined) {
            var target = e.target;

            if (target != null && $(target).parents('.menu').length > 0) {
                return;
            }
        }

        this.setState({visible: false});
        document.removeEventListener("click", this.hide);
        window.onwheel = null;
        window.onmousewheel = null;
        window.ontouchmove = null;
        $('body').unbind('touchmove');
        document.onkeydown = null;
    };

    render() {

        return (
            <div>
                <div className={this.state.visible? 'menu-container':''}></div>
                <div className="menu">
                    <div className={(this.state.visible ? "visible " : "") + this.props.alignment}>
                        <div style={this.props.containerStyle}>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Menu;