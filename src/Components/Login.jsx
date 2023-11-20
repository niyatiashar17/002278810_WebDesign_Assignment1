import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@northeastern\.edu$/;
    setIsEmailValid(emailRegex.test(email));
  };

  const validatePassword = () => {
    setIsPasswordValid(password.length >= 8);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate email and password before attempting login
    validateEmail();
    validatePassword();

    if (isEmailValid && isPasswordValid) {
      try {
        const response = await fetch("http://localhost:10000/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        console.log(email, password);

        if (response.ok) {
          // Handle successful login (e.g., redirect to dashboard)
          console.log("Login successful");
          navigate("/jobs");
        } else {
          const errorData = await response.json();
          setError(errorData.error || "An error occurred");
        }
      } catch (error) {
        console.error("An error occurred during login:", error);
        setError("An error occurred");
      }
    }
  };

  return (
    <Card className="w-50 mt-5 mx-auto">
      <Card.Body>
        <Card.Title>Login</Card.Title>

        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
              isInvalid={!isEmailValid}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid Northeastern email address.
            </Form.Control.Feedback>
          </Form.Group>

          <br></br>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword}
              isInvalid={!isPasswordValid}
              required
            />
            <Form.Control.Feedback type="invalid">
              Password must be at least 8 characters long.
            </Form.Control.Feedback>
          </Form.Group>
          <br></br>

          <Button
            variant="primary"
            type="submit"
            disabled={!isEmailValid || !isPasswordValid}
          >
            Login
          </Button>

          {!isEmailValid || !isPasswordValid ? (
            <Alert variant="danger" className="mt-3">
              Please fix the validation errors before submitting the form.
            </Alert>
          ) : null}

          {error && (
            <Alert variant="danger" className="mt-3">
              {error}
            </Alert>
          )}
        </Form>
      </Card.Body>
    </Card>
  );
};

export default LoginPage;
