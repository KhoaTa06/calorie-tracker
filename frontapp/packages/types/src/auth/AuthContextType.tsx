
export interface AuthContextType {
    token: string | null;
    email: string | null;
    login: (email: string, password: string) => Promise<void>;
    register: (
        first_name: string,
        last_name: string,
        dob: string,
        email: string,
        password: string,
        admin: boolean
    ) => Promise<void>;
    logout: () => void;
}