'use client'
import { CountryType } from '@/interfaces/CountryType'
import { useDraggable } from '@dnd-kit/core'
import React from 'react'
import SingleCountry from '../countries/SingleCountryCard'

interface DraggablecountryProps{
    country:CountryType,
    onClick:()=>void
}
function DraggableCountry({country,onClick}:DraggablecountryProps){
  const {setNodeRef,listeners,attributes, transform}= useDraggable({
    id:country.cca3,
    data:country
})

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    cursor: 'grab',
  };


  return (
    <SingleCountry ref={setNodeRef}  {...listeners} {...attributes} country={country} onClick={onClick} style={style}/>
  )
}

export default DraggableCountry