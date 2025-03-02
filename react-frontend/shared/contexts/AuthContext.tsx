import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, fetchUserProfile, registerUser } from "../api/api.tsx";

interface AuthContextType {
  token: string | null;
  user: any | null;
  login: (email: string, password: string) => void;
  register: (
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

  const login = async (username: string, password: string) => {
    const response = await loginUser({ username, password });
    if (response?.access_token) {
      setToken(response.access_token);
      localStorage.setItem("token", response.access_token);
      const userProfile = await fetchUserProfile(response.access_token);
      setUser(userProfile);
      navigate("/profile");
    }
  };

  const register = async (
    first_name: string,
    last_name: string,
    dob: string,
    email: string,
    password: string
  ) => {
    await registerUser({ first_name, last_name, dob, email, password });
    navigate("/login");
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ token, user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
