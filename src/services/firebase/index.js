import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDpCaGYSRTE2EvjzfFTvMs-jyKujUZyYKA",
  authDomain: "tienda-online-comision31865.firebaseapp.com",
  projectId: "tienda-online-comision31865",
  storageBucket: "tienda-online-comision31865.appspot.com",
  messagingSenderId: "388948927315",
  appId: "1:388948927315:web:17ddfec7c129122166b7a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)