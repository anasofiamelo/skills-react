import axios from "axios";

const API = axios.create({
  baseURL: "https://connect-user-with-skills-api.herokuapp.com",
});

export default API;
