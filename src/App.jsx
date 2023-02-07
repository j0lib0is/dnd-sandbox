import './App.css'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { supabase } from './supabaseClient';
import Auth from './components/Auth';
import Account from './pages/Account';

// Import Pages
import Home from './pages/Home';
import Characters from './pages/Characters';
import CharacterSheet from './pages/CharacterSheet';
import NewCharacter from './pages/NewCharacter';
import Error from './pages/Error';

// Import Context
import { SheetListProvider } from './context/SheetListContext';
import { SheetProvider } from './context/SheetContext';

export default function App() {

  // State
  const [session, setSession] = useState(null);

  // Use Effect
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    });
  }, []);

  return (
    <div className='max-w-2xl mx-auto'>
      <SheetListProvider>
        <SheetProvider>
          <Router>
            <nav className='w-full flex justify-center p-4'>
              {!session ? '' : <Link className='mx-4 text-center' to='/'>Home</Link>}
              {!session ? '' : <Link className='mx-4 text-center' to='/characters'>My Characters</Link>}
              {!session ? '' : <Link className='mx-4 text-center' to='/new-character'>New Character</Link>}
              {!session ? '' : <Link className='mx-4 text-center' to='/account'>Account</Link>}
            </nav>
            <Routes>
              <Route path='/' element={!session ? <Auth /> : <Home />} />
              <Route path='/characters' element={<Characters />} />
              <Route path='/character/:characterId' element={<CharacterSheet />} />
              <Route path='/new-character' element={<NewCharacter />} />
              <Route path='/account' element={<Account />} />
              <Route path='*' element={<Error />} />
            </Routes>
            <div className='text-center p-4'>
              <p>2023 Copyright Cthulhu Beyond. All rights reserved.</p>
            </div>
          </Router>
        </SheetProvider>
      </SheetListProvider>
    </div>
  )
}
