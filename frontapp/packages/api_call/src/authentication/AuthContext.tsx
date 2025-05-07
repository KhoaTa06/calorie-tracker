import React, { createContext, useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
import { loginUser, fetchUserProfile, registerUser } from './api.tsx';
import {AuthContextType} from '@frontapp/types/AuthContextType';

function convertDateFormat(date: string): string {
    const parts = date.split('/');
    if (parts.length !== 3 || !parts[0] || !parts[1] || !parts[2]) {
      throw new Error('Invalid date format. Expected mm/dd/yyyy');
    }
    const [month, day, year] = parts;
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  }

const AuthContext = createContext<AuthContextType>({
    token: null,
    email: null,
    login: async () => {},
    register: async () => {},
    logout: () => {},
});


interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [email, setEmail] = useState(null);
    // const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            const getUser = async () => {
                const user = await fetchUserProfile(token);
                setEmail(user);
            };
            getUser();
        }
    }, [token]);

    const login = async (username: string, password: string) => {
        const response = await loginUser({ username, password });
        if (response?.access_token) {
            setToken(response.access_token);
            localStorage.setItem('token', response.access_token);
            const userProfile = await fetchUserProfile(response.access_token);
            setEmail(userProfile);
            // navigate('/profile');
        }
    };

    const register = async (
        first_name: string,
        last_name: string,
        dob: string,
        email: string,
        password: string,
        admin: boolean) => {
        const formattedDob = convertDateFormat(dob);
        try {
        await registerUser({ first_name, last_name, dob: formattedDob, email, password, admin });
        }catch (error) {
            throw error;
        }
    };

    const logout = () => {
        setToken(null);
        setEmail(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ token, email, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthProvider, AuthContext}