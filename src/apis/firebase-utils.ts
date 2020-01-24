import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCPz3HeegLAsbaNS77ocnppnbLENs-781Y',
  authDomain: 'learning-tube-265103.firebaseapp.com',
  databaseURL: 'https://learning-tube-265103.firebaseio.com',
  projectId: 'learning-tube-265103',
  storageBucket: 'learning-tube-265103.appspot.com',
  messagingSenderId: '322201774888',
  appId: '1:322201774888:web:75c42d324bef33226b3e1d'
};

type userAuthType = {
  uid: string;
  displayName: string;
  email: string;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth: userAuthType, additionalData: object) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
