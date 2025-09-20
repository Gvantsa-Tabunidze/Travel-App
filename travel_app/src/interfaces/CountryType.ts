export interface CountryType {
  name: CountryName
  region: string;
  population: number;
  capital?: string[];
  flags?: Flags;
  favorite?: boolean; 
   cca3: string
}

export interface CountryName{
  common:string,
  official:string
}

export interface Flags {
  png:string,
  svg:string,
  alt?:string
}