import React, { useState } from "react";
import { Link } from "react-router-dom";
import client from "../../../modules/client";

function Signup() {
    const [input, SetInput] = useState({
        id: "",
        pw: "",
    });

    /** input state 처리 함수 */
    const handleInput = (e) => {
        SetInput({
        ...input,
        [e.target.name]: e.target.value
        });
    }

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
        <>
            <h3>회원가입</h3>
                <p>
                    <span>ID </span>
                    <input
                        value={input.id}
                        name="id"
                        onChange={handleInput}
                        type="text"
                        placeholder="ID를 입력해주세요..."
                    />
                </p>
                <p>
                    <span>PW </span>
                    <input
                        value={input.pw}
                        name="pw"
                        onChange={handleInput}
                        type="password"
                        placeholder="비밀번호를 입력해주세요..."
                    />
                </p>
                <button onClick={register}>회원가입!</button>
                <button><Link to="/login">로그인하러 가기</Link></button>
        </>
    );
}

export default Signup;
