import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001"
});

export const setToken = token => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const login = loginData => instance.post("/login", loginData);
export const getBoard = () => instance.get("/boards");
