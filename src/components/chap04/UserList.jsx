import React, { useEffect, useState } from 'react'

export const UserList = () => {
  const [fetchState, setFetchState] = useState({status: "loading"});

  useEffect(() => {
    fetch('https://dummyjson.com/users')
    .then(res => {
        if (!res.OK) throw new Error("取得に失敗しました。");
        return res.json();
    })
    .then((date) => setFetchState({status: "ok", date}))
    .catch((err) => setFetchState({status: "error", message: err.message}));
  }, []);

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
