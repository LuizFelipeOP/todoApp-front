import React from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button'
import { FiX, FiPlus, FiCheck } from 'react-icons/fi';

const ModalCreate = (props) => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <label> Adicione uma lista
                <button id="add" onClick={handleShow}>
                    <FiPlus />
                </button>
            </label>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >
                        <input name="name" type="text" onChange={props.inputListenerList} />
                        <button id="ok" onClick={props.onSave}><FiCheck /></button>
                        <button id="delete" onClick={handleClose}><FiX /></button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
};
export default ModalCreate;