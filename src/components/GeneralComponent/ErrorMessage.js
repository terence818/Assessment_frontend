import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse } from 'reactstrap';
library.add(fab, faWindowClose)

export default class ErrorMessage extends React.Component {
    state = {
        collapse: false,
        errorText: '',
        Color: false,
    }

    setErrorMessage(error, status, valid) {
        this.setState({
            collapse: status,
            errorText: error,
            Color: valid,
        })
    }

    closeErrorMessage() {
        this.setState({
            collapse: false,
            errorText: '',
            Color: false,
        })
    }


    render() {

        let text = 'text-center '

        if (this.state.Color) {
            text += 'text-success'
        } else {
            text += 'text-danger'
        }


        const errorMessage = this.state.errorText

        return (
            <Collapse isOpen={this.state.collapse}>
                <div>
                    <FontAwesomeIcon icon='window-close' onClick={this.closeErrorMessage.bind(this)} className='float-right' />
                    <div className={text+' errorMessage'}>{errorMessage}</div>
                </div>
            </Collapse>
        );
    }
}




