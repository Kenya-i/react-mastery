import React from 'react'
import { useAtom } from 'jotai';
import { loginUserAtom } from '../../atoms/loginUserAtom';

export const SettingsPage = () => {
  const [loginUser] = useAtom(loginUserAtom);

  return (
    <div>
        <h2>設定</h2>
        <p>{loginUser?.name ?? "未ログイン"}</p>
    </div>
  )
}