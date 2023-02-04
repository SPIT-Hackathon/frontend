import axios from "axios";

const SERVER_BASE_URL = "";

const LOCAL_SERVER_URL = "http://127.0.0.1:5000/";

const COLAB_SERVER_URL = "http://cc83-35-234-166-153.ngrok.io/";

const axiosClient = axios.create({
  baseURL: COLAB_SERVER_URL,
});

export default axiosClient;
