import apiClient from "client";
export const login = async (email, password) => {
    try {
        const response = await apiClient.post('/auth/token', new URLSearchParams({
            username: email, password
        }));
        return response.data;
    }
    catch (error) {
        throw new Error("Login failed");
    }
};
