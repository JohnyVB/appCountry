// Generated by https://quicktype.io

export interface ResponseAll {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    cioc?:        string;
    independent?: boolean;
    status:       Status;
    unMember:     boolean;
    currencies?:  Currencies;
    idd:          Idd;
    capital?:     string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages?:   { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    borders?:     string[];
    area:         number;
    demonyms?:    Demonyms;
    flag?:        string;
    maps:         Maps;
    population:   number;
    gini?:        { [key: string]: number };
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   Continent[];
    flags:        CoatOfArms;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side:   Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    EUR?: TartuGecko;
    NZD?: TartuGecko;
    CUC?: TartuGecko;
    CUP?: TartuGecko;
    VES?: TartuGecko;
    USD?: TartuGecko;
    WST?: TartuGecko;
    KHR?: TartuGecko;
    HKD?: TartuGecko;
    MRU?: TartuGecko;
    YER?: TartuGecko;
    DJF?: TartuGecko;
    EGP?: TartuGecko;
    HRK?: TartuGecko;
    CHF?: TartuGecko;
    KZT?: TartuGecko;
    DKK?: TartuGecko;
    XOF?: TartuGecko;
    BMD?: TartuGecko;
    SHP?: TartuGecko;
    ZAR?: TartuGecko;
    RWF?: TartuGecko;
    MOP?: TartuGecko;
    BIF?: TartuGecko;
    UAH?: TartuGecko;
    TWD?: TartuGecko;
    CKD?: TartuGecko;
    ANG?: TartuGecko;
    ISK?: TartuGecko;
    PYG?: TartuGecko;
    SZL?: TartuGecko;
    HUF?: TartuGecko;
    MDL?: TartuGecko;
    CLP?: TartuGecko;
    AUD?: TartuGecko;
    UYU?: TartuGecko;
    LKR?: TartuGecko;
    GTQ?: TartuGecko;
    GHS?: TartuGecko;
    ILS?: TartuGecko;
    MZN?: TartuGecko;
    BTN?: TartuGecko;
    INR?: TartuGecko;
    KYD?: TartuGecko;
    KPW?: TartuGecko;
    BHD?: TartuGecko;
    FOK?: TartuGecko;
    AWG?: TartuGecko;
    IQD?: TartuGecko;
    MAD?: TartuGecko;
    MKD?: TartuGecko;
    PLN?: TartuGecko;
    SBD?: TartuGecko;
    BRL?: TartuGecko;
    OMR?: TartuGecko;
    THB?: TartuGecko;
    XAF?: TartuGecko;
    AMD?: TartuGecko;
    HNL?: TartuGecko;
    ZMW?: TartuGecko;
    NOK?: TartuGecko;
    COP?: TartuGecko;
    BBD?: TartuGecko;
    LYD?: TartuGecko;
    RSD?: TartuGecko;
    SEK?: TartuGecko;
    AOA?: TartuGecko;
    PAB?: TartuGecko;
    MUR?: TartuGecko;
    TZS?: TartuGecko;
    GEL?: TartuGecko;
    GMD?: TartuGecko;
    ZWL?: TartuGecko;
    BZD?: TartuGecko;
    XCD?: TartuGecko;
    BYN?: TartuGecko;
    CAD?: TartuGecko;
    ARS?: TartuGecko;
    SRD?: TartuGecko;
    GNF?: TartuGecko;
    SSP?: TartuGecko;
    NAD?: TartuGecko;
    QAR?: TartuGecko;
    MMK?: TartuGecko;
    FKP?: TartuGecko;
    STN?: TartuGecko;
    CDF?: TartuGecko;
    PHP?: TartuGecko;
    BND?: TartuGecko;
    SGD?: TartuGecko;
    SLL?: TartuGecko;
    MNT?: TartuGecko;
    DZD?: TartuGecko;
    SDG?: BAM;
    ETB?: TartuGecko;
    BAM?: BAM;
    KMF?: TartuGecko;
    KWD?: TartuGecko;
    XPF?: TartuGecko;
    BDT?: TartuGecko;
    JMD?: TartuGecko;
    GIP?: TartuGecko;
    MYR?: TartuGecko;
    GBP?: TartuGecko;
    MGA?: TartuGecko;
    TVD?: TartuGecko;
    RUB?: TartuGecko;
    VND?: TartuGecko;
    NPR?: TartuGecko;
    KID?: TartuGecko;
    LRD?: TartuGecko;
    SOS?: TartuGecko;
    RON?: TartuGecko;
    TND?: TartuGecko;
    AZN?: TartuGecko;
    PGK?: TartuGecko;
    LSL?: TartuGecko;
    BSD?: TartuGecko;
    CNY?: TartuGecko;
    AED?: TartuGecko;
    TMT?: TartuGecko;
    LAK?: TartuGecko;
    JOD?: TartuGecko;
    SCR?: TartuGecko;
    UZS?: TartuGecko;
    NIO?: TartuGecko;
    KES?: TartuGecko;
    JEP?: TartuGecko;
    CZK?: TartuGecko;
    UGX?: TartuGecko;
    CRC?: TartuGecko;
    MXN?: TartuGecko;
    ERN?: TartuGecko;
    JPY?: TartuGecko;
    VUV?: TartuGecko;
    BWP?: TartuGecko;
    TOP?: TartuGecko;
    FJD?: TartuGecko;
    ALL?: TartuGecko;
    PEN?: TartuGecko;
    IDR?: TartuGecko;
    GGP?: TartuGecko;
    KGS?: TartuGecko;
    BOB?: TartuGecko;
    DOP?: TartuGecko;
    LBP?: TartuGecko;
    MVR?: TartuGecko;
    KRW?: TartuGecko;
    SYP?: TartuGecko;
    AFN?: TartuGecko;
    MWK?: TartuGecko;
    TJS?: TartuGecko;
    TRY?: TartuGecko;
    NGN?: TartuGecko;
    PKR?: TartuGecko;
    IRR?: TartuGecko;
    CVE?: TartuGecko;
    BGN?: TartuGecko;
    HTG?: TartuGecko;
    IMP?: TartuGecko;
    GYD?: TartuGecko;
    SAR?: TartuGecko;
    TTD?: TartuGecko;
}

export interface TartuGecko {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Idd {
    root?:     string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:      string;
    official:    string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Sunday = "sunday",
    Turday = "turday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}