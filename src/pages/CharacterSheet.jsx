import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Import Context
import { SheetListContext } from '../context/SheetListContext';

export default function CharacterSheet() {

  // Props
  const [sheetList] = useContext(SheetListContext);

  // State
  const [character, setCharacter] = useState({});

  // Router
  let { characterId } = useParams();
  let navigate = useNavigate();
  
  // Use Effect
  useEffect(() => {
    const foundCharacter = sheetList.find(sheet => sheet.id == { characterId }.characterId);
    setCharacter(foundCharacter);
  }, []);

  // Functions
  const onChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.type === 'number' ? +e.target.value : e.target.value;
    setCharacter({ ...character, [e.target.name]: value });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const i = sheetList.findIndex(sheet => sheet.id === character.id);
    sheetList[i] = character;
    navigate('/characters');
  };

  return (
    <>
      <header className='text-center'>
        <div className='p-8'>
          <h1 className='text-4xl font-bold'>{character.characterName}</h1>
          <h2 className='text-lg font-semibold mb-4'>{character.race}</h2>
          <p>Charisma: {character.charisma}</p>
          <p>Intelligence: {character.intelligence}</p>
          <p>Wisdom: {character.wisdom}</p>
          <p>Strength: {character.strength}</p>
          <p>Dexterity: {character.dexterity}</p>
          <p>Constitution: {character.constitution}</p>
        </div>
      </header>
      <section className='p-8'>
        <div>
          <form className='mx-auto max-w-sm bg-gray-700 border-solid border-1 border-gray-300 rounded-md p-4'>
          <label>
            <h5>Character Name</h5>
            <input
              onChange={onChange}
              name='characterName'
              value={character.characterName || ''}
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
              value={character.race || ''}
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
              value={character.charisma || 0}
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
              value={character.intelligence || 0}
              type='number'
              placeholder='Intelligence'
              className='block w-full rounded-md bg-gray-800 border-gray-600 focus:border-purple-500 focus:ring-purple-500 sm:text-sm-purple-500 focus:ring-purple-500 sm:text-sm'
              id='intelligence'
            />
          </label>
    
          <label>
            <h5>Wisdom</h5>
            <input
              onChange={onChange}
              name='wisdom'
              value={character.wisdom || 0}
              type='number'
              placeholder='Wisdom'
              className='block w-full rounded-md bg-gray-800 border-gray-600 focus:border-purple-500 focus:ring-purple-500 sm:text-sm-purple-500 focus:ring-purple-500 sm:text-sm'
              id='wisdom'
            />
          </label>
    
          <label>
            <h5>Strength</h5>
            <input
              onChange={onChange}
              name='strength'
              value={character.strength || 0}
              type='number'
              placeholder='Strength'
              className='block w-full rounded-md bg-gray-800 border-gray-600 focus:border-purple-500 focus:ring-purple-500 sm:text-sm-purple-500 focus:ring-purple-500 sm:text-sm'
              id='strength'
            />
          </label>
    
          <label>
            <h5>Dexterity</h5>
            <input
              onChange={onChange}
              name='dexterity'
              value={character.dexterity || 0}
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
              value={character.constitution || 0}
              type='number'
              placeholder='Constitution'
              className='block w-full rounded-md bg-gray-800 border-gray-600 focus:border-purple-500 focus:ring-purple-500 sm:text-sm'
              id='constitution'
            />
          </label>
    
          <button className='mt-4 w-full bg-purple-500 text-white px-8 py-1 rounded-md' onClick={onSubmit} type='submit'>Save</button>
        </form>
        </div>
      </section>
    </>
  )
}