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
	const [height, setHeight] = useState('30px');

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
		setHeight('30px');
		// Scroll to the end using useRef to Ref=scroll
		scroll.current.scrollIntoView({ behavior: 'smooth' });
	};

	// Dealing with Textarea Height
	// function calcHeight(value) {
	// 	let inc = Math.floor(value.length / 34);
	// 	// console.log(inc);
	// 	let newHeight = 30 + inc * 22;
	// 	return newHeight;
	// }

	const handleInputChange = (e) => {
		const value = e.target.value;
		// let heightCalc = calcHeight(value);
		// setHeight(heightCalc);
		setMsg(value);
		// console.log('height: ', height);
	};

	return (
		<form onSubmit={sendMessage}>
			<input
				style={{ height: `${height}px` }}
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
