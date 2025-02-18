// import React from "react";
import { useNavigate } from "react-router-dom";
import SignInForm from "../components/Auth/SignInForm";

function SignIn() {
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    console.log("Logging in ", email, password);
    navigate("/dashboard");
  };

  return (
    <>
      <div className="container">
        <div className="col-6 mx-auto">
          <div>
            <SignInForm onSubmit={handleLogin} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
