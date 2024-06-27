import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const FetchService = {
  getEmployees: async (payload) => {
    try {
      const response = await axios.post(`${API_URL}/search/`, payload);
      return response.data;
    } catch (error) {
      console.error("Error fetching employee data:", error);
      throw error;
    }
  },

  getOptions: async () => {
    try {
      const response = await axios.get(`${API_URL}/search/options`);
      return response.data;
    } catch (error) {
      console.error("Error fetching options data:", error);
      throw error;
    }
  },
};

export default FetchService;
