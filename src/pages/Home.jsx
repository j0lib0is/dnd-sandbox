import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {

  // Routes
  let navigate = useNavigate();

  return (
    <div className='mx-auto'>
      <header className='text-center'>
        <div className='p-8'>
          <h1 className='text-4xl font-bold mb-4'>Welcome to Cthulhu Beyond</h1>
          <h2 className='text-lg'>To get started, create your first character.</h2>
        </div>
      </header>
      <section className='p-8'>
        <div className='flex flex-col items-center'>
          <button className='bg-purple-500 text-white px-8 py-1 rounded-md' onClick={() => { navigate('/new-character') }}>Create New Character</button>
        </div>
      </section>
    </div>
  )
}