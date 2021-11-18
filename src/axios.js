import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
// https://api.themoviedb.org/3/trending/all/week?api_key=cd68918de3926675387f6fc8f563cfb2&language =en-US