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
  const { loginUser } = authContext;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e: React.FormEvent) => {
    console.log("Logging in ", formData.email, formData.password);
    e.preventDefault();
    loginUser(formData.email, formData.password);
  };

  return (
    <>
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
