import React, { useContext } from 'react'
import { LoginUserContext } from '../../context/LoginUserContext';

export const UserMenu = () => {
   const { loginUser,login, logout } = useContext(LoginUserContext);
  
  
    return (
    <div>
        <span>{loginUser?.name ?? "未ログイン"}</span>
        <button onClick={login}>ログイン</button>
        <button onClick={logout}>ログアウト</button>
    </div>
  )
}
