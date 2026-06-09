import React, { useContext } from 'react'
import { LoginUserContext } from '../../context/LoginUserContext';

export const SettingsPage = () => {
  const {loginUser} = useContext(LoginUserContext);

  return (
    <div>
        <h2>設定</h2>
        <p>{loginUser?.name ?? "未ログイン"}</p>
    </div>
  )
}
