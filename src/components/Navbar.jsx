import React from "react";
import "../styles/Navbar.css";
import Logo from "./Logo";

const Navbar = () => {
  const Login = true;
  return (
    <div className="header">
      <div>
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid d-flex justify-content-around">
            <div>
              <a class="navbar-brand" href="#">
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
                B-Movies
              </a>
            </div>
            <div className="search-bar">
              <form class="d-flex justify-content-around ">
                <input
                  class="form-control me-2 "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                {/* <button class="btn btn-outline-success" type="submit">
                  Search
                </button> */}
              </form>
            </div>
            <div>
              <h3>Sign In</h3>
            </div>
          </div>
        </nav>
      </div>
      <h1>ini header</h1>
      <a href ={"/detailmoive"}>cek detail movie</a>
    </div>
  );
};

export default Navbar;
