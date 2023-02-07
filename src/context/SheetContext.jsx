import React, { useState, createContext } from 'react';

export const SheetContext = createContext();

export const SheetProvider = (props) => {
  
  // State
  const [sheet, setSheet] = useState({
    characterName: '',
    race: '',
    charisma: 0,
    intelligence: 0,
    wisdom: 0,
    strength: 0,
    dexterity: 0,
    constitution: 0,
    id: 0
  });

  return(
    <SheetContext.Provider value={[sheet, setSheet]}>
      {props.children}
    </SheetContext.Provider>
  );
}