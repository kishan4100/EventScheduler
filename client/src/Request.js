import axios from "axios";

const baseURL = "http://localhost:5000/Events";

export const requestEvents = () => axios.get(baseURL);
