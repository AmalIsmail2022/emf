
import { Button, Container, Form } from 'react-bootstrap';

import { ToastContainer } from 'react-toastify';
import EditEmployeeHook from '../../hook/edit-employee-hook';
import { useParams } from 'react-router-dom';

const EditUser = () => {
     const { id } = useParams();
 const [nname, nage, nemail, nphone, setnName, setnAge, setnEmail, setnPhone, editEmp, onChangeName, onChangeAge, onChangeEmail,onChangePhone ] = EditEmployeeHook(id)
  return (
      
    <Form onSubmit={editEmp}>
       <ToastContainer
                position="top-center"
                className="toast-container"
                toastClassName="dark-toast"
                toastStyle={{ backgroundColor: "#fff" }}
            />
        <Container>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value={nname} onChange={onChangeName}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Enter Age" value={nage} onChange={onChangeAge}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Enter Email" value={nemail} onChange={onChangeEmail}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Enter Phone" value={nphone} onChange={onChangePhone}/>
      </Form.Group>
     
      <Button type='submit' variant="primary"  style={{width:"120px"}}>
        Edit Employee
        </Button>
        </Container>
    </Form>
    );
}

export default EditUser;
