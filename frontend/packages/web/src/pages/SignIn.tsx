import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
import SignInForm from "../components/Auth/SignInForm";
import { AuthContext } from "../../contexts/AuthContext";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext not initialized");
  }
  const { login } = authContext;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e: React.FormEvent) => {
    console.log("Logging in ", formData.email, formData.password);
    e.preventDefault();
    login(formData.email, formData.password);
  };

  return (
    <>
      <div className="container">
        <div className="col-6 mx-auto">
          <div className="text-center">
            <h1>WELCOME BACK</h1>
          </div>
          <SignInForm onSubmit={handleLogin} onChange={handleChange} />
        </div>
      </div>
    </>
  );
}

export default SignIn;
