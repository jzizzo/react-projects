import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 4948e8e5a53e73a0aecce10171ef5f2ae0f5c2f7f220ed766687705ef6f2b6a1'
  }
});
