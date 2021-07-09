import React, { useState } from 'react';

// Firebase - Firestore
import { db, auth } from '../firebase';

// Icons
import { ReactComponent as Delete } from '../assets/icons/ui/delete.svg';
import { ReactComponent as Done } from '../assets/icons/ui/done_solid.svg';

// Styles
import './message.scss';

export const Message = ({ id, text, photoURL, uid }) => {
	const [control, setControl] = useState(false);
	const [editMsg, setEditMsg] = useState(text);

	const msgDelete = async () => {
		window.confirm('Are you sure you want to delete this message?') &&
			(await db.collection('messages').doc(id).delete());
	};

	const msgSave = async () => {
		await db.collection('messages').doc(id).update({
			text: editMsg,
		});
		setControl(false);
		// console.log('message saved');
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			msgSave();
		}
	};

	return (
		<div className='msg-container'>
			<div
				className={`msg-container__box ${
					uid === auth.currentUser.uid ? 'send' : 'received'
				}`}
			>
				<div className='msg'>
					<img src={photoURL} alt='avatar' />
					{control && uid === auth.currentUser.uid ? (
						<input
							type='text'
							defaultValue={text}
							onChange={(e) => setEditMsg(e.target.value)}
							onKeyDown={handleKeyDown}
						/>
					) : (
						<p onClick={() => setControl(!control)}>{text}</p>
					)}
				</div>
				{control && uid === auth.currentUser.uid && (
					<>
						<button onClick={msgDelete}>
							<Delete />
						</button>
						<button onClick={msgSave} className='done'>
							<Done />
						</button>
					</>
				)}
			</div>
		</div>
	);
};
