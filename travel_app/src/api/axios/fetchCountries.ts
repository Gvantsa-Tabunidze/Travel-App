import { CountryType } from "@/interfaces/CountryType"
import $axios from "./axiosGet"

const fetchCountries = async() : Promise<CountryType[]>=> {
 const countryResult = await $axios.get('v3.1/all?fields=name,flags,continents,capital,population,area,currencies,languages,region')
 return countryResult.data
}

export default fetchCountries