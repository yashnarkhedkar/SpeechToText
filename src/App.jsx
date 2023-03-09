import React, { useState } from 'react'
import Home from './pages/Home'
import About from "./pages/About"
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import axios from "axios"

const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    googleLogout();
    setUser(null);
    navigate("/About")
  }

  const login = useGoogleLogin({
    onSuccess: async respose => {
      try {
        const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            "Authorization": `Bearer ${respose.access_token}`
          }
        })
        setUser(res);
        console.log(res)
        navigate('/Home');
      } catch (err) {
        console.log(err)
      }
    }
  });

  return (
    <>
      <nav className="bg-gray-50 border-spacing-5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div>
                <Link to="/" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                  <img src='/lp.png' className='w-10 h-10' />
                  <span className="font-bold">Company Name</span>
                </Link>
              </div>

              <div className="flex items-center space-x-1">
                <Link to="/home" className="hover:underline py-5 px-3 text-gray-700 hover:text-gray-900">Home</Link>
                <Link to="/about" className="py-5 px-3 text-gray-700 hover:text-gray-900">About</Link>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              {user ?
                <div className='flex space-x-4 items-center'>
                  <h2 className='text-sm font-semibold'>{user.data.email}</h2>
                  <img className="w-10 h-10 cursor-pointer rounded-full" src={user.data.picture} alt="Rounded avatar" />
                  <svg onClick={handleLogout} className="h-5 w-5 text-black cursor-pointer" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  <path d="M7 12h14l-3 -3m0 6l3 -3" /></svg>
                </div>
                :
                <a onClick={login}  className="relative px-5 py-2 font-medium text-white group">
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-indigo-500 group-hover:bg-indigo-700 group-hover:skew-x-12"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-indigo-700 group-hover:bg-indigo-500 group-hover:-skew-x-12"></span>
                  <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-indigo-600 -rotate-12"></span>
                  <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-indigo-400 -rotate-12"></span>
                  <span className="relative">Get started</span>
                </a>
              }
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App