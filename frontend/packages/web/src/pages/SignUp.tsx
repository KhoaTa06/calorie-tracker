import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../components/Auth/SignUpForm";

function Singup() {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    dob: "",
  });

  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext not initialized");
  }
  const { registerUser } = authContext;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e: React.FormEvent) => {
    // console.log("Signing up ", email, password);
    e.preventDefault();
    registerUser(
      formData.first_name,
      formData.last_name,
      formData.email,
      formData.password,
      formData.dob
    );
    navigate("/"); // Redirect to SignIn page after successful registration
  };

  return (
    <>
      <div className="container">
        <div className="col-6 mx-auto">
          <div className="text-center">
            <h1>WELCOME</h1>
          </div>
          <SignUpForm onSubmit={handleSignup} onChange={handleChange} />
        </div>
      </div>
    </>
  );
}

export default Singup;
