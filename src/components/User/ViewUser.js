import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ViewEmployeeDetHook from '../../hook/view-employee-det-hook';
import { Button, Container, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteEmployee } from '../../redux/actions/employeeAction';
import notify from '../../components/utility/useNotify'
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ViewUser = () => {
     const { id } = useParams()
    const [item] = ViewEmployeeDetHook(id)
    const dispatch = useDispatch();
      const navigate = useNavigate()
const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
const handelDelete = async () => {

        await dispatch(deleteEmployee(item._id))
        setShow(false);
        notify("Employee has been successfully deleted", "success")

setTimeout(() => {
                         navigate('/');
                    }, 1500);
    }
    return (
       <Container>
            <ToastContainer
                position="top-center"
                className="toast-container"
                toastClassName="dark-toast"
                toastStyle={{ backgroundColor: "#fff" }}
            />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title> <div className='font'>Confirm Delete </div></Modal.Title>
                </Modal.Header>
                <Modal.Body><div className='font'> Are you sure you want to delete this employee? </div></Modal.Body>
                <Modal.Footer>
                    <Button className='font btn-new1'  variant="success" onClick={handleClose} >
                        Cancel
                    </Button>
                    <Button className='font ' variant="dark" onClick={handelDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            <h1 style={{backgroundColor:"#eee",paddingLeft:'10px'}}>Name:<span style={{color:"#787c82"}}>  {item.name}</span> </h1> 
            <h1 style={{backgroundColor:"#eee",paddingLeft:'10px'}}>Age:<span style={{color:"#787c82"}}>  {item.age}</span> </h1> 
            <h1 style={{backgroundColor:"#eee",paddingLeft:'10px'}}>Email: <span style={{color:"#787c82"}}>  {item.email}</span></h1> 
            <h1 style={{ backgroundColor: "#eee", paddingLeft: '10px' }}>Phone: <span style={{ color: "#787c82" }}>  {item.phone}</span></h1> 
            <Button  className='main-btn ' onClick={handleShow}>Delete</Button>
        </Container>
    );
}

export default ViewUser;
