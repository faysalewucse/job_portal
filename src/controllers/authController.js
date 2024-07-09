import AuthService from "../services/AuthService";

export const getProfile = async (token) => {
  try {
    const response = await AuthService.getProfile(token);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
