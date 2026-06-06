import React from 'react'

const users = [
    {id: 1, name: "taro", hobby: "読書"},
    {id: 2, name: "tjiro", hobby: "登山"},
    {id: 3, name: "saburo", hobby: "写真"},
];

export const UserList = () => {
  return (
    <div>
        <h1>ユーザー一覧</h1>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} (趣味: {user.hobby})
                </li>
            ))}
        </ul>
    </div>
  )
}
