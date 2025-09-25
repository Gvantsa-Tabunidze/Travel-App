'use client'
import React, { useState } from 'react'
import Sidebar from '../sideBar/SideBar'
import CountriesFilterWrapper from '../countries/CountriesFilterWrapper'
import { CountryType } from '@/interfaces/CountryType'
import {DndContext, DragEndEvent, DragOverlay, DragStartEvent, PointerSensor, useDraggable, useSensor, useSensors} from '@dnd-kit/core';
import useSideBarStore from '../../Zustand/SideBarStore'
import SingleCountry from '../countries/SingleCountryCard'


interface CountrySidebarWrapperProps {
  countries: CountryType[]
}

const CountrySidebarWrapper = ({countries}:CountrySidebarWrapperProps) => {
  const addItem = useSideBarStore((state) => state.addItem)
  const items = useSideBarStore((state)=>state.items)
  const [activeCountry, setActiveCountry] = useState<CountryType | null>(null)

  // Configure sensors for better drag detection
  const sensors = useSensors(useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // 8px movement required to start drag
      },
    })
  )

  const handleDragStart = (event:DragStartEvent)=> {
    
    const {active}=event
    //Find the country being dragged
    const draggedCountry = countries.find(c=>c.name.common === active.id)
    if(draggedCountry){
      setActiveCountry(draggedCountry)
    }
  }
 
  const handleDragEnd = (event:DragEndEvent)=>{
    const {active,over}= event

    if(over && over.id === 'sideBar' && active.data.current){
      addItem(active.data.current as CountryType) 
    }
    // Reset active country
    setActiveCountry(null)
  }
  


  return (
    
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd} sensors={sensors}>
        
          <Sidebar/>
          <CountriesFilterWrapper countries={countries}/>
            <DragOverlay dropAnimation={{
              duration:500,
              easing:'cubic-bezier(0.18, 0.67, 0.6, 1.22)'
            }}>
              {activeCountry ? (
                <div style={{ 
              transform: 'rotate(10deg)', 
              boxShadow: '0 10px 20px rgba(0,0,0,0.8)'
            }}>
                  <SingleCountry country={activeCountry}  />
                </div>
              ) : null}
            </DragOverlay>
      </DndContext>
    
  )
}

export default CountrySidebarWrapper

