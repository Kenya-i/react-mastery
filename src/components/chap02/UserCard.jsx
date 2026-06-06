import React from 'react'

export const UserCard = ({namem, role}) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px"}}>
        <h2>名前: {name}</h2>
        <p>役割: {role}</p>
    </div>
  )
}
