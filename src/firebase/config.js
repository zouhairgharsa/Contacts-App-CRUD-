import { initializeApp } from 'firebase/app'
import {
    getFirestore
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAZt69n2jJEm69zS26gy1rv462dxftaFf4",
    authDomain: "fidesolutions-58440.firebaseapp.com",
    projectId: "fidesolutions-58440",
    storageBucket: "fidesolutions-58440.appspot.com",
    messagingSenderId: "810076817314",
    appId: "1:810076817314:web:dd3aae06e65d64a5ca94fb"
};

initializeApp(firebaseConfig)
// init services
export const db = getFirestore()