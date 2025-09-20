'use client'
import React from 'react'
import Sidebar from '../sideBar/SideBar'
import CountriesFilterWrapper from '../countries/CountriesFilterWrapper'
import { CountryType } from '@/interfaces/CountryType'
import {DndContext, DragEndEvent} from '@dnd-kit/core';
import addItem from '../../Zustand/SideBarStore'


interface CountrySidebarWrapperProps {
  countries: CountryType[]
}

const CountrySidebarWrapper = ({countries}:CountrySidebarWrapperProps) => {
 
  const handleDragEnd = (event:DragEndEvent)=>{
    const {active,over}= event
    if(over&&over.id==='sideBar'){
      if(active.data.current){
        addItem(active.data.current)
      }
    }
  }
  return (
    <div>
      <DndContext onDragEnd={handleDragEnd}>
          <Sidebar/>
          <CountriesFilterWrapper countries={countries}/>
      </DndContext>
    </div>
  )
}

export default CountrySidebarWrapper
