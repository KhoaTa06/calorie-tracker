// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@frontapp/api_call/AuthContext";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";
import Exercise from "./pages/Exercise";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/profile" element={<UserProfile />}></Route>
          <Route path="/exercise" element={<Exercise />}></Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
