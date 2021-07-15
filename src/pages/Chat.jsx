import React, { useEffect, useState, useRef } from 'react';

// Firebase - Firestore
import { db } from '../firebase';

// Components
import { Signout } from '../components/Signout';
import { SendMessages } from '../components/SendMessages';
import { Message } from '../components/Message';
import { Modal } from '../components/Modal';
import { Info } from '../components/Info';
import { Share } from '../components/Share';

//Images
import Logo from '../assets/images/Logo_white.png';

// Icons
import { ReactComponent as InfoIcon } from '../assets/icons/ui/info.svg';
import { ReactComponent as ShareIcon } from '../assets/icons/ui/share.svg';

//Styles
import './chat.scss';

export const Chat = () => {
	const [messages, setMessages] = useState([]);
	const [diplayInfo, setDiplayInfo] = useState(false);
	const [diplayShare, setDiplayShare] = useState(false);

	// Auto scroll to the end
	const scroll = useRef();

	const scrollToEnd = () => {
		// Scroll to the end using useRef to Ref=scroll
		scroll.current.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		setTimeout(() => {
			scrollToEnd();
		}, 500);
	}, []);

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
			{diplayInfo && (
				<Modal>
					<div onClick={() => setDiplayInfo(false)}>
						<Info />
					</div>
				</Modal>
			)}
			{diplayShare && (
				<Modal>
					<div onClick={() => setDiplayShare(false)}>
						<Share url={'hiya-app.web.app/signin'} />
					</div>
				</Modal>
			)}
			<div className='header'>
				<img src={Logo} alt='Logo' />
				<div className='nav'>
					<div className='info' onClick={() => setDiplayShare(true)}>
						<ShareIcon />
					</div>
					<div className='signout'>
						<Signout />
					</div>
					<div className='info' onClick={() => setDiplayInfo(true)}>
						<InfoIcon />
					</div>
				</div>
			</div>
			<div className='main'>
				{messages.map(({ id, text, photoURL, uid, email, displayName }) => (
					<Message
						key={id}
						id={id}
						text={text}
						photoURL={photoURL}
						uid={uid}
						email={email}
						displayName={displayName}
					/>
				))}
				<div ref={scroll} id='end'></div>
			</div>
			<div className='footer'>
				<SendMessages scrollToEnd={scrollToEnd} />
			</div>
		</div>
	);
};
