import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Import Context
import { SheetListContext } from '../context/SheetListContext';

export default function Sheet(props) {

  // Props
  const { sheet } = props;
  const [sheetList, setSheetList] = useContext(SheetListContext);

  // Routes
  let navigate = useNavigate();

  // Functions
  const onDelete = () => {
    const i = sheetList.findIndex(item => item.id === sheet.id);
    const newSheetList = [...sheetList];
    newSheetList.splice(i, 1);
    setSheetList(newSheetList);
  };

  return (
    <div className='bg-gray-700 border-solid border-1 rounded-md border-white p-4'>
      <h4 className='text-2xl font-medium'>{sheet.characterName}</h4>
      <p className='text-lg mb-4'>{sheet.race}</p>
      <div className='flex items-center'><h5 className='font-bold pr-1'>Charisma:</h5><p>{sheet.charisma}</p></div>
      <div className='flex items-center'><h5 className='font-bold pr-1'>Intelligence:</h5><p>{sheet.intelligence}</p></div>
      <div className='flex items-center'><h5 className='font-bold pr-1'>Wisdom:</h5><p>{sheet.wisdom}</p></div>
      <div className='flex items-center'><h5 className='font-bold pr-1'>Strength:</h5><p>{sheet.strength}</p></div>
      <div className='flex items-center'><h5 className='font-bold pr-1'>Dexterity:</h5><p>{sheet.dexterity}</p></div>
      <div className='flex items-center'><h5 className='font-bold pr-1'>Constitution:</h5><p>{sheet.constitution}</p></div>
      <div className='mt-4'>
        <button className='bg-purple-500 text-white px-4 py-1 rounded-md mr-1' onClick={() => navigate(`/character/${sheet.id}`)}>Edit</button>
        <button className='bg-purple-500 text-white px-4 py-1 rounded-md' onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};