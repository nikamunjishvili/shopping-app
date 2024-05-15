import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDs-Iya0ZnFguZ2Ux_nuS1jFiKudnBVghE",
  authDomain: "shopping-app-b3fa9.firebaseapp.com",
  projectId: "shopping-app-b3fa9",
  storageBucket: "shopping-app-b3fa9.appspot.com",
  messagingSenderId: "27817368704",
  appId: "1:27817368704:web:5f844a2b584b42f02d9a65",
  measurementId: "G-BGS75NM2F4",
};

const app = initializeApp(firebaseConfig);
export const auth: any = getAuth(app);
