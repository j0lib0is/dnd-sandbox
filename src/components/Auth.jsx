import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const { error } = await supabase.auth.signInWithOtp({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='mx-auto max-w-sm bg-gray-700 border-solid border-1 border-gray-300 rounded-md p-4'>
      <div className='bg-gray-700 border-solid border-1 rounded-md border-white'>
        <h1 className='text-2xl font-medium'>Log In</h1>
        <p className='text-sm mb-4'>Sign in via magic link with your email below</p>
        {loading ? ('Sending magic link...') : (
          <form onSubmit={handleLogin}>
            <label>
              <h5>Email</h5>
              <input
                id="email"
                className='block w-full rounded-md bg-gray-800 border-gray-600 focus:border-purple-500 focus:ring-purple-500 sm:text-sm'
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <button className='mt-4 w-full bg-purple-500 text-white px-8 py-1 rounded-md' aria-live='polite'>
              Send magic link
            </button>
          </form>
        )}
      </div>
    </div>
  )
}