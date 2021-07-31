import { PROJECT_TITLE } from "../store/actions/types";
import "./SignUp.css";

export const SignUp = () => {
  return (
    <div className="body ">
      <main className="form-signin">
        <form>
          <h2 className="bd-placeholder-img text-center" href="#">
            <svg
              className="mb-1 logo-img1"
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

          <div class="mb-1">
            <label htmlFor="exampleInputEmail1" class="form-name">
              Fullname
            </label>
            <input
              type="email"
              class="form-control form-input"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-1">
            <label htmlFor="exampleInputEmail1" class="form-name">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-1">
            <label htmlFor="exampleInputEmail1" class="form-name">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-1">
            <label htmlFor="exampleInputEmail1" class="form-name">
              Confirm Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <button className="w-100 btn btn-lg signup-btn mt-4" type="submit">
            Sign up
          </button>
        </form>
      </main>
    </div>
  );
};
