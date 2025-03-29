interface LoginResponse {
    access_token: string;
    token_type: string;
}
export declare const login: (email: string, password: string) => Promise<LoginResponse>;
export {};
