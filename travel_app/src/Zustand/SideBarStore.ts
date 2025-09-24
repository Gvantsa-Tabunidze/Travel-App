import { CountryType } from '@/interfaces/CountryType'
import { create } from 'zustand'

interface SideBarStoreInterface {
    isOpen: boolean,
    toggle:()=>void,
    items:CountryType[],
    addItem: (country: CountryType) => void;
    removeItem: (cca3: string) => void;
    clearItems: () => void;
}


const useSideBarStore = create<SideBarStoreInterface>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  items:[],
  addItem:(country)=> set((state)=>({
    items: state.items.some((c)=>c.name.common===country.name.common) ? state.items : [...state.items, country],
  })),
   removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((c) => c.name.common !== id),
    })),
  clearItems: () => set({ items: [] }),
}))

export default useSideBarStore


