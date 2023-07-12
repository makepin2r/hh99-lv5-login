import React, { useState } from "react";
import { Link } from "react-router-dom";
import client from "../../../modules/client";
import {
    StInput,
    Wrapper,
    StHeader,
    StBtnPrimary,
    StBtnSecondary,
    StLabel,
    StPadding,
    StInputBox,
} from "../../../styles/styled";

function Signup() {
    const [input, SetInput] = useState({
        id: "",
        pw: "",
    });

    /** input state 처리 함수 */
    const handleInput = (e) => {
        SetInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    /** 회원 가입 페이지 컴포넌트 */
    const register = async () => {
        try {
            const res = await client.post(`/register`, {
                id: input.id,
                password: input.pw,
            });
            console.log(res.data);
        } catch (error) {
            window.alert(`Error: ${error.response.data.message}`);
        }
    };

    return (
        <Wrapper>
            <StHeader>회원가입</StHeader>
            <StInputBox>
                <StLabel>ID </StLabel>
                <StInput
                    value={input.id}
                    name="id"
                    onChange={handleInput}
                    type="text"
                    placeholder="ID를 입력해주세요..."
                />
            </StInputBox>
            <StInputBox>
                <StLabel>PW </StLabel>
                <StInput
                    value={input.pw}
                    name="pw"
                    onChange={handleInput}
                    type="password"
                    placeholder="비밀번호를 입력해주세요..."
                />
            </StInputBox>
            <StPadding />
            <StBtnPrimary onClick={register}>회원가입!</StBtnPrimary>
            <Link to="/login">
                <StBtnSecondary>로그인하러 가기</StBtnSecondary>
            </Link>
        </Wrapper>
    );
}

export default Signup;
