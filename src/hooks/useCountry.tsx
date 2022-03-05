import { useEffect, useState } from 'react';
import ApiCountry from '../api/apiCountry';
import { CountryBasic } from '../interfaces/countryBasic';
import { ResponseAll } from '../interfaces/responseAll';

export const useCountry = async () => {

    const [isloading, setIsloading] = useState<boolean>(true);
    const [countryList, setCountryList] = useState<CountryBasic[]>([]);

    const loadCountrys = async () => {
        setIsloading(true);
        const resp = await ApiCountry.get<ResponseAll>('/all');
        // console.log('RESP: ', resp.data);
        mapCountryList([resp.data]);

    }

    const mapCountryList = (country: ResponseAll[]) => {
        const newCountryList: CountryBasic[] = country.map(({name, population, region, capital}) => {
            return {name, population, region, capital}
        });

        console.log('newCountryList: ', newCountryList);
        
    }

    useEffect(() => {
        loadCountrys();
    }, [])


}

