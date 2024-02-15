import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBSjW8jFOx4ghZ_GywX42HMII29GDe1G7A",
  authDomain: "myportfolio-3f7b5.firebaseapp.com",
  projectId: "myportfolio-3f7b5",
  storageBucket: "myportfolio-3f7b5.appspot.com",
  messagingSenderId: "200489286930",
  appId: "1:200489286930:web:3fe447f708be8568f307cb",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
