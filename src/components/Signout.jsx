import React from 'react';
import { auth } from '../firebase';

// Styles
import './signout.scss';

const handleSigOut = () => {
	auth.signOut();
	console.log('user signout');
};

export const Signout = () => {
	return (
		<button className='btn' onClick={handleSigOut}>
			<h4>SignOut</h4>
		</button>
	);
};
