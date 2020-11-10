import React, { Component  } from 'react'
import Modal from 'react-modal';
import Aux from '../hoc/Aux'
Modal.setAppElement('#root')


class FindEmployee extends Component {

    state = {
        isOpen: false
    }
    
    toggleModal = event => {
        event.preventDefault()
        console.log(event);
        const { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
      }


    render() {

        let { isOpen } = this.state

        return (
            <Aux>
            <form style={formStyle}>
                <input 
                style={{padding: "7px", width: '70%', marginRight: '7px'}}
                type="text"
                name="findEmployee"
                placeholder="Search Employee"
                />
                <input 
                style={{padding: "7px", marginLeft: '7px'}}
                type="submit"
                value="Search"
                onClick={this.toggleModal}
                />
            </form>

            <Modal
            id="modal_with_forms"
            isOpen={isOpen}
            closeTimeoutMS={150}
            contentLabel="modalB"
            shouldCloseOnOverlayClick={true}
            onRequestClose={this.toggleModal}
            aria={{
              labelledby: "heading",
              describedby: "fulldescription"
            }}>

            

            </Modal>
            </Aux>
        )
    }
}

const formStyle = {
    margin: 'auto',
    marginTop: '20px',
    width: '600px'
}



export default FindEmployee