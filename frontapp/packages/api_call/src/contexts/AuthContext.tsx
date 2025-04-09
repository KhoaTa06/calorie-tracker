import React, { createContext, useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
import { loginUser, fetchUserProfile, registerUser } from '../api/api.tsx';
import {AuthContextType} from '@frontapp/types/AuthContextType';

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

    const login = async (email: string, password: string) => {
        const response = await loginUser({ email, password });
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
        await registerUser({ first_name, last_name, dob, email, password, admin });
        // navigate('/login');
    };

    const logout = () => {
        setToken(null);
        setEmail(null);
        localStorage.removeItem('token');
        // navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ token, email, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthProvider, AuthContext}