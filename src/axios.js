import axios from "axios";

export default axios.create({
    baseURL: 'https://dabackend.onrender.com/api'
});