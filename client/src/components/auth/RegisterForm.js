import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";

const RegisterForm = () => {
  return (
    <>
      <Form className="my-4">
        <Form.Group className="my-3">
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            required
            // value={username}
            // onChange={onChangeLoginForm}
          />
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
            // value={password}
            // onChange={onChangeLoginForm}
          />
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            required
            // value={password}
            // onChange={onChangeLoginForm}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Register
        </Button>
      </Form>
      <p>
        Already have an account?
        <Link to="/login">
          <Button variant="info" size="sm" className="ml-2">
            Login
          </Button>
        </Link>
      </p>
    </>
  );
};
export default RegisterForm;
