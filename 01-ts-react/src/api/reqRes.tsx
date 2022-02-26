import axios from "axios";

export const reqRestApi = axios.create({
    baseURL: 'https://reqres.in/api'
});

