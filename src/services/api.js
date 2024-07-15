import axios from "axios";

export default axios.create({
  baseURL: "https://gerenciador-backend.vercel.app/",
  timeout: 10000,
  headers: { "Content-type": "application/json" },
});
