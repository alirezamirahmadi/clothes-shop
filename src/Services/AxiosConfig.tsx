import axios from "axios";

const apiRequests = axios.create({
  baseURL:'http://localhost:2200/',
})

export default apiRequests;