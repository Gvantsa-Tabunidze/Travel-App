import { CountryType } from "@/interfaces/CountryType";
import { create } from "zustand";
import { persist } from "zustand/middleware";


interface FavoritesStore{
    favorites:CountryType[],
    toggleFavorites:(country:CountryType)=>void,
    clearFavorites:()=>void
}
const useFavoritesStore = create<FavoritesStore>() (
 persist((set, get)=>({
    favorites:[],
    toggleFavorites: (country) =>
    set((state) => ({
     favorites: state.favorites.some(fav => fav.name.common === country.name.common)
      ? state.favorites.filter(fav => fav.name.common !== country.name.common)
      : [...state.favorites, country],
    })),
     clearFavorites:()=>set({favorites:[]})
 }),
 {
    name: 'favorites-store'
 }
)
)

export default useFavoritesStore