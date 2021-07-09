import React from 'react';

// Firebase
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

// Components
import { SignIn } from './pages/SignIn';
import { Chat } from './pages/Chat';

const HiYaApp = () => {
	const [isAuthenticated] = useAuthState(auth);

	return <>{isAuthenticated ? <Chat /> : <SignIn />}</>;
};

export default HiYaApp;
