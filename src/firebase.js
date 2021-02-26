import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAZoYNQ4HZ24XDfPVD1A11GMuCVhBmN3r0",
    authDomain: "slack-clone-ks.firebaseapp.com",
    projectId: "slack-clone-ks",
    storageBucket: "slack-clone-ks.appspot.com",
    messagingSenderId: "3313938884",
    appId: "1:3313938884:web:eaa15312e1312934bef491"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
