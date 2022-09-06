// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyBz4ruHeYVQslnAqlm48bvkMkrYhOgIAm8",
    authDomain: "byfreesolodevs.firebaseapp.com",
    projectId: "byfreesolodevs",
    storageBucket: "byfreesolodevs.appspot.com",
    messagingSenderId: "506210513411",
    appId: "1:506210513411:web:638262dfc25f0347885436",
    measurementId: "G-Y1Q2LMXNYZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);