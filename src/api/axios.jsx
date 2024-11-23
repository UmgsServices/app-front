import axios from 'axios'

//const BASE_URL='http://localhost:5000'
const BASE_URL='https://car-back-s4as.onrender.com'
export default axios.create({
    baseURL:BASE_URL,
    headers:{'Content-Type':'application/json'},
    withCredentials:true
})
const axiosPrivate =axios.create({
    baseURL:BASE_URL,
    headers:{'Content-Type':'application/json'},
    withCredentials:true
})

export {axiosPrivate}