import { create } from "zustand"

interface DivOpen{
  divIsOpen:boolean,
  toggle:()=>void
}

const useDivOpen = create<DivOpen>((set)=>({
divIsOpen:false,
toggle:()=>set((state)=>({divIsOpen:!state.divIsOpen}))
}))

export default useDivOpen