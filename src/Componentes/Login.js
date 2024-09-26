import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Simple email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email) && password.length >= 8) {
      setShowError(false);
      setValidated(true);
      console.log("Form is valid");
    } else {
      setShowError(true);
      setValidated(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://cdn.discordapp.com/attachments/938625558382784532/1288872065721700433/tom-dils-2lDtnHgiQzc-unsplash.jpg?ex=66f6c326&is=66f571a6&hm=89429a40b3d7c61ad7091fff8f498337a90ed8a3bc76737fd32a47437204d90e&')`,
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container style={{ maxWidth: "400px", backgroundColor: "white", padding: "20px", borderRadius: "8px" }}>
        <h2 className="text-center">Log in</h2>
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              isInvalid={!validated && showError}
            />
            <Form.Control.Feedback type="invalid">
                Ingresa un email valido
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              isInvalid={!validated && showError && password.length < 8}
            />
            <Form.Control.Feedback type="invalid">
              La contraseña debe ser de 8 caracteres
            </Form.Control.Feedback>
          </Form.Group>

          {showError && (
            <Alert variant="danger" className="mt-3">
              El email y la contraseña no son validos
            </Alert>
          )}

          <Button variant="primary" type="submit" className="w-100 mt-3">
            Log in
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
