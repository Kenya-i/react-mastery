import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import { About } from '../components/chap09/About'
import { Home } from '../components/chap09/Home'
import { Layout } from '../components/chap09/Layout'
import { UserLayout } from '../components/chap09/UserLayout'
import { UserListWithEffect } from '../components/chap09/UserListWithEffect'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/users' element={<UserLayout/>}>
                    <Route index element={<UserListWithEffect/>}/>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
