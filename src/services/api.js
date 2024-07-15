import axios from "axios";

export default axios.create({
  baseURL: "https://gerenciadorm.netlify.app/",
  timeout: 10000,
  headers: { "Content-type": "application/json" },
});
