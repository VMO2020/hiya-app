import React from 'react';

// Icons
import { ReactComponent as Close } from '../assets/icons/ui/close.svg';

// Styles
import './user.scss';

export const User = ({ photoURL, email, displayName }) => {
	return (
		<div className='card-box'>
			<img src={photoURL} alt='avatar' />
			<div className='close'>
				<Close />
			</div>
			<p className='name'>
				<b>{displayName}</b>
			</p>
			<p className='email'>
				<b>{email}</b>
			</p>
		</div>
	);
};
