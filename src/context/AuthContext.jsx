import React, { createContext, useContext, useEffect, useState } from "react";
import {
    onAuthStateChanged,
    signOut as fbSignOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [initializing, setInitializing] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (fbUser) => {
            if (fbUser) {
                setUser({
                    uid: fbUser.uid,
                    email: fbUser.email,
                    displayName: fbUser.displayName || null,
                });
            } else {
                setUser(null);
            }
            setInitializing(false);
        });

        return () => unsubscribe();
    }, []);

    const signIn = async ({ email, password }) => {
        await signInWithEmailAndPassword(auth, email, password);
    };

    const signUp = async ({ name, email, password }) => {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        if (name) {
            await updateProfile(cred.user, { displayName: name });
        }
    };

    const signOut = async () => {
        await fbSignOut(auth);
        setUser(null);
    };

    const value = { user, initializing, signIn, signUp, signOut };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
