import { useState, useEffect } from "react";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Project from "./Project";
import Register from "./authorization/Register";
import Login from "./authorization/Login";
import Basket from "./Basket/Basket";
import AdminPanel from "./Admin/AdminPanel";
import AllCatalogs from "./AllCatalogs/AllCatalogs";
import { verifyProfileHost } from "./utils/Hosts.js";
import axios from "axios";
import ProductCard from "./ProductCard/ProductCard";
import FeedBack from "./FeedBack/FeedBack";
import Profile from "./Profile/Profile";

function App() {

    const [ isMobile, setIsMobile ] = useState('');

    const [ currentUser, setCurrentUser ] = useState(null);

    useEffect(() => {

        const callBackFunc = async() => {
            try {
                if(localStorage.getItem("token")) {

                    const res = await axios.get(verifyProfileHost, {
                        params: { token: localStorage.getItem("token") }
                    });

                    if(res.data.status) {
                        setCurrentUser(res.data.user);
                    } else {
                        setCurrentUser('');
                    }

                } else {
                    setCurrentUser('');
                };
            } catch(err) {
                console.error(err);
            }
        };

        callBackFunc();
    }, []);

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
                        <Project isMobile={isMobile} currentUser={currentUser}/>
                    }/>
                    <Route path="/signIn" element={<Login />}/>
                    <Route path="/signUp" element={<Register />}/>
                    <Route path="/product/:productId" element={<ProductCard />}/>
                    <Route path="/catalogs" element={<AllCatalogs />}/>
                    <Route path="/feedback" element={<FeedBack isMobile={isMobile}/>}/>
                    <Route path="/profile" element={<Profile />}/>
                    <Route path="/basket" element={
                        <Basket isMobile={isMobile}/>
                    }/>
                    <Route
                            path="/admin_panel_is_blocked"
                            element={<AdminPanel />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
