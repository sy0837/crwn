import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


const config = {
  apiKey: "AIzaSyC4Lmo8FJsgQXmH9OJ30-mtzWgig-V8MY8",
  authDomain: "crwn-db-f1161.firebaseapp.com",
  databaseURL: "https://crwn-db-f1161.firebaseio.com",
  projectId: "crwn-db-f1161",
  storageBucket: "crwn-db-f1161.appspot.com",
  messagingSenderId: "152236205191",
  appId: "1:152236205191:web:980db1d32d718c16134422",
  measurementId: "G-G2J8KDLQJD"
};
// const config={
//     apiKey: "AIzaSyAFoBUci7LDoRCwhUDAdDKTP8v0aVwT8g4",
//     authDomain: "crwn-db-e0589.firebaseapp.com",
//     databaseURL: "https://crwn-db-e0589.firebaseio.com",
//     projectId: "crwn-db-e0589",
//     storageBucket: "crwn-db-e0589.appspot.com",
//     messagingSenderId: "777439775226",
//     appId: "1:777439775226:web:f0128bf8c0c0e0ef12fc43",
//     measurementId: "G-EYNQSHPEJD"
//   };
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`)
  const snapShot = await userRef.get()

  //   console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()


    try {
      await userRef.set({
        email,
        displayName,
        createdAt,
        ...additionalData
      })
    }
    catch (error) {
      console.log(error.message);

    }
  }

  return userRef

}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//To store data to firebase
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)

  const batch = firestore.batch();
  objectsToAdd.forEach(element => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, element)

  });
  return await batch.commit()

}

export const convertCollectionsSnapshotToMap =(collection) =>{
  const transformedCollection =collection.docs.map(doc =>{
    const {title , items} =doc.data()

    return{
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()]=collection
    return accumulator
  },{})
  
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//   const provider= new firebase.auth.GoogleAuthProvider();
//   provider.setCustomParameters({prompt : 'select_account'})
//   export const SiginWithGoogle= () => auth.signInWithPopup(provider)

export default firebase