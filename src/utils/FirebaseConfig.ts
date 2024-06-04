// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {collection, getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsNF1_8M6E9Kl1WsVxMjWSi5q00cbqdng",
  authDomain: "pokedex-cc30c.firebaseapp.com",
  projectId: "pokedex-cc30c",
  storageBucket: "pokedex-cc30c.appspot.com",
  messagingSenderId: "841308067269",
  appId: "1:841308067269:web:d475e3f488d87b3455e7ac",
  measurementId: "G-M705E91TW5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users"); // this will store the emailIds of the users who have signed up
export const pokemonListRef = collection(firebaseDB, "pokemonList"); // this will store the list of all the pokemons