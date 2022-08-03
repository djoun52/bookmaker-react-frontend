import { Routes, Route } from 'react-router-dom';
import './framwork.css';
import './App.css'
import {SideBar} from './Containers/sideBar/sideBar'
import Error404 from "./Components/Error404/Error404"
import Home from "./Pages/Home/Home";

function App() {


  return (
    <div className="App  ">
      <div className='flex '>
        <SideBar />
        <div className='w-80 bgc-grey'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/form" element={<Form/>} />
            <Route path="*" element={<Error404 />} />
          </Routes>

        </div>
      </div>
    </div>
  )
}

export default App
