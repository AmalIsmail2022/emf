import React from 'react';
import { Container, Form, Nav, Navbar, Button } from 'react-bootstrap';


const Navy = () => {
  return (
    <div>
     <Navbar  className='nav' expand="lg" style={{height:'246px'}}>
      <Container>
                <Navbar.Brand >
                    <a href='#/'>
              <h1>CRUD SYSTEM</h1>
                    </a>
                </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#/" refresh="true" className='nav-link'>Home</Nav.Link>
            <Nav.Link href="#/add" className='nav-link'>Add Employee</Nav.Link>
         
          
            </Nav>
             
          <Form className="d-flex search">
              <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
                aria-label="Search"
                        />
            <i class="fa-solid fa-magnifying-glass"></i>
            <Button className='btn-new'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Navy;
