import axios from "axios";

//https://server-maoamiga-api.cyclic.app
//http://localhost:3000

const api = axios.create({
  baseURL: "https://server-maoamiga-api.cyclic.app",
});

export default api;
