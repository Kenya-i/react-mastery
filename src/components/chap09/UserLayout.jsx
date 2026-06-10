import React from 'react'
import { Outlet } from 'react-router'

export const UserLayout = () => {
  return (
    <div>
        <h3>User</h3>
        <Outlet/>
    </div>
  )
}
