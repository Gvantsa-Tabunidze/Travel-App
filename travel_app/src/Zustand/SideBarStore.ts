import { CountryType } from '@/interfaces/CountryType'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Trip {
  id: number
  name: string
  countries: CountryType[]
  date: string
}

interface SideBarStoreInterface {
  isOpen: boolean
  toggle: () => void
  items: CountryType[]
  addItem: (country: CountryType) => void
  removeItem: (nameCommon: string) => void
  clearItems: () => void
  savedTrips: Trip[]
  saveTrip: (tripName: string) => void
  removeTrip: (id: number) => void,
  editTrip:(id:number)=>void,
  currentTripId:number | null,
  currentTripName:string
}

const useSideBarStore = create<SideBarStoreInterface>()(
  persist(
    (set, get) => ({
      //Sidebar open/close
      isOpen: false,
      toggle: () => set((state) => ({ isOpen: !state.isOpen })),


      //Items dropped
      items: [],
      addItem: (country) =>
        set((state) => ({
          items: state.items.some((c) => c.name.common === country.name.common)
            ? state.items
            : [...state.items, country],
        })),
      removeItem: (nameCommon) =>
        set((state) => ({
          items: state.items.filter((c) => c.name.common !== nameCommon),
        })),
      clearItems: () => set({ items: [] }),


      //Saved trips
      currentTripId: null,
      currentTripName: '',
      savedTrips: [],
      editTrip:(id)=>{
          const tripsToLoad = get().savedTrips.find((trip)=>trip.id === id)
          if(tripsToLoad){
            set({
              items: tripsToLoad.countries,
              currentTripId:id,
              currentTripName:tripsToLoad.name
            })
          }
        },
      saveTrip: (tripName) => {
        const items = get().items
        const currentId=get().currentTripId
    

        if (items.length === 0) return
        
        console.log(currentId)
        if(currentId !== null){
          set((state)=>({savedTrips:state.savedTrips.map((trip)=>
              trip.id === currentId ? {...trip, name:tripName, countries: items, date:new Date().toISOString()} : trip),
          items: [],
          currentTripId: null,
          currentTripName: ''
          }))
        } else {
          const newTrip: Trip = {
          id: Date.now(),
          name: tripName,
          countries: items,
          date: new Date().toISOString(),
        }
        
          set((state) => ({
            savedTrips: [...state.savedTrips, newTrip],
            items: [],
          }))
        }

      },
      removeTrip: (id) =>
        set((state) => ({
          savedTrips: state.savedTrips.filter((trip) => trip.id !== id),
        })),
        
    }),
    
    {
      name: 'sideBar-store', // localStorage key
    }
  )
)

export default useSideBarStore
