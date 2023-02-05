import axios from "axios";

const SERVER_BASE_URL =
  "https://j0sal-probable-trout-wx5x97wrxg39w7r-5000.preview.app.github.dev/";

const SERVER_BASE_URL2 =
  "https://hrishilamdade-laughing-space-train-6w4g95gv4xwfxv5v-5000.preview.app.github.dev/";

const LOCAL_SERVER_URL = "http://127.0.0.1:5000/";

const COLAB_SERVER_URL = "http://4fa7-35-194-69-118.ngrok.io/";

const axiosClient = axios.create({
  baseURL: SERVER_BASE_URL2,
});

export default axiosClient;
