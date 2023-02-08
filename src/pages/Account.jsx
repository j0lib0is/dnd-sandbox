import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const Account = ({ session }) => {

  // State
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);

  // Router
  let navigate = useNavigate();

  // Use Effect
  useEffect(() => {
    getProfile()
  }, [session])

  // Functions
  const getProfile = async () => {
    try {
      setLoading(true)
      const { user } = session

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  const updateProfile = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const { user } = session

      const updates = {
        id: user.id,
        username,
        avatar_url,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('profiles').upsert(updates)

      if (error) {
        throw error
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <header className='text-center'>
        <div className='p-8'>
          <h1 className='text-4xl font-bold'>Account</h1>
        </div>
      </header>
      <section className='p-8'>
        <div aria-live='polite'>
          {loading ? (
            <div className='mx-auto max-w-sm bg-gray-700 border-solid border-1 border-gray-300 rounded-md p-4 text-center'>
              <p>Saving ...</p>
            </div>
          ) : (
            <form onSubmit={updateProfile} className='mx-auto max-w-sm bg-gray-700 border-solid border-1 border-gray-300 rounded-md p-4'>
              <div>
                <h5>Email: {session.user.email}</h5>
              </div>
              <label htmlFor='username'>
                <h5>Username</h5>
                <input
                  id='username'
                  type='text'
                  value={username || ''}
                  onChange={(e) => setUsername(e.target.value)}
                  className='block w-full rounded-md bg-gray-800 border-gray-600 focus:border-purple-500 focus:ring-purple-500 sm:text-sm'
                />
              </label>
              <div>
                <button className='w-full mt-4 bg-purple-500 text-white px-8 py-1 rounded-md' disabled={loading}>
                  Update profile
                </button>
              </div>
            </form>
          )}
          <div className='flex justify-center mt-4'>
            <button type='button' className='text-white px-8 py-1 rounded-md' onClick={() => {
              supabase.auth.signOut();
              navigate('/');
              }}>
              Sign Out
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Account;