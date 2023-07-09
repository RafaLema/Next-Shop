import React, { useState, useContext, createContext } from 'react';
import cookie from 'js-cookie';
import axios from 'axios';
import endPoints from '@/services/api';

const authContext = createContext();

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        const options = {
            headers: {
                'Content-Type': 'application/json',
                accept: '*/*',
            },
        };

        try {
            const { data } = await axios.post(
                endPoints.auth.login,
                {
                    email,
                    password,
                },
                options
            );

            //const { data } = response.data;
            if (data) {
                //setUser(data);
                cookie.set('token', data.access_token, { expires: 7 });
                const { data: user } = await axios.get(endPoints.auth.profile, {
                    headers: {
                        Authorization: `Bearer ${data.access_token}`,
                    },
                });
                if (user) {
                    setUser(user);
                }
            }
            return user;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    const logout = () => {
        cookie.remove('token');
        setUser(null);
        delete axios.defaults.headers.Authorization;
        window.location.href = '/login';
    };

    const getUser = async () => {
        try {
            const response = await axios.get(endPoints.auth.profile);
            const { data } = response.data;
            setUser(data);
            return data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    return {
        user,
        login,
        logout,
        getUser,
    };
}
