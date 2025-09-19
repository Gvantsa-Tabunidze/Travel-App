import { create } from 'zustand'

interface SideBarStoreInterface {
    isOpen: boolean,
    toggle:()=>void
}

const useSideBarStore = create<SideBarStoreInterface>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))

export default useSideBarStore