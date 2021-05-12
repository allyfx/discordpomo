import axios from "axios";

const baseURL = process.env.REACT_APP_DISCORD_API_URL;

export const api = axios.create({
  baseURL,
  responseType: 'json',
});
