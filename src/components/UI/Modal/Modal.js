import React, { Component } from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Auxx/Auxx';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    // This lifecyle checks if current and next props works
    // Besides, this one checks out nextProps.children(Spinner) and this.props.children(<Ordersummary />). So, they are not equal

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;  
    }

    // This lifecycle method prints out the result of shouldComponentUpdate lifecycle method.
    componentWillUpdate() {
        console.log('[Modal] WillUpdate')
    }

    render() {
        return (
        <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <div 
        className={classes.Modal}
        style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
        }}>
            {this.props.children}
        </div>
    </Aux>
        )}


   
}

export default Modal;