import React, { useState } from 'react'
import { UserRow } from './UserRow';
import { AddUserForm } from './AddUserForm';

export const UserList = () => {
    const [users,setUsers] = useState([
        { id: crypto.randomUUID(), name: "taro"},
        { id: crypto.randomUUID(), name: "jiro"},
    ]);

    const addUser = (newUserName) => {
        setUsers([...users, {id: crypto.randomUUID(), name: newUserName }]);
    };

    const updateUserName = (id, newName) => {
        setUsers(users.map((user) => user.id === id ? { ...user, name: newName } : user))
    };

    const deleteUser = (id) => {
        setUsers(
            users.filter((user) => user.id !==id )
        );
    }

    console.log("userList")

  return (
    <div>
        <ul>
            {users.map((user) => (
                <UserRow key={user.id} user={user} deleteUser={deleteUser} />
            ))}
        </ul>
        <AddUserForm addUser={addUser}/>
    </div>
  )
}
