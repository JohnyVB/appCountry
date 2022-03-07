import { CoatOfArms, Name, Region } from "./responseAll";

export interface CountryBasic {
    name: Name;
    population: number;
    region: Region;
    capital: string[] | undefined;
    flags: CoatOfArms
}