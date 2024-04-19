import { useState } from 'react'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/login/login'
import { Toaster } from 'react-hot-toast'
import Register from './pages/register/register'
import SideBar from './components/sideBar/sideBar'
import PrivateRoutes from './utils/privateRoutes'
import Projects from './pages/projects/projects'
import Create from './pages/create/create'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

            <Route path="dashboard/*" element={<SideBar />}>
               <Route path="projects" element={<Projects />} />
               <Route path="create" element={<Create />} />

            </Route>
          <Route element={<PrivateRoutes />}>
          </Route>
        </Routes>

      </BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>


  )
}

export default App
