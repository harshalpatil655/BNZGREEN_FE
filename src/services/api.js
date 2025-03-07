import axios from "axios";

//this is the endpoint that i have deployed on render
const API_URL = "https://bnzgreen-be.onrender.com/api";

const api = {
  calculateFootprint: async (data) => {
    try {
      const response = await axios.post(`${API_URL}/calculate`, data);
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  },
};

export default api;
