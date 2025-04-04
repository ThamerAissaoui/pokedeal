import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "/api" // use proxy in development
    : "https://api-dev.pokeadeal.com/api"; // full URL in production

export const registerProfessional = async (data) => {
  return axios.post(`${BASE_URL}/Authenticate/register-professional`, data);
};

export const loginConsumer = async (data) => {
  return axios.post(`${BASE_URL}/Authenticate/login-professional`, data);
};

export const forgotPassword = async (email) => {
  return axios.post(`${BASE_URL}/Authenticate/forgot-password-professional`, { email });
};
