import axios from "axios";

const instance = axios.create({
  baseURL: "https://alexsandrzolotarev.github.io/api/encrypted.json",
});


export const carsApi  = {
  async getCars(){
    return instance.get().then((response) => {
      return response.data.models;
   });
  },
  
}
