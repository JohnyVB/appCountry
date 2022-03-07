import axios from "axios";
import { ResponseAll } from '../interfaces/responseAll';
import { CountryBasic } from '../interfaces/countryBasic';

const ApiCountry = axios.create({baseURL: 'https://restcountries.com/v3.1'});


const getAll = async () => {
    const resp = await ApiCountry.get<ResponseAll[]>('/all');
    return resp.data;
}

export {
    getAll
}
