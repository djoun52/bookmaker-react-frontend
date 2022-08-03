import {Routes, Route} from 'react-router-dom';
import './framwork.css';
import './App.css'
import {SideBar} from './Containers/sideBar/sideBar'
import Error404 from "./Components/Error404/Error404"
import Home from "./Pages/Home/Home";

import { Flex} from "@chakra-ui/react";
import TopBar from "./Containers/topBar/topBar";

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
                        <Route path="/-1" element={<Home/>}/>
                        <Route path="*" element={<Error404/>}/>
                    </Routes>
                </Flex>
            </Flex>
        </div>
    )
}

export default App
