import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import Modal from "react-responsive-modal";
import { PROJECT_TITLE } from "../store/actions/types";
import "react-responsive-modal/styles.css";
import { SignUp } from "./SignUp";

const Login = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div className="body ">
      <main className="form-signin">
        <form>
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
          <div className="mb-1">
            <label htmlFor="exampleInputEmail1" className="form-name">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-1">
            <label htmlFor="exampleInputEmail1" className="form-name">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <button className="w-100 btn btn-lg signup-btn mt-4" type="submit">
            Log In
          </button>
          <p className="mt-3 text-muted text-center signFoot">
            don't have an account?
            {/* <span className="login-btn"> Sign Up</span> */}
            <Nav.Link className="login-btn" onClick={onOpenModal}>
              Sign Up
            </Nav.Link>
            <Modal open={open} onClose={onCloseModal} center>
              <SignUp />
            </Modal>
          </p>
        </form>
      </main>
    </div>
  );
};

export default Login;
