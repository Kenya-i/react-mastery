import React, { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch';

export const UserList = () => {
  const fetchState = useFetch();

  if(fetchState.status === "loading") return <p>読み込み中...</p>

  if(fetchState.status === "error") return <p>エラー: {fetchState.message}</p>



  return (
    <ul>
        {fetchState.data.users.map((user) =>(
            <li key={user.id}>{user.firstName}</li>
        ))}
    </ul>
  )
}
