import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../../shared/contexts/AuthContext";
import SignIn from "../../shared/pages/SignIn";
import SignUp from "../../shared/pages/SignUp";
import Dashboard from "../../shared/pages/Dashboard";
import UserProfile from "../../shared/pages/UserFrofile";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/profile" element={<UserProfile />}></Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
