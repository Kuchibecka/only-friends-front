import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCiinlzX0_0-XeXMsubedviXd7tJBltbRM',
  authDomain: 'onlyfriends-b0139.firebaseapp.com',
  projectId: 'onlyfriends-b0139',
  storageBucket: 'onlyfriends-b0139.appspot.com',
  messagingSenderId: '123755760476',
  appId: '1:123755760476:web:18fd8bcd46571d61668f99',
  measurementId: 'G-X8JWP7QHHJ'
};

const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
