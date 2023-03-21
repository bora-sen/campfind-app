import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { firebaseConfig } from "./config";

export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore(firebaseApp);
