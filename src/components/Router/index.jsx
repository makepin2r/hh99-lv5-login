import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup"
import Home from "../pages/Home";

/** 라우팅 컴포넌트 */
const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Signup/>} />
            </Routes>
        </div>
    );
};

export default Router;
