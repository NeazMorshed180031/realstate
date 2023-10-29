import React from "react";
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import {app} from '../firebase.js'
import { useDispatch } from "react-redux";
import { signInSuccess } from "../Redux/userSlice";

export default function OAuth() {
    const dispatch=useDispatch()
  const handleGoogleClick = async () => {
    try {
        const provider=new GoogleAuthProvider() //This is the first step for for google auth
        const auth=getAuth(app)// Then we pass the google auth of our credentials which is in firebase
        const result=await signInWithPopup(auth,provider)//This fire the pop up window for signin with login I
        console.log(result)
        const res = await fetch('/api/auth/google', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: result.user.displayName,
              email: result.user.email,
              photo: result.user.photoURL,
            }),
          });
          const data = await res.json();
          dispatch(signInSuccess(data));
        console.log('data====>',data)
        dispatch(signInSuccess(data))
    } catch (error) {
      console.log("could not sign in with google", error);
    }
  };
  return (
    <>
      <button
        type="button"
        onClick={handleGoogleClick}
        className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 w-100"
      >
        Continue with Google{" "}
      </button>
    </>
  );
}
