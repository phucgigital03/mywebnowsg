import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import { getDatabase, ref, set } from 'firebase/database';

const app = firebase.initializeApp({
    apiKey: 'AIzaSyCYrDRlVK90iJIJDLo6xMIAajoOUov4LtQ',
    authDomain: 'dev-serverauth.firebaseapp.com',
    projectId: 'dev-serverauth',
    storageBucket: 'dev-serverauth.appspot.com',
    messagingSenderId: '67792699060',
    appId: '1:67792699060:web:21d9f199436585fafe21e1',
});

export const auth = app.auth();
export default app;
