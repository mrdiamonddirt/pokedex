import React from 'react';
import styled from 'styled-components';

const ModalComponent = styled.div`
display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 400px;
    height: 400px;
`

const Modal = ({isActive, onClose, children}) => {

    return (
        <ModalComponent>
            <button onClick={() => onClose()}>Close</button>
            {children}
        </ModalComponent>
    )
}

export default Modal