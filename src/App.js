import { useState, useEffect } from "react";
import "./App.css"
import { Route, Routes, useLocation } from "react-router-dom"
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
import TermsConditions from "./SecondaryMenuGroup/TermsConditions.js";
import AboutUs from "./SecondaryMenuGroup/AboutUs";
import PrivacyPolicy from "./SecondaryMenuGroup/PrivacyPolicy";
import MobileSearch from "./MobileSearch/MobileSearch";
import CatalogProductCard from "./CatalogProductCard/CatalogProductCard.js";

function App() {

    const location = useLocation();

    const [isMobile, setIsMobile] = useState('');
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const verify = async () => {
            try {
                const token = localStorage.getItem("token");
    
                if (!token) {
                    return setCurrentUser('');
                }
    
                const res = await axios.get(verifyProfileHost, {
                    params: { token }
                });
    
                setCurrentUser(res.data.status ? res.data.user : '');
    
            } catch (err) {
                console.error(err);
            }
        };
    
        verify();
    
    }, [location.pathname]);

    useEffect(() => {

        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
            if(window.innerWidth <= 768) {
                document.querySelector("body").classList.add("isMobile")
            } else {
                document.querySelector("body").classList.remove("isMobile")
            }
        };

        window.addEventListener('resize', checkMobile);
        checkMobile();

        return () => window.removeEventListener('resize', checkMobile);
    }, []);


    return (
        <>
            <Routes>
                <Route path="/" element={<Project isMobile={isMobile} currentUser={currentUser}/>} />
                <Route path="/signIn" element={<Login />} />
                <Route path="/signUp" element={<Register />} />
                <Route path="/search" element={<MobileSearch />} />
                <Route path="/product/:productId" element={<ProductCard />} />
                <Route path="/catalog/:catalogId" element={<CatalogProductCard />} />
                <Route path="/catalogs/:type" element={<AllCatalogs isMobile={isMobile} currentUser={currentUser}/>} />
                <Route path="/feedback" element={<FeedBack isMobile={isMobile} currentUser={currentUser} />} />
                <Route path="/profile/:page" element={<Profile isMobile={isMobile} currentUser={currentUser} />} />
                <Route path="/basket" element={<Basket isMobile={isMobile} currentUser={currentUser} />} />
                <Route path="/qjiweqwe234u9190uw9euqjwk;AOKSU3294010EQW____EWQ27EE9JQW9QW98123_2190U3U91U29JA9ISJ9auah8eq17q" element={<AdminPanel />} />
                <Route path="/about-us" element={<AboutUs isMobile={isMobile}/>} />
                <Route path="/terms-and-conditions" element={<TermsConditions />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
        </>
    );
}

export default App;
