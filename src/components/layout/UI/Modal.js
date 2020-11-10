import React, { Component } from 'react'
import Aux from '../../../hoc/Aux'
import './Modal.css'
import Backdrop from './Backdrop'

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show   
    }

    render () {
        console.log(this.props.show)
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div 
                className={'Modal'}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}
                > 
                    {this.props.children}
                </div>
            </Aux>
        )

    }


}

export default Modal 