import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../components/Auth/SignUpForm";
import { AuthContext } from "@frontapp/api_call/AuthContext";
import { AuthContextType } from "@frontapp/types/AuthContextType";

function Singup() {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    dob: "",
    admin: false
  });

  const authContext = useContext(AuthContext as React.Context<AuthContextType>);
  if (!authContext) {
    throw new Error("AuthContext not initialized");
  }
  const { register } = authContext;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e: React.FormEvent) => {
    // console.log("Signing up ", email, password);
    e.preventDefault();
    try {
    register(
      formData.first_name,
      formData.last_name,
      formData.dob,
      formData.email,
      formData.password,
      formData.admin
    );
    } catch (error) {
      console.error("Error during registration:", error);
      return;
    }
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
