import axios from 'axios';

const API_URL = "http://localhost:8000";

const loginUser = async (credentials: {
  username: string;
  password: string;
}) => {
  try {
    const params = new URLSearchParams();
    for (const key in credentials) {
      params.append(key, credentials[key as keyof typeof credentials]);
    }

    const response = await axios.post(`${API_URL}/auth/token`, credentials, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    console.log("response data: ", response.data);
    return response.data;
  } catch (error) {
    console.log("Login error: ", error);
    throw error;
  }
};

const registerUser = async (userData: {
  first_name: string;
  last_name: string;
  dob: string;
  email: string;
  password: string;
}) => {
  try {
    await axios.post("${API_URL}/auth/register", userData);
  } catch (error) {
    console.log("Registration error: ", error);
    throw error;
  }
};

const fetchUserProfile = async (token: string) => {
  try {
    console.log("FetchUserProfile token: ", token);
    const response = await axios.get(`${API_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Fetch user profile error: ", error);
    throw error;
  }
};

export { loginUser, registerUser, fetchUserProfile };
