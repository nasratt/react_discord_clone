import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: 'react-discord-clone-b1475.firebaseapp.com',
  projectId: 'react-discord-clone-b1475',
  storageBucket: 'react-discord-clone-b1475.appspot.com',
  messagingSenderId: '488404045824',
  appId: '1:488404045824:web:614e99f17c104af1ddc8e5'
};

const app = firebase.initializeApp(firebaseConfig);
