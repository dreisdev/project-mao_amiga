import axios from "axios";

const api = axios.create({
  baseURL: "https://server-maoamiga-api.cyclic.app",
});

export default api;
