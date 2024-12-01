import React, { createContext, useEffect, useState } from "react";

const defaultState = {
    user: null,
    isLoading: false,
    setUser:  (value) => null,
    logout: () => null
};

const AuthContext = createContext(defaultState);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getUser = localStorage.getItem('user');
        const _user = getUser ? JSON.parse(getUser) : null;

        if (_user) {
            setUser(_user);
        }else{
            setIsLoading(false);
        }
    }, []);

    const handleLogout = () => {
        setUser(null);
        localStorage.clear();
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user) || '');
    }, [user]);

    return (
        <AuthContext.Provider
        value={{ 
            user: user,
            isLoading: isLoading,
            setUser: setUser,
            logout: handleLogout
         }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }