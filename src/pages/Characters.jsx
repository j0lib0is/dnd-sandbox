import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import Components
import SheetList from '../components/SheetList';

export default function Characters() {
  
  // Routes
  let navigate = useNavigate();

  return (
    <>
      <header className='text-center'>
        <div className='p-8'>
          <h1 className='text-4xl font-bold mb-4'>My Characters</h1>
          <button className='bg-purple-500 text-white px-8 py-1 rounded-md' onClick={() => { navigate('/new-character') }}>Create New Character</button>
        </div>
      </header>
      <section className='p-8'>
        <SheetList />
      </section>
    </>
  )
}