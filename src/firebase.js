import React, { useState, useEffect, useContext } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage,ref,uploadBytes } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-rzNyg-1KShr9zk_n_DwW2k3aMKFoNpA",
  authDomain: "worries-go-away.firebaseapp.com",
  projectId: "worries-go-away",
  storageBucket: "worries-go-away.appspot.com",
  messagingSenderId: "502950006184",
  appId: "1:502950006184:web:5f2341538356cc4325619d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage=getStorage(app)
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default getFirestore();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Custom Hook

export const AuthContext = React.createContext();
export const AuthUpdateContext = React.createContext();

export function useAuthUser() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsub;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Storage

export async function upload(file, currentUser,setLoading){
const fileRef=ref(storage,currentUser.uid+'.png')

setLoading(true);
const snapshot =await uploadBytes (fileRef,file);
const photoURL=await getDownloadURL(fileRef)
updateProfile(currentUser, {photoURL})
setLoading(false);
alert("Uploaded file!")
}