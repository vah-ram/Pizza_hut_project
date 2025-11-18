import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Project from "./Project";
import Register from "./authorization/Register";
import Login from "./authorization/Login";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Project />}/>
                    <Route path="/signIn" element={<Login />}/>
                    <Route path="/signUp" element={<Register />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
