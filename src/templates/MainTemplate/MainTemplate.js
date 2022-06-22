import React from 'react'
import { Route } from 'react-router-dom'
import Sidebar from '../../Component/Sidebar'

export const MainTemplate = (props) => {
    const { Component } = props
    return (
        <>
            <div className='flex h-screen'>
                <div className=' sidebar flex items-center '>
                    
                    <Sidebar />
                    
                </div>
                <div className=' container main-content' >
                    <Component />
                </div>

            </div>

        </>
    )
}