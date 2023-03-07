import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import About from '../pages/About'

const Navbar = () => {
  return (
    <nav className="bg-gray-50 border-spacing-5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                <svg className="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span className="font-bold">Company Name</span>
              </a>
            </div>

            <div className="flex items-center space-x-1">
              <Link to="/" className="py-5 px-3 text-gray-700 hover:text-gray-900">Home</Link>
              <Link to="/about" className="py-5 px-3 text-gray-700 hover:text-gray-900">About</Link>
            </div>
          </div>

          <div className="flex items-center space-x-1">
            <a href="#_" class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
              <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
              <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Get Started</span>
            </a>
          </div>
        </div>
      </div>
      <Routes>
        <Route exact path="/about" element={<About />} />
      </Routes>
    </nav>
  )
}

export default Navbar