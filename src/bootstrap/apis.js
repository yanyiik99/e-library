import axios from "axios";


const api = axios.create({
    baseURL: 'https://kawahedukasibackend.herokuapp.com/',
    timeout: 10000,

});

export const loginApi = (payload) => {
    return api.post('./login', payload);
};

// // Create Content
// const apiCreate = axios.create({
//     baseURL: api,
//     timeout: 5000,
//     headers: localStorage.getItem("token")
// });

// export const createApi = ({ payload }) => {
//     return apiCreate.post("./content/create", payload)
// }


// // GETDATA
// const apiGet = axios.create({
//     baseURL: api,
//     timeout: 5000,
//     params: localStorage.getItem("username")
// });

// export const getAPi = () => {
//     return apiGet.get('./content/data/');
// }
