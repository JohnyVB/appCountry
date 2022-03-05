import axios from "axios";

const ApiCountry = axios.create({baseURL: 'https://restcountries.com/v3.1'});
export default ApiCountry;
