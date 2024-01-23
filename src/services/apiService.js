import axios from "axios";

class ApiService {
  
    async getUser(name) {
        try {
          const response = await axios.get(`https://swapi.dev/api/people/?search=${name}`);
            return response.data.results;
        } catch (error) {
          if (error.response && error.response.status === 404) {
             console.log(error);
          }
        }
      }
}

export default ApiService;