import { createContext, useEffect } from "react";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase.config";

export const userContext = createContext();
  
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};
