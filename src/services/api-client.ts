import axios, { CanceledError, AxiosError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "79de5134b913471c9307333be6c0b114",
  },
  withCredentials: false,
});

export { CanceledError, AxiosError };
