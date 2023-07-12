import { Cookies } from "react-cookie";

const cookies = new Cookies();

/** 쿠키값 저장 */
export const setCookie = (name, token) => {
    return cookies.set(name, token);
};

/** 쿠키값 가져오기 */
export const getCookie = (name) => {
    return cookies.get(name);
};

/** 쿠키값 지우기 */
export const removeCookie = (name) => {
    return cookies.remove(name);
};

/** 쿠키에 저장된 로그인 토큰값 반환, 로그인 여부 확인용 */
export const getAuth = getCookie("loginToken");
