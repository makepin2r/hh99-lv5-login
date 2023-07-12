import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getCookie, removeCookie } from "../../../modules/cookie";
import { Wrapper, StHeader, StBtnPrimary } from "../../../styles/styled";

/** 로그인 화면 컴포넌트 */
const Home = () => {
    const navigate = useNavigate();
    /** 로그아웃 함수 */
    const logout = () => {
        removeCookie("loginToken");
        navigate("/login");
    };

    return (
        <Wrapper>
            {!getCookie("loginToken") && <Navigate to="/login" />}
            <StHeader>Home</StHeader>
            <StBtnPrimary onClick={logout}>로그아웃</StBtnPrimary>
        </Wrapper>
    );
};

export default Home;
