import React, { useEffect, useContext } from 'react';

// Import Components
import SheetCard from './SheetCard';

// Import Context
import { SheetListContext } from '../context/SheetListContext';

export default function SheetList() {

  // Props
  const [sheetList, setSheetList] = useContext(SheetListContext);

  // Use Effect
  useEffect(() => {
    getLocalSheets();
  }, []);

  useEffect(() => {
    saveSheetsLocally();
  }, [sheetList]);

  // Functions
  const saveSheetsLocally = () => {
    if (sheetList.length > 0) {
      localStorage.setItem('localSheets', JSON.stringify(sheetList));
    } else {
      localStorage.removeItem('localSheets');
    }
  };
  
  const getLocalSheets = () => {
    if (localStorage.getItem('localSheets') === null) {
      localStorage.setItem('localSheets', JSON.stringify([]));
    } else {
      let currentSheets = JSON.parse(localStorage.getItem('localSheets'));
      setSheetList(currentSheets);
    }
  };

  return (
    <div className='grid grid-cols-3 gap-4'>
      {sheetList.map(sheet => (
        <SheetCard
          sheet={sheet}
          key={sheet.id}
        />
      ))}
    </div>
  );
};