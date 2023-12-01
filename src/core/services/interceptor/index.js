import axios from "axios";
import { clearStorage, getItem, removeItem } from "../local-storage/storage.services";

const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: baseURL,
});
const onSuccess = (response) => {
  return response.data;
};

const onError = (err) => {
    if (err.response.status === 401) {
        removeItem('token');
        window.location.pathname='/authorize/login';
    }
  if (err.response.status >= 404 && err.response.status < 500) {
    alert("Client Error: " + err.response.status);
  }

  return Promise.reject(err);
};

instance.interceptors.response.use(onSuccess, onError);
instance.interceptors.request.use((opt) => {
  const token = getItem("token");
  if(token) opt.headers.Authorization = "Bearer " + token;
  return opt;
});
export default instance;
