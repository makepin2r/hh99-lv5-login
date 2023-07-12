import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getCookie, removeCookie } from "../../../modules/cookie";

/** 로그인 화면 컴포넌트 */
const Home = () => {
    const navigate = useNavigate();
    /** 로그아웃 함수 */
    const logout = () => {
      removeCookie('loginToken');
      navigate("/login");
    }

    return (
        <>
            {!getCookie('loginToken') && <Navigate to="/login" />}
            <h3>Home</h3>
            <button onClick={logout}>로그아웃</button>
        </>
    );
};

export default Home;
