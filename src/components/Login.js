import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Bootstrap from "react-bootstrap";

const Login = props => {
    const [username, setUsername] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <div>
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username" size="large">
          <Form.Control
            autoFocus
            type="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </Form.Group>
        <Button block size="large"  type="submit">
          Login
        </Button>
      </Form>
        </div>
    );
}

export default Login;