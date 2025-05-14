import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SignInForm from "../components/Auth/SignInForm";
import { AuthContext } from "@frontapp/api_call/AuthContext";
import { AuthContextType } from "@frontapp/types/AuthContextType";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const authContext = useContext(AuthContext as React.Context<AuthContextType>);
  if (!authContext) {
    throw new Error("AuthContext not initialized");
  }
  const { login } = authContext;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    console.log("Logging in ", formData.email, formData.password);
    e.preventDefault();
    try {
      await login(formData.email, formData.password);
      navigate("/dashboard")
    } catch (error) {
      console.error("Login error: ", error);
      setError(true);
      return;
    }
  };

  return (
    <>
      {error == true && 
      <div className="alert alert-danger" role="alert">
        email and password does not match or exist
      </div>}
      <div className="d-flex align-items-center vh-100">
        <div className="container mt-5" style={{ width: "100%", maxWidth: "500px" }}>
          <div className="card p-4">
            <div className="text-center">
              <h1>WELCOME BACK</h1>
            </div>
            <SignInForm onSubmit={handleLogin} onChange={handleChange} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
