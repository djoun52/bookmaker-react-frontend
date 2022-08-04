import {Routes, Route} from 'react-router-dom';
import {Flex} from "@chakra-ui/react";
import './framwork.css';
import './App.css'
import {SideBar} from './Containers/SideBar/SideBar'
import Error404 from "./Components/Error404/Error404"
import Home from "./Pages/Home/Home";
import TopBar from "./Containers/TopBar/TopBar";
import Login from "./Pages/Login/Login";
import Register from './Pages/register/Register'
import VerifEmail from './Pages/VerifEmail/VerifEmail'

function App() {


    return (
        <div className="App  ">
            <Flex w='100%'>
                <SideBar/>
                <Flex w='100%' flexDir='column' >
                    <TopBar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/list" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/verif-email" element={<VerifEmail />} />
                        <Route path="/-1" element={<Home/>}/>
                        <Route path="*" element={<Error404/>}/>
                    </Routes>
                </Flex>
            </Flex>
        </div>
    )
}

export default App
