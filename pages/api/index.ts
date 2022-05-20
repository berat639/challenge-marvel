import axios from "./axios";

class Api {
  getCharacters = async (params?: any) => {
    const { data } = await axios.get(`/characters?limit=30&`, { params });
    return data;
  }
  getCharacter = async (id: number, params?: any) => {
    const { data } = await axios.get(`/characters/${id}`, { params }); 
    return data;
  }
  getCharacterComicsDescDate = async (id: number,params?: any) => {  
    const { data } = await axios.get(`/comics?characters=${id}&orderBy=-onsaleDate&limit=10`,{ params });   
    return data;
  }
}

const api = new Api();
export default api;