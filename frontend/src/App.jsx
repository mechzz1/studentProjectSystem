import { useState } from 'react'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/login/login'
import { Toaster } from 'react-hot-toast'
import Register from './pages/register/register'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* <Route element={<PrivateRoutes />}>
        <Route path="dashboard/*" element={<SideBar />}>
          <Route index path="main" element={<Home />} />
          <Route  path="app" element={<AppManagement />} />
          <Route  path="module" element={<ModuleManagement />} />
          <Route  path="organizations" element={<Organizations />} />

        </Route>
      </Route> */}
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
