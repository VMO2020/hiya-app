import React from 'react';
import { auth } from '../firebase';

import './signout.scss';

export const Signout = () => {
	return (
		<button className='btn' onClick={() => auth.signOut()}>
			<h4>SignOut</h4>
		</button>
	);
};
