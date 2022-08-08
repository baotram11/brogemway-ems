import Cookies from 'js-cookie';
import React, { useState, useEffect, createContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState(null);

    useEffect(() => {
        const rawToken = Cookies.get('token');
        if (rawToken) setAuthToken(rawToken);
        const rawId = Cookies.get('userId');
        if (rawId) setUserId(rawId);
        const rawName = Cookies.get('userName');
        if (rawName) setUserName(rawName);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                authToken,
                setAuthToken,
                userId,
                setUserId,
                userName,
                setUserName,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
