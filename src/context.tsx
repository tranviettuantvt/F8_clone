import { createContext } from "react";
interface SidebarContextValue {
    sbActive:boolean,
    setsbActive:(active: boolean) => void;
  }

export const SidebarContex=createContext<SidebarContextValue>({
    sbActive:false,
    setsbActive:()=> {}
})