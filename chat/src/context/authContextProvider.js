import React, {createContext, useState} from 'react';

export const AuthContext = createContext({
    isAuth:false,
    handleAuthenticate:() => null,
    handleLogOut:() => null
})
const AuthContextProvider = ({children}) => {

    const [isAuth,setAuth] = useState(false)

    const handleAuthenticate = () => {
        setAuth(true)
    }
    const handleLogOut = () => {
        setAuth(true)
    }

    return (
        <AuthContext.Provider
          value = {{
              isAuth,
              handleAuthenticate,
              handleLogOut
          }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
