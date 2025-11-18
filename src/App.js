import { useState, useEffect } from "react";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Project from "./Project";
import Register from "./authorization/Register";
import Login from "./authorization/Login";
import About from "./About/About";
import Basket from "./Basket/Basket";

function App() {

    const [ isMobile, setIsMobile ] = useState('');

    useEffect(() => {
        window.addEventListener('resize', () => {
            if(window.innerWidth <= 768) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        });

        if(window.innerWidth <= 768) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }

    }, []);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <Project isMobile={isMobile}/>
                    }/>
                    <Route path="/signIn" element={<Login />}/>
                    <Route path="/signUp" element={<Register />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/basket" element={
                        <Basket isMobile={isMobile}/>
                    }/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
