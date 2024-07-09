import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Default base URL
  timeout: 30000, // Request timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add auth token to headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Replace with your token management logic
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Handle common HTTP errors here
      if (error.response.status === 401) {
        // Redirect to login or refresh token
      } else if (error.response.status === 403) {
        // Show forbidden message
      } else if (error.response.status === 500) {
        // Show server error message
      }
    }
    return Promise.reject(error);
  }
);

export default api;
