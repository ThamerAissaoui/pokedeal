const PROXY = "https://corsproxy.io/?"; // or another CORS proxy
const BASE_URL = "https://api-dev.pokeadeal.com/api";

export const registerProfessional = async (data) => {
  return axios.post(`${PROXY}${BASE_URL}/Authenticate/register-professional`, data);
};

export const loginProfessional = async (data) => {
  return axios.post(`${PROXY}${BASE_URL}/Authenticate/login-professional`, data);
};

export const forgotPassword = async (email) => {
  return axios.post(`${PROXY}${BASE_URL}/Authenticate/forgot-password-professional`, { email });
};
