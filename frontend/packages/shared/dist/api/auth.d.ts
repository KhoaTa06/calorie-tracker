interface LoginResponse {
    access_token: string;
    token_type: string;
}
export declare const login: (email: string, password: string) => Promise<LoginResponse>;
export declare const register: (first_name: string, last_name: string, dob: string, email: string, password: string, admin: boolean) => Promise<void>;
export declare const fetchUserProfile: (token: string) => Promise<any>;
export {};
