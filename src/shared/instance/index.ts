import axios from "axios";

const findCityInstance = axios.create({
  baseURL: "http://api.openweathermap.org/geo/1.0/direct",
  timeout: 1000,
});

findCityInstance.interceptors.request.use(
  (confing) => {
    confing.params = {
      appid: "031c9b6908d4ed557ff7622aaf5061d0",
      limit: 5,
      ...confing.params,
    };
    return confing;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { findCityInstance };
