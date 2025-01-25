import axios from "axios";


const instanceUser = axios.create({
  withCredentials: true,
  baseURL: "https://ilyxxxa-server.ru/api/v1/users/",
});

export const carsApi = {
  async getCars() {
    try {
      let response = await axios.get("https://alexsandrzolotarev.github.io/RivoAgencyJSON.github.io/api/encrypted.json");
      return response.data.models;
    }
    catch {
      return {}
    }
  },
};
export const usersApi = {
  async registrationUser(userData) {
    try {
      let response = await instanceUser.post("/registration",userData);
      return response.data;
    }
    catch {
      return {}
    }
  },
  async getUser(userId) {
    try {
      let response = await instanceUser.get(`${userId}`);
      return response.data;
    }
    catch {
      return "No name";
    }
  },
};
export const telegramApi = {
  async telegram(url) {
    let response = await axios.get(`${url}`);
    return response;
  },
};