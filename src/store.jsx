import React, { createContext,useContext } from "react";


const storeContext = createContext(null);
export const useAppContext = () => useContext(storeContext);
export default storeContext;



