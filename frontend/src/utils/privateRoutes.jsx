import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'


function privateRoutes(props) {
 

    const data = sessionStorage.getItem('user');


    return (
        <>
            {data ? <Outlet /> : <Navigate to="/login" />}
        </>
    )
}

export default privateRoutes