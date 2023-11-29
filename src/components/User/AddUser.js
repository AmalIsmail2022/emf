
import { Button, Container, Form } from 'react-bootstrap';

import { ToastContainer } from 'react-toastify';
import AddEmployeeHook from './../../hook/add-employee-hook';

const AddUser = () => {
 const [name, age, email, phone, setName, setAge, setEmail, setPhone, addNew] = AddEmployeeHook()
  return (
      
    <Form onSubmit={addNew}>
       <ToastContainer
                position="top-center"
                className="toast-container"
                toastClassName="dark-toast"
                toastStyle={{ backgroundColor: "#fff" }}
            />
        <Container>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value={name} onChange={e=>setName(e.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Enter Age" value={age} onChange={e=>setAge(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Enter Email" value={email} onChange={e=>setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Enter Phone" value={phone} onChange={e=>setPhone(e.target.value)}/>
      </Form.Group>
     
      <Button variant="primary" type="submit" style={{width:"120px"}}>
        Add Employee
        </Button>
        </Container>
    </Form>
    );
}

export default AddUser;
