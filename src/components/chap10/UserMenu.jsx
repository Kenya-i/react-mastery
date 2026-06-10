import React from 'react'
import { useAtom } from 'jotai';
import { loginUserAtom } from '../../atoms/loginUserAtom';

export const UserMenu = () => {
   const [loginUser, setLoginUser] = useAtom(loginUserAtom);
  
  
    return (
    <div>
        <span>{loginUser?.name ?? "未ログイン"}</span>
        <button onClick={() => setLoginUser({id:1, name: "taro"})}>ログイン</button>
        <button onClick={() => setLoginUser(null)}>ログアウト</button>
    </div>
  )
}
