import React from "react";

const Modal = ({handleClose, show, details}) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none'
    return (
        <div className={showHideClassName}>
            <div className={'modal-body'}>
                {details.text}
            </div>
        </div>
    )
};

export default Modal;

