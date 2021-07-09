// import firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your Firebase configuration
const firebaseApp = firebase.initializeApp({
	apiKey: process.env.REACT_APP_FIREBASE_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

// Data base
const db = firebaseApp.firestore();

// Auth
const auth = firebase.auth();

export { db, auth };
