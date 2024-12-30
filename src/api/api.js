import axios from "axios";

const instanceUser = axios.create({
  withCredentials: true,
  baseURL: "https://ilyxxxa-server.ru/api/v1/users/",
});

export const carsApi = {
  async getCars() {
    return axios.get("https://alexsandrzolotarev.github.io/api/encrypted.json")
    .then((response) => {
      return response.data.models;
    })
    .catch(error => {
      return {};
    })
  },
};
export const usersApi = {
  async registrationUser(userData) {
    return instanceUser
      .post("/registration",userData)
      .then((response) => {
        return response.data;
      })
      .catch(error => {
        console.error(error);
        return {};
      })
  },
  async getUser(userId) {
    return instanceUser
      .get(`${userId}`)
      .then((response) => {
        return response.data;
      })
      .catch(() => {
        return "No name";
      })
  },
};
