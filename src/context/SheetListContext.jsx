import React, { useState, createContext } from 'react';

export const SheetListContext = createContext();

export const SheetListProvider = (props) => {
  
  // State
  const [sheetList, setSheetList] = useState([]);

  return(
    <SheetListContext.Provider value={[sheetList, setSheetList]}>
      {props.children}
    </SheetListContext.Provider>
  );
}