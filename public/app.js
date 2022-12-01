import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA6Rt-ZGMhGxMKXpBj1C7P5ySZeiWeqAOc',
  authDomain: 'fir-1-fa1fb.firebaseapp.com',
  projectId: 'fir-1-fa1fb',
  storageBucket: 'fir-1-fa1fb.appspot.com',
  messagingSenderId: '547044376145',
  appId: '1:547044376145:web:f90d1d8b92484cdf504270',
  measurementId: 'G-BC745TW44C',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);
console.log(auth);
console.log(app);
