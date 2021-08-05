import React, { Fragment } from "react";
import { Button, Form } from "react-bootstrap";
import { PROJECT_TITLE } from "../store/actions/types";
import "react-responsive-modal/styles.css";
import { Link } from "react-router-dom";
import "../styles/Modal.css";
import { useState } from "react";

const SignIn = (props) => {
  const { onclick, setShow } = props;
  const { state, setState } = useState({
    email: "",
    password: "",
  });

  const login = (e) => {
    e.preventDefault();
    if (state.email === "" || state.password === "") {
      alert("please fill all form");
    } else {
      axios.post(urlpostlogin, state).then((res) => {
        setShow(false);
        localStorage.setItem("Token", res.data.token);
      });
    }
  };
  return (
    <Fragment className="body ">
      <Form className="modal-from">
        <h2 className="bd-placeholder-img text-center" href="#">
          <svg
            className="mb-1"
            width="50"
            height="30"
            viewBox="0 0 137 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="137" height="99" rx="20" fill="#FE024E" />
          </svg>
          {PROJECT_TITLE}
        </h2>
        <Form.Group
          noSubmit={login}
          className="mb-2 mt-4"
          controlId="formBasicEmail"
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setState({ ...state, email: e.target.value })}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setState({ ...state, password: e.target.value })}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <p className="mt-5 text-muted text-center signFoot">
          don't have an account?{" "}
          <Link to="/signup" className="text-danger">
            Sign Up
          </Link>
        </p>
      </Form>
    </Fragment>
  );
};

export default SignIn;
