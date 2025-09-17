import Header from '@/components/Header';
import fetchCountries from '@/api/axios/fetchCountries';
import CountriesFilterWrapper from '@/components/CountriesFilterWrapper';



async function CountriesPage () {
  const result = await fetchCountries()

  return (
    <div style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'stretch'}}>
      <Header />
      <CountriesFilterWrapper countries={result}/>
      
    </div>
  )
}

export default CountriesPage
