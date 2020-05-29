import axios from 'axios';

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: 
      "Client-ID l4D33DqflritYDKBQa9nZFHclt_psphjCq_8_fPyaDs"
  }
});