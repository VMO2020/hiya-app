import React from 'react';
import firebase from 'firebase/app';
import { auth } from '../firebase';

// Icons
import logo from '../assets/images/Logo_white.png';
import { ReactComponent as Google } from '../assets/icons/social/google.svg';

// Styles
import './signin.scss';

export const SignIn = () => {
	const SignInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth
			.signInWithPopup(provider)
			.then((result) => {
				console.log('user authenticated');
			})
			.catch((error) => {
				console.log(`Error ${error.code}: ${error.message}`);
			});
	};

	return (
		<div className='container'>
			<div className='header'>
				<img src={logo} alt='logo' />
				<h2 className='title'>HiYaApp</h2>
			</div>
			<div className='main'>
				<div className='sign-in-box'>
					<Google onClick={SignInWithGoogle} />
					<button className='btn' onClick={SignInWithGoogle}>
						<h4>Sign In With Google</h4>
					</button>
				</div>
			</div>
			<div className='footer'>
				<h2 className='title'>Welcome</h2>
			</div>
		</div>
	);
};
