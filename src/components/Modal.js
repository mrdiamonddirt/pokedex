import React from 'react';
import styled from 'styled-components';

const ModalComponent = styled.div`
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: aliceblue;
    width: 50vw;
    height: 50vh;
    z-index: 99;
`
// export function showmodal() {
//     document.getElementById("Modal").style.display = "flex";
// }

export function hidemodal() {
    document.getElementById("Modal").style.display = "none";
}

const Modal = ({isActive, onClose, children}) => {

    return (
        <ModalComponent id='Modal'>
            <button onClick={() => onClose()}>Close</button>
            {children}
        </ModalComponent>
    )
}

export default Modal