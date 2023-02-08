import React from 'react';
import { Link } from 'react-router-dom';

export default function NavInternal() {
	return (
		<>
			<nav className='w-full flex justify-center p-4'>
				<Link className='mx-4 text-center' to='/'>My Characters</Link>
				<Link className='mx-4 text-center' to='/new-character'>New Character</Link>
				<Link className='mx-4 text-center' to='/account'>Account</Link>
			</nav>
		</>
	)
}