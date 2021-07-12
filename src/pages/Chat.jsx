import React, { useEffect, useState, useRef } from 'react';

// Firebase - Firestore
import { db } from '../firebase';

// Components
import { Signout } from '../components/Signout';
import { SendMessages } from '../components/SendMessages';
import { Message } from '../components/Message';

//Images
import Logo from '../assets/images/Logo_white.png';

// Icons
// import { ReactComponent as Info } from '../assets/icons/ui/info.svg';

//Styles
import './chat.scss';
import { Modal } from '../components/Modal';

export const Chat = () => {
	const [messages, setMessages] = useState([]);
	const [modal, setModal] = useState(true);

	// Auto scroll to the end
	const scroll = useRef();

	const scrollToEnd = () => {
		// Scroll to the end using useRef to Ref=scroll
		scroll.current.scrollIntoView({ behavior: 'smooth' });
	};

	const startScreen = () => {
		setModal(false);
		scrollToEnd();
	};

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
			{modal && (
				<Modal>
					<button className='modal-card'>
						<h3 onClick={startScreen}>START</h3>
					</button>
				</Modal>
			)}

			<div className='header'>
				<img src={Logo} alt='Logo' />
				<div className='nav'>
					<div className='signout'>
						<Signout />
					</div>
					{/* <div className='info'>
						<Info />
					</div> */}
				</div>
			</div>
			<div className='main'>
				{messages.map(({ id, text, photoURL, uid }) => (
					<Message key={id} id={id} text={text} photoURL={photoURL} uid={uid} />
				))}
				<div ref={scroll} id='end'></div>
			</div>
			<div className='footer'>
				<SendMessages scroll={scroll} />
			</div>
		</div>
	);
};
