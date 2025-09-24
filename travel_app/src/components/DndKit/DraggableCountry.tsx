'use client'
import { CountryType } from '@/interfaces/CountryType'
import { useDraggable } from '@dnd-kit/core'
import React, { useEffect } from 'react'
import SingleCountry from '../countries/SingleCountryCard'

interface DraggablecountryProps{
  country:CountryType,
 
}
function DraggableCountry({country}:DraggablecountryProps){
  const {setNodeRef,listeners,attributes, transform, isDragging}= useDraggable({
    id:country.name.common,
    data:country
})

console.log('Draggable ID:', country.name.common)
console.log('Draggable data:', country)

 const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    cursor: isDragging ? 'grabbing' : 'grab',
    zIndex: isDragging ? 1000 : 1,
    position: 'relative' as const,
  }
  

  




  return (
    <div ref={setNodeRef} style={{...style,  pointerEvents: 'auto', overflow:'visible'}}  {...listeners} {...attributes} >
      <SingleCountry country={country} />
    </div>
   
  )
}

export default DraggableCountry