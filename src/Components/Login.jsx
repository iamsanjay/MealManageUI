import {useState} from 'react';
import {login} from '../Services/LoginService.js';
import {Row,Col, Form, Button} from "react-bootstrap";

export default function Login({setUser}){
	
	const [username, setUsername] = useState();
  const [token, setToken] = useState();

  	const handleSubmit =  (e) => {
    	e.preventDefault();
    	login(username, token)
    		.then(r => setUser({'username':username, 'token':token}))
        .catch(r => {
            alert("Credentials Wrong.");
            setUser();
          })
    
	 }

	return(
   <Row>
      <Col xs="4" style={{"padding":"20px"}} className="mx-auto">
        <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" value={username} placeholder="Enter name" onChange={(e) => setUsername(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Label>Token</Form.Label>
                  <Form.Control type="password"  placeholder="Enter token"  onChange={(e) => setToken(e.target.value)}/>
              </Form.Group>
              
              <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
            </Form>
          </Col>
      </Row>
  )
}