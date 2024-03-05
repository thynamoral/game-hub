import axios, { CanceledError, AxiosError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a240b3088b574ef4bf392b20d1f98fdd",
  },
  withCredentials: false,
});

export { CanceledError, AxiosError };
