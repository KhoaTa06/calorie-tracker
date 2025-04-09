declare const loginUser: (credentials: {
    username: string;
    password: string;
}) => Promise<any>;
declare const registerUser: (userData: {
    first_name: string;
    last_name: string;
    dob: string;
    email: string;
    password: string;
}) => Promise<void>;
declare const fetchUserProfile: (token: string) => Promise<any>;
export { loginUser, registerUser, fetchUserProfile };
