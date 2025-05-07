// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@frontapp/api_call/AuthContext";
import { ExerciseProvider } from "@frontapp/api_call/ExerciseContext";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";
import Exercise from "./pages/exercise/Exercise";
import Food from "./pages/food/Food";
import NoPage from "./pages/NoPage";
import Admin from "./pages/admin/Admin";

function App() {
  return (
    <Router>
      <AuthProvider>
        <ExerciseProvider>
          <Routes>
            <Route path="/" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/profile" element={<UserProfile />}></Route>
            <Route path="/exercise/*" element={<Exercise />}></Route>
            <Route path="/food/*" element={<Food />}></Route>
            <Route path="*" element={<NoPage />}></Route>
            <Route path="/admin/*" element={<Admin />}></Route>
          </Routes>
        </ExerciseProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
