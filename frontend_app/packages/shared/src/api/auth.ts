import apiClient from "./client";

export interface LoginResponse {
    access_token: string;
    token_type: string;
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
    try {
        const response = await apiClient.post<LoginResponse>(
            '/auth/token',
            new URLSearchParams({
                username: email, password})
            );
            return response.data;
    } catch (error) {
        throw new Error("Login failed");
    }
};

export const register = async (
    first_name: string,
    last_name: string,
    dob: string,
    email: string,
    password: string,
    admin: boolean): Promise<void> => {
    try {
        await apiClient.post('/auth/register', {
            first_name,
            last_name,
            dob,
            email,
            password,
            admin
        });
    } catch (error) {
        // Handle error appropriately in your application
        console.error("Registration failed", error);
        throw new Error("Registration failed");
    }
};

export const fetchUserProfile = async (token: string): Promise<any> => {
    try {
        const response = await apiClient.get('/users/me', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        // Handle error appropriately in your application
        console.error("Failed to fetch user profile", error);
        throw new Error("Failed to fetch user profile");
    }
};