import axios from "axios";

const $axios = axios.create({
    baseURL: 'https://restcountries.com/'
})
export default $axios