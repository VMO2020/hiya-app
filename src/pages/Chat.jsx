import React, { useEffect, useState, useRef } from 'react';

// Firebase - Firestore
import { db } from '../firebase';

// Components
import { Signout } from '../components/Signout';
import { SendMessages } from '../components/SendMessages';
import { Message } from '../components/Message';

//Images
import Logo from '../assets/images/Logo.png';

// Icons
import { ReactComponent as Info } from '../assets/icons/ui/info.svg';

//Styles
import './chat.scss';

export const Chat = () => {
	const [messages, setMessages] = useState([]);

	// Auto scroll to the end
	const scroll = useRef();

	const getMessages = () => {
		db.collection('messages')
			.orderBy('createdAt')
			.limit(50)
			.onSnapshot((snapshot) => {
				const docs = [];
				snapshot.docs.map((doc) => docs.push({ ...doc.data(), id: doc.id }));
				// console.log(docs);
				setMessages(docs);
			});
	};

	useEffect(() => {
		getMessages();
	}, []);

	return (
		<div className='chat-container'>
			<div className='header'>
				<img src={Logo} alt='Logo' />
				<div className='nav'>
					<div className='signout'>
						<Signout />
					</div>
					<div className='info'>
						<Info />
					</div>
				</div>
			</div>
			<div className='main'>
				{messages.map(({ id, text, photoURL, uid }) => (
					<Message key={id} id={id} text={text} photoURL={photoURL} uid={uid} />
				))}
				<div ref={scroll}></div>
			</div>
			<div className='footer'>
				<SendMessages scroll={scroll} />
			</div>
		</div>
	);
};
