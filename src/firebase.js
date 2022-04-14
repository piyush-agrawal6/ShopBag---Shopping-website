import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDPPVGbp6JFDZpTCND5KTFA5TTMTZXfKzQ",
  authDomain: "shopbag-website.firebaseapp.com",
  projectId: "shopbag-website",
  storageBucket: "shopbag-website.appspot.com",
  messagingSenderId: "353343881386",
  appId: "1:353343881386:web:b29368045e530c763390d3",
  measurementId: "G-67479DRP87"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);