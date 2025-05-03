import React from "react";

interface Props {
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SignUpForm({ onSubmit, onChange }: Props) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputFirstName" className="form-label">
            First name
          </label>
          <input type="text" name="first_name" className="form-control" id="exampleInputFirstName" placeholder="First name" onChange={onChange}/>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputLastName" className="form-label">
            Last name
          </label>
          <input type="text" name="last_name" className="form-control" id="exampleInputLastName" placeholder="Last name" onChange={onChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputDob" className="form-label">
            Date of Birth(MM/DD/YYYY)
          </label>
          <input type="text" name="dob" className="form-control" id="exampleinputDob" placeholder="01/01/2000" onChange={onChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange}/>
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
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            onChange={onChange}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            name="admin"
            className="form-check-input"
            id="exampleCheck1"
            onChange={onChange}
          />
          <p>Admin access</p>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck2"
          />
          <p>Agree to terms and condition</p>
        </div>
        <button type="submit" className="btn btn-primary">
          SIGN UP
        </button>
      </form>
    </>
  );
}

export default SignUpForm;
