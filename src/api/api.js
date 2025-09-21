import axios from "axios";
export const carsApi = {
  async getCars() {
    return axios.get("https://alexsandrzolotarev.github.io/RivoAgencyJSON.github.io/api/encrypted.json")
    .then((response) => {
      return response.data.models;
    })
    .catch(error => {
      return {};
    })
  },
};
export const telegramApi = {
  async telegram(url) {
    return axios
      .get(`${url}`)
      .then((response) => response)
  },
};