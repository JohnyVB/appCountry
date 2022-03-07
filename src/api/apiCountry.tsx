import axios from "axios";
import { ResponseAll } from '../interfaces/responseAll';
import { CountryBasic } from '../interfaces/countryBasic';

const ApiCountry = axios.create({baseURL: 'https://restcountries.com/v3.1'});


const getAll = async () => {
    const resp = await ApiCountry.get<ResponseAll[]>('/all');

    const newList: CountryBasic[] = resp.data.map(({name, population, region, capital, flags}) => {
        return {name, population, region, capital, flags}
    });
    
    return newList;
}

export {
    getAll
}
