import React from "react";

const Modal = ({handleClose, show, details}) => {
    // console.dir(details);
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    return (
        <div className={showHideClassName} onClick={handleClose}>
            <div className={'modal-body'}>
                {details.text}
            </div>
        </div>
    )
};

export default Modal;

