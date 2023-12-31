import React from 'react'


// pages..........
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import Login from '../pages/login/login'
import Signup from '../pages/signup/Signup'
import Home from '../pages/home/Home'
import Profile from '../pages/profile/Profile'
import ChatBox from '../pages/chatbox/ChatBox'


//Components
import Nav from '../components/nav/Nav'
import LeftBar from '../components/leftbar/LeftBar'
import RightBar from '../components/rightbar/RightBar'


export default function LayOut(){
   //feed
 
   const Feed =()=>{
    return(
        <>
        <Nav />
         <main>
            <LeftBar />
            <div className='container'>
                <Outlet />
            </div>
            <RightBar />
         </main>
        </>
    )
   }

    //Router
    const router = createBrowserRouter([
      {  
        path: '/',
        element: <Feed />, 
        children: [
            {
                path: '/',
                element:<Home />
            },
            {
                path: '/profile/:id',
                element:<Profile />
            },
            {
                path: '/chatbox/:id',
                element:<ChatBox />
            }
        ]
      },
      {  
        path: '/login',
        element: <Login />
      }, 
      {  
        path: '/signup',
        element: <Signup />
      }, 
    ])
    return(
        <>
           <RouterProvider router={router} />
        </>
    )
}