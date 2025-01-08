import { telegramApi } from "./api";

const baseTelegramUrl = "https://api.telegram.org/bot7615674803:AAE2Tv7xJM8uiQv1DP2giaVJFbSDw86FS5E/";

export const sendMessage = async (message) => {
  const url = `${baseTelegramUrl}sendMessage?chat_id=-4646842756&text=${message}`;
  const response = telegramApi.telegram(url);
  if(response.ok){
    const error = await response.json();
    await Promise.reject(error.description || "Something went wrong...")
  }
};  
