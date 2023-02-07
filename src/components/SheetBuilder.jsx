import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Import Context
import { SheetListContext } from '../context/SheetListContext';
import { SheetContext } from '../context/SheetContext';

export default function SheetBuilder() {

  // Props
  const [sheetList, setSheetList] = useContext(SheetListContext);
  const [sheet, setSheet] = useContext(SheetContext);

  // Router
  let navigate = useNavigate();

  // Functions
  const onChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.type === 'number' ? +e.target.value : e.target.value;
    setSheet({ ...sheet, [e.target.name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newSheet = {
      characterName: sheet.characterName,
      race: sheet.race,
      charisma: sheet.charisma,
      intelligence: sheet.intelligence,
      wisdom: sheet.wisdom,
      strength: sheet.strength,
      dexterity: sheet.dexterity,
      constitution: sheet.constitution,
      id: Math.floor(Math.random() * 100000)
    }
    setSheetList([...sheetList, newSheet]);
    setSheet({
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
    navigate('/characters');
  }

  return (
    <>
      <form className='mx-auto max-w-sm bg-gray-700 border-solid border-1 border-gray-300 rounded-md p-4'>
        <label>
          <h5>Character Name</h5>
          <input
            onChange={onChange}
            name='characterName'
            value={sheet.characterName}
            type='text'
            placeholder='Character Name'
            className='block w-full rounded-md bg-gray-800 border-gray-600 focus:border-purple-500 focus:ring-purple-500 sm:text-sm'
            id='characterName'
          />
        </label>

        <label>
          <h5>Race</h5>
          <input
            onChange={onChange}
            name='race'
            value={sheet.race}
            type='text'
            placeholder='Race'
            className='block w-full rounded-md bg-gray-800 border-gray-600 focus:border-purple-500 focus:ring-purple-500 sm:text-sm'
            id='race'
          />
        </label>

        <label>
          <h5>Charisma</h5>
          <input
            onChange={onChange}
            name='charisma'
            value={sheet.charisma}
            type='number'
            placeholder='Charisma'
            className='block w-full rounded-md bg-gray-800 border-gray-600 focus:border-purple-500 focus:ring-purple-500 sm:text-sm'
            id='charisma'
          />
        </label>

        <label>
          <h5>Intelligence</h5>
          <input
            onChange={onChange}
            name='intelligence'
            value={sheet.intelligence}
            type='number'
            placeholder='Intelligence'
            className='block w-full rounded-md bg-gray-800 border-gray-600 focus:border-purple-500 focus:ring-purple-500 sm:text-sm'
            id='intelligence'
          />
        </label>

        <label>
          <h5>Wisdom</h5>
          <input
            onChange={onChange}
            name='wisdom'
            value={sheet.wisdom}
            type='number'
            placeholder='Wisdom'
            className='block w-full rounded-md bg-gray-800 border-gray-600 focus:border-purple-500 focus:ring-purple-500 sm:text-sm'
            id='wisdom'
          />
        </label>

        <label>
          <h5>Strength</h5>
          <input
            onChange={onChange}
            name='strength'
            value={sheet.strength}
            type='number'
            placeholder='Strength'
            className='block w-full rounded-md bg-gray-800 border-gray-600 focus:border-purple-500 focus:ring-purple-500 sm:text-sm'
            id='strength'
          />
        </label>

        <label>
          <h5>Dexterity</h5>
          <input
            onChange={onChange}
            name='dexterity'
            value={sheet.dexterity}
            type='number'
            placeholder='Dexterity'
            className='block w-full rounded-md bg-gray-800 border-gray-600 focus:border-purple-500 focus:ring-purple-500 sm:text-sm'
            id='dexterity'
          />
        </label>

        <label>
          <h5>Constitution</h5>
          <input
            onChange={onChange}
            name='constitution'
            value={sheet.constitution}
            type='number'
            placeholder='Constitution'
            className='block w-full rounded-md bg-gray-800 border-gray-600 focus:border-purple-500 focus:ring-purple-500 sm:text-sm'
            id='constitution'
          />
        </label>

        <button className='w-full mt-4 bg-purple-500 text-white px-8 py-1 rounded-md' onClick={onSubmit} type='submit'>Submit</button>
      </form>
    </>
  );
};