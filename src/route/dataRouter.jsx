import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { UserListWithEffect } from '../components/chap09/UserListWithEffect'
import { UserLayout } from '../components/chap09/UserLayout'
import { Layout } from '../components/chap09/Layout'
import { Home } from '../components/chap09/Home'
import { About } from '../components/chap09/About'

const router = createBrowserRouter([

    { element: <Layout />, children: [
        { path: "/", element: <Home />},
        { path: "/about", element: <About />},
        { 
            path: "/users",
            element: <UserLayout />,
            children: [
                {index: true, element: <UserListWithEffect/>},
                {path: ":id", element: <UserListWithEffect/>},
        ]},
    ]},
])

export const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}
