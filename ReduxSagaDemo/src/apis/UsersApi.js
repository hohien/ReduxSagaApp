
import axios from 'axios';

export const getUsersApi = () => axios.get("https://randomuser.me/api/?results=20")
        .then(response => response.data.results)
        .catch(err => {
            throw err;
      });