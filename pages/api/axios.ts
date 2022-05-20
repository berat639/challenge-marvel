import axios from "axios";

const MAIN_URL = 'http://gateway.marvel.com/v1/public/';
const PUBLIC_KEY = 'd74990f1899dcb8192a4a9efcf89a16d';
const HASH = '7cbb8e530f70d1d5172a6c123ab91d00'; 

export default axios.create({
    baseURL: MAIN_URL,
    params: {
        apikey: PUBLIC_KEY,
        hash: HASH,
        ts: 1
    }
});