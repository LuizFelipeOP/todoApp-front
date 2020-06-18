import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiX, FiEdit2, FiCheck, FiMoreVertical } from 'react-icons/fi';


var ModalEdit = (props) => {

    const [show, setShow] = React.useState(false);
    const description = (event) => props.getDescription(event);

    const handleClose = () => setShow(false);
    const handleShow = (event) => setShow(true);


    return (
        <>
            <button
                onClick={handleShow}
            > <FiMoreVertical /></button>


            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <button id="delete" onClick={() => {
                        props.removeTask(props.id_list, props.id_task);
                        handleClose()
                    }} >
                        <FiX />
                    </button>
                    <form >
                        <input className="modal-input" value={props.description} name="name" type="text" onChange={props.inputListenerList} />
                        <button onClick={props.onSaveEditTask}><FiCheck /></button>
                        <button onClick={handleClose}><FiX /></button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );

};
export default ModalEdit;