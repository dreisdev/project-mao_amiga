import axios from "axios";

const api = axios.create({
  baseURL: "https://maoamiga-api-v2.cyclic.app",
});

export default api;
