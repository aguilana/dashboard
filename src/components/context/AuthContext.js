import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    auth.createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    // when this changes it means we are done loading
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
  };
  return (
    <AuthContext.Provider value={value}>
      {/* if not loading then render out the children otherwise don't render children */}
      {!loading && children}
    </AuthContext.Provider>
  );
};
