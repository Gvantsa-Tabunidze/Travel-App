'use client'
import React from 'react'
import Sidebar from '../sideBar/SideBar'
import CountriesFilterWrapper from '../countries/CountriesFilterWrapper'
import { CountryType } from '@/interfaces/CountryType'


interface CountrySidebarWrapperProps {
  countries: CountryType[]
}

const CountrySidebarWrapper = ({countries}:CountrySidebarWrapperProps) => {
  return (
    <div>
        <Sidebar/>
        <CountriesFilterWrapper countries={countries}/>
    </div>
  )
}

export default CountrySidebarWrapper
