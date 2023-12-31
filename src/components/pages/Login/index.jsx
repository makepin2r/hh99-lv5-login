import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../../../modules/cookie";
import client from "../../../modules/client";
import { StInput, Wrapper, StHeader, StBtnPrimary, StBtnSecondary, StLabel, StPadding, StInputBox } from "../../../styles/styled";

/** 로그인 페이지 컴포넌트 */
const Login = () => {
    const [input, SetInput] = useState({
        id: "",
        pw: "",
    });

    const navigate = useNavigate();

    /** id, pw 정보를 서버에 전송하여 토큰 반환받는 함수 */
    const login = async () => {
        try {
            const res = await client.post(`/login`, {
                id: input.id,
                password: input.pw,
            });
            console.log(res.data);
            // 아이디값과 토큰 저장
            const jwt = res.data.token;
            setCookie(`loginToken`, jwt);
            navigate("/");
        } catch (error) {
            window.alert(`Error: ${error.response.data.message}`); // 에러 메시지 팝업
            SetInput({ id: "", pw: "" }); // 인풋 초기화
        }
    };

    /** 로그인 버튼 클릭시 함수 */
    const handleSubmit = (e) => {
        if (input.id === "" || input.pw === "") {
            // id 또는 password 둘 중 하나를 입력하지 않았을 때
            window.alert("아이디와 비밀번호를 모두 입력해주세요.");
        } else {
            e.preventDefault();
            login();
        }
    };

    /** input state 처리 함수 */
    const handleInput = (e) => {
        SetInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Wrapper>
            {!getCookie("loginToken") && <Navigate to="/login" />}
            <StHeader>Login</StHeader>
            <form onSubmit={handleSubmit}>
                <StInputBox>
                    <StLabel>ID </StLabel>{" "}
                    <StInput
                        value={input.id}
                        name="id"
                        onChange={handleInput}
                        type="text"
                        placeholder="ID를 입력해주세요..."
                    />
                </StInputBox>
                <StInputBox>
                    <StLabel>PW </StLabel>{" "}
                    <StInput
                        value={input.pw}
                        name="pw"
                        onChange={handleInput}
                        type="password"
                        placeholder="비밀번호를 입력해주세요..."
                    />
                </StInputBox>
                <StPadding />
                <StBtnPrimary type="submit">Login!</StBtnPrimary>
            </form>
            <Link to="/register">
                <StBtnSecondary>회원가입 이동</StBtnSecondary>
            </Link>
        </Wrapper>
    );
};

export default Login;
