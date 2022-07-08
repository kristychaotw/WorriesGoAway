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
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
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
// Initialize Cloud Firestore and get a reference to the service
export const storage = getStorage(app);
const db = getFirestore(app);
export default getFirestore();
export const auth = getAuth(app);
let authResult;

export async function signup(email, password) {
  authResult = await createUserWithEmailAndPassword(auth, email, password)
    .then((e) => (authResult = e.operationType))
    .catch((e) => (authResult = e.code));
  return authResult;
}

export async function login(email, password) {
  authResult = await signInWithEmailAndPassword(auth, email, password)
    .then((e) => (authResult = e.operationType))
    .catch((e) => (authResult = e.code));
  return authResult;
}

export async function logout() {
  authResult = await signOut(auth)
    .then((e) => (authResult = e))
    .catch((e) => (authResult = e.code));
  return authResult;
}

// Custom Hook

export const AuthContext = React.createContext();

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

export function useAuthUser() {
  return useContext(AuthContext);
}
