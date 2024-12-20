import { FirebaseAuth } from "./config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {
    try {
        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        // const credential = GoogleAuthProvider.credentialFromResult( result );
        const { displayName, email, photoURL, uid } = result.user;
        
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
        }


    } catch (error) {
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage,
        }

    }
}


export const registerUserWithEmailPassword = async({ email, password, displayName }) => {

    try {

        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL } = resp.user;

        await updateProfile( FirebaseAuth.currentUser,{ displayName } );

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

        
    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}

export const loginWithEmailPassword = async({ email, password }) => {

    try {

        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL, displayName } = resp.user;

        return {
            ok: true,
            uid, photoURL, email, displayName
        }
        
    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }

    
}



export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}
