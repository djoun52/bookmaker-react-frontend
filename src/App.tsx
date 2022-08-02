import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './framwork.css';
import './App.css'
import SideBar from './Containers/Nav/sideBar/sideBar'
import TopBar from './Containers/Nav/topBar/topBar'
import Home from './Pages/Home/Home';
import Error404 from "./Components/Error404/Error404"

function App() {


  return (
    <div className="App  ">
      <div className='flex '>
        <SideBar />
        <div className='w-80 bgc-grey'>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/*" element={<Collection />} /> */}
            <Route path="*" element={<Error404 />} />
          </Routes>

        </div>
      </div>
    </div>
  )
}

export default App
