import { useEffect, useState } from 'react';
import { CountryBasic } from '../interfaces/countryBasic';
import { ResponseAll } from '../interfaces/responseAll';

export const useCountry = async () => {

    const [isloading, setIsloading] = useState<boolean>(true);
    const [countryList, setCountryList] = useState<CountryBasic[]>([]);

    const loadCountrys = async () => {
    

    }


    useEffect(() => {
        loadCountrys();
    }, [])


}

