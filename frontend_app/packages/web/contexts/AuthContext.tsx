import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login, fetchUserProfile, register, LoginResponse } from "@frontend/shared";

interface AuthContextType {
  token: string | null;
  user: any | null;
  loginUser: (email: string, password: string) => void;
  registerUser: (
    first_name: string,
    last_name: string,
    dob: string,
    email: string,
    password: string
  ) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        const user = await fetchUserProfile(token);
        setUser(user);
      };
      getUser();
    }
  }, [token]);

  const loginUser = async (username: string, password: string) => {
    const response: LoginResponse = await login(username, password);
    if (response?.access_token) {
      setToken(response.access_token);
      localStorage.setItem("token", response.access_token);
      const userProfile = await fetchUserProfile(response.access_token);
      setUser(userProfile);
      navigate("/profile");
    }
  };

  const registerUser = async (
    first_name: string,
    last_name: string,
    dob: string,
    email: string,
    password: string,
    admin: boolean = false
  ) => {
    await register(first_name, last_name, dob, email, password, admin);
    navigate("/login");
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginUser, registerUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
