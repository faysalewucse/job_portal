const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AUTH_API_URL = `/auth`;
const USERS_API_URL = `/users`;

const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${AUTH_API_URL}/login`,
    REGISTER: `${AUTH_API_URL}/register`,
    PROFILE: `${AUTH_API_URL}/profile`,
  },
  USER: {
    PROFILE: `${USERS_API_URL}/profile`,
    UPDATE_PROFILE: `${USERS_API_URL}/profile/update`,
    CHANGE_PASSWORD: `${USERS_API_URL}/profile/change-password`,
  },
  JOBS: `${BASE_URL}/jobs`,
};

export default API_ENDPOINTS;
