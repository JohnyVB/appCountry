import axios from "axios";

export const ApiCountry = axios.create({baseURL: 'https://restcountries.com/v3.1'});

export const Regions: string[] = ['Asia', 'Africa', 'Americas', 'Atarctic', 'Europe', 'Oceania'];

