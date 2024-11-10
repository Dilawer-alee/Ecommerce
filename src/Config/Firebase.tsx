import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKwjpP_PU2bayKZ4VKX1genbJoZWYKfF8",
  authDomain: "ecommerce-store-ae4fb.firebaseapp.com",
  databaseURL: "https://ecommerce-store-ae4fb-default-rtdb.firebaseio.com",
  projectId: "ecommerce-store-ae4fb",
  storageBucket: "ecommerce-store-ae4fb.appspot.com",
  messagingSenderId: "1001024176460",
  appId: "1:1001024176460:web:5c0ea17821ddb14d304fe9",
  measurementId: "G-2BMK3V80NT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function handleLogin(email: string, password: string): Promise<void> {
  try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User logged in:", user);
  } catch (error: any) {
      const errorMessage = error.message;
      console.error("Error signing in:", errorMessage);
      console.error("Error details:", error);
  }
}



async function handleSignUp(email: string, password: string): Promise<void> {
  try {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user);
  } catch (error: any) {
    const errorMessage = error.message;
    console.error(errorMessage);
  }
}

export { handleLogin, handleSignUp };
