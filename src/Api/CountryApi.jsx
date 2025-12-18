  import axios from 'axios';

  const api = axios.create({
    baseURL: 'https://restcountries.com/v3.1/',
  });

  export default api;

  export const Getdata = () => {
  return api.get("https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region");

  };

export const Sindel_data = (id) => {
  return api.get(
    `name/${id}?fullText=true&fields=name,flags,population,capital,languages,region,subregion,currencies`
  );
};

