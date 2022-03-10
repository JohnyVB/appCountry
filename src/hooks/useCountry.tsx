import { useEffect, useState } from 'react';
import { ApiCountry } from '../api/apiCountry';
import { CountryBasic } from '../interfaces/countryBasic';
import { ResponseAll } from '../interfaces/responseAll';

export const useCountry = () => {

    const [isLoading, setIsloading] = useState<boolean>(true);
    const [countryList, setCountryList] = useState<CountryBasic[]>([]);

    const loadCountries = async () => {
        setIsloading(true);
        const resp = await ApiCountry.get<ResponseAll[]>('/all');
        mapListCountry(resp.data);
    }

    const mapListCountry = (ListCountry: ResponseAll[]) => {
        const newList: CountryBasic[] = ListCountry.map(({name, population, region, capital, flags}) => {
            return {name, population, region, capital, flags}
        });

        setCountryList(newList);
        setIsloading(false);
    }

    useEffect(() => {
        loadCountries();
    }, []);

    return {
        loadCountries,
        isLoading,
        countryList
    }

}

