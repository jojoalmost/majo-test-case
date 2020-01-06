import React from "react";

const Modal = ({handleClose, show, details}) => {
    // console.dir(details);
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    return (
        <div className={showHideClassName} onClick={handleClose}>
            <div className={'modal-body'}>
                <table>
                    <tbody>
                    <tr>
                        <td>title</td>
                        <td>{details.title}</td>
                    </tr>
                    <tr>
                        <td>description</td>
                        <td>{details.description}</td>
                    </tr>
                    <tr>
                        <td>crated at</td>
                        <td>{details.title}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default Modal;

