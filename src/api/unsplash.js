import axios from 'axios';

export default axios.create({

  headers: {
    baseURL: "https://api.unsplash.com/search/photos",
    Authorization: 
      "Client-ID l4D33DqflritYDKBQa9nZFHclt_psphjCq_8_fPyaDs"
  }
});