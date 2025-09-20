import Header from '@/components/Header';
import fetchCountries from '@/api/axios/fetchCountries';
import CountrySidebarWrapper from '@/components/DndKit/CountrySidebarWrapper';





async function CountriesPage () {
  const result = await fetchCountries()

  return (
    <div style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'stretch'}}>
      <Header />
      <CountrySidebarWrapper countries={result} />
   
      
      
    </div>
  )
}

export default CountriesPage
