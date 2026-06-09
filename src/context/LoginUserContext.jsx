import React, { createContext, useState } from 'react'

export const LoginUserContext = createContext();

export const LoginUserProvier = ({ children }) => {
  const [loginUser,setLoginUser] = useState(null);

  const login = () => setLoginUser({id:1, name: "taro"});
  const logout = () => setLoginUser(null);

  return (
    <LoginUserContext.Provider value={{ loginUser, login, logout}}>
        {children}
    </LoginUserContext.Provider>
  )
}
