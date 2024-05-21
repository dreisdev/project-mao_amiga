import axios from "axios";

const api = axios.create({
  baseURL: "https://maoamiga-api-mao-amiga-ce-e6e7069d.koyeb.app/",
});

export default api;
