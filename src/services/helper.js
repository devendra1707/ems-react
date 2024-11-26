import axios from "axios";

export const BASE_URL = "http://localhost:8082/";

export const myAxios = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  