import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqr8T7JWBv6VhcokL83NGYZB5OoODe-p8",
  authDomain: "agendarium-edf33.firebaseapp.com",
  projectId: "agendarium-edf33",
  storageBucket: "agendarium-edf33.appspot.com",
  messagingSenderId: "582565016651",
  appId: "1:582565016651:web:2256ee9eeb64078a6349ce",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("logadoo!");
    return;
  }

  console.log("not logged");
});

export { auth };
