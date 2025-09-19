'use client'

import { useSearchParams,  useRouter} from "next/navigation"
import { useEffect, useState } from "react"
import FilterDiv from "./FilterDiv"
import type { CountryType } from "@/interfaces/CountryType"
import CountryList from "./CountriesList"
import useSideBarStore from "@/Zustand/SideBarStore"

interface CountriesFilterWrapperProps {
 countries: CountryType[]
}

function CountriesFilterWrapper({countries}:CountriesFilterWrapperProps ){
const searchParams = useSearchParams()
const router = useRouter()
const {isOpen} =  useSideBarStore()

//Initialize filters from URL
const [searchValue, setSearchValue]= useState(searchParams.get('search') || '')
const [region, setRegion] = useState(searchParams.get('region') || 'All')
const [favorites, setFavorites] = useState(searchParams.get('favorites') === 'true')

//Setting filter queries into url if something changes in children.
useEffect(()=> {
  const params = new URLSearchParams()
  if(searchValue) params.set('search', searchValue)
  if(region) params.set('region', region)
  if(favorites) params.set('favorites', 'true')
  router.replace(params.toString() ? `?${params.toString()}` : '')
}, [searchValue, region, favorites])

//Filter logic
const filteredData = countries.filter((country:any)=>{
  if(searchValue && !country.name.common.toLowerCase().includes(searchValue.toLowerCase())) return false
  if(region && region !== 'All' && country.region !== region) return false
  if(favorites && !country.favorite) return false
  return true
})

  return(
  <>
   <FilterDiv searchValue={searchValue} onSearchChange={setSearchValue} region={region} onRegionChange={setRegion} favorites={favorites} onShowFavorites={setFavorites} />
   <CountryList countries={filteredData} sideBarOpen={isOpen}/>
  </>
   
  )
}

export default CountriesFilterWrapper