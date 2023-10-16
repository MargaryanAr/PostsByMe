import axios from "axios";

const myAxios = axios.create({
  baseURL: "http://localhost:3030/",
});

export default myAxios;
