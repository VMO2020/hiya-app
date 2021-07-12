import React, { useState } from 'react';

// Firebase
import { db, auth } from '../firebase';
import firebase from 'firebase/app';

// Icons
import { ReactComponent as Send } from '../assets/icons/ui/send.svg';

// Styles
import './sendmessages.scss';

export const SendMessages = ({ scroll }) => {
	const [msg, setMsg] = useState('');

	const sendMessage = async (e) => {
		e.preventDefault();
		const { uid, photoURL } = auth.currentUser;

		await db.collection('messages').add({
			text: msg,
			photoURL,
			uid,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setMsg('');
		// Scroll to the end using useRef to Ref=scroll
		scroll.current.scrollIntoView({ behavior: 'smooth' });
	};

	const handleInputChange = (e) => {
		const value = e.target.value;
		setMsg(value);
	};

	return (
		<form onSubmit={sendMessage}>
			<input
				type='text'
				value={msg}
				onChange={handleInputChange}
				placeholder='Message...'
			/>
			<button type='submit'>
				<Send />
			</button>
		</form>
	);
};
