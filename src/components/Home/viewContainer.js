import React from 'react';
import Home from './Home';
import ViewEmployeesHook from '../../hook/view-employees-hook';
import { Container, Spinner, Table } from 'react-bootstrap';

const ViewContainer = () => {
      const [items, loading] = ViewEmployeesHook()
    return (
        <div>
          <Container>
                <h1 style={{color:"#002d62"}}>{items.length} Employees Found</h1>
                <br />
                 <br/>
           
            {
                loading === false ? (
             
                    items.map((employee, index) => {
                     return (
                         <Home key={index} employee={employee} index={index} />)}
                    )) : <Spinner animation="border" variant="success" />

                    } 
                
          </Container>
        </div>
    );
}

export default ViewContainer;
