import React from 'react';
import { Link } from 'react-router-dom';

export default function NavExternal() {
	return (
		<>
			<nav className='w-full flex justify-center p-4'>
				<Link className='mx-4 text-center' to='/'>Home</Link>
			</nav>
		</>
	)
}