import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Firebase & Firestore
import firebase from 'firebase/app';
import { auth } from '../firebase';

// Icons
import logo from '../assets/images/Logo_white.png';
import { ReactComponent as Google } from '../assets/icons/social/google.svg';
import { ReactComponent as Github } from '../assets/icons/social/github.svg';

// Styles
import './signin.scss';

export const SignIn = () => {
	const [policy, setPolicy] = useState(false);

	const SignInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth
			.signInWithPopup(provider)
			.then((result) => {
				console.log('user authenticated');
			})
			.catch((error) => {
				console.log(`Error ${error.code}: ${error.message}`);
				alert(`Error ${error.code}: ${error.message}`);
			});
	};

	const SignInWithGithub = () => {
		const provider = new firebase.auth.GithubAuthProvider();
		auth
			.signInWithPopup(provider)
			.then((result) => {
				console.log('user authenticated');
			})
			.catch((error) => {
				console.log(`Error ${error.code}: ${error.message}`);
				alert(`Error ${error.code}: ${error.message}`);
			});
	};

	return (
		<div className='container'>
			<div className='header'>
				<img src={logo} alt='logo' />
				<h2 className='title'>HiYaApp</h2>
			</div>
			<div className='main'>
				<div className='agree'>
					<input
						type='checkbox'
						name='policy'
						onClick={() => setPolicy(!policy)}
					/>
					<label>
						<b>This website use cookies to personalize your experience</b>. I
						confirm that I have read, consent and agree our use of cookies and
						our privacy policy.
					</label>
				</div>
				<div className='sign-in-box'>
					<Google />
					<button
						className='btn'
						onClick={SignInWithGoogle}
						disabled={policy ? false : true}
					>
						<h4>Sign In With Google</h4>
					</button>
				</div>

				<div className='sign-in-box'>
					<Github />
					<button
						className='btn'
						onClick={SignInWithGithub}
						disabled={policy ? false : true}
					>
						<h4>Sign In With Github</h4>
					</button>
				</div>
				<div className='policy-box'>
					<Link to='/privacy' className='policy'>
						<h5>Privacy Policy</h5>
					</Link>
				</div>
				<div className='policy-box'>
					<Link to='/cookies' className='policy'>
						<h5>Cookies Policy</h5>
					</Link>
				</div>
			</div>
			<div className='footer'>
				<h2 className='title'>Welcome</h2>
			</div>
		</div>
	);
};
