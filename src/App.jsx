import React, { useState } from 'react'
import Home from './pages/Home'
import About from "./pages/About"
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useGoogleLogin, googleLogout  } from '@react-oauth/google';
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
        console.log(user)
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
                  <svg className="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span className="font-bold">Company Name</span>
                </Link>
              </div>

              <div className="flex items-center space-x-1">
                <Link to="/home" className="py-5 px-3 text-gray-700 hover:text-gray-900">Home</Link>
                <Link to="/about" className="py-5 px-3 text-gray-700 hover:text-gray-900">About</Link>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              {user ?
                <div className='flex space-x-4 items-center'>
                  <h2 className='text-sm font-semibold'>{user.data.given_name}</h2>
                  <img className="w-10 h-10 cursor-pointer rounded-full" src={user.data.picture} alt="Rounded avatar" />
                  <svg onClick={handleLogout} className="h-5 w-5 text-black cursor-pointer" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  <path d="M7 12h14l-3 -3m0 6l3 -3" /></svg>
                </div>
                :
                <a onClick={login} className="cursor-pointer relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Get Started</span>
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