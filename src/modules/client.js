import axios from "axios";

/** baseURL 설정 */
const client = axios.create({
    baseURL: `http://3.38.191.164`,
});

export default client;
