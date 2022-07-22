/* eslint-disable prettier/prettier */
import axios from "axios";
import Guard from "@/plugins/guard";

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

const updateToken = (config) =>
 new Promise((resolve, reject) => {
  Guard.updateToken(5)
   .then(() => {
    config.headers.common.Authorization = `Bearer ${Guard.token}`;
    resolve();
   })
   .catch((e) => {
    reject(e);
   });
 });

axios.interceptors.request.use(async (config) => {
 await updateToken(config);
 return config;
});

const getResponseBody = (res) => res.data;

const requester = {
 getFull: (url, params, config = {}) =>
  axios.get(url, { params, ...config }).then((res) => res),

 get: (url, params, config = {}) =>
  axios
   .get(url, {
    params,
    ...config,
   })
   .then(getResponseBody),

 post: (url, data, config = {}) =>
  axios.post(url, data, config).then(getResponseBody),

 patch: (url, data) => axios.patch(url, data).then(getResponseBody),

 put: (url, data) => axios.put(url, data).then(getResponseBody),

 delete: (url) => axios.delete(url).then(getResponseBody),
};

export default requester;
