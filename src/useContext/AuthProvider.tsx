import { ReactNode, createContext, useContext, useState } from "react";

interface AuthContextInterface {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

interface User {
    username: string;
    password: string;
    posts: Posts[] | undefined;
}
interface Posts {
    id: number;
    image: string;
    company: string;
}

const AuthContext = createContext<AuthContextInterface | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth(): AuthContextInterface {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth debe usarse dentro de un AuthProvider');
    return context;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);

    function login(user: User) {
        setUser(user);
    }

    function logout() {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}



