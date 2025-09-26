export interface CountryType {
  name: CountryName
  region: string;
  population: number;
  capital?: string[];
  flags?: Flags;

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