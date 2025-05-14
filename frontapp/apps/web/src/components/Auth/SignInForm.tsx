import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SignInForm({ onSubmit, onChange }: Props) {
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={onChange}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Remember me
          </label>
        </div>
        <div>
          <NavLink to="/signup">Signup here</NavLink>
        </div>
        <button type="submit" className="btn btn-primary d-flex mx-auto justify-content-center" style={{ width: "100%" }}>
          LOG IN
        </button>
      </form>
    </>
  );
}

export default SignInForm;
