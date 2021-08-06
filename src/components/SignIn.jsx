import React, { Fragment } from "react";
import { Button, Form } from "react-bootstrap";
import "react-responsive-modal/styles.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import LogoProjectTitle from "./assets/LogoProjectTitle";
import axios from "axios";
import { BASE_URL_SIGNIN_GMDB } from "../store/actions/types";

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
      axios.post(BASE_URL_SIGNIN_GMDB, state).then((res) => {
        setShow(false);
        localStorage.setItem("Token", res.data.token);
        localStorage.setItem("USERID", res.data._id);
      });
    }
  };
  return (
    <Fragment className="body ">
      <Form
        onSubmit={login}
        className="modal-from m-1 p-1"
        style={{ width: "20rem" }}
      >
        <div
          className="bd-placeholder-img text-center"
          href="/"
          style={{ margin: "0.5rem" }}
        >
          <LogoProjectTitle />
        </div>
        <Form.Group className="mb-2 mt-4" controlId="formBasicEmail">
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
