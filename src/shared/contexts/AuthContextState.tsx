import { useState } from "react";
import { auth } from "../constants/firebaseApp";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

const AuthContextState = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = () => {
    if (isLogged) return;
  };

  const logout = () => {
    if (!isLogged) return;
  };

  const register = () => {
    signInWithEmailAndPassword(auth);
  };

  return {
    isLogged: {
      get: isLogged,
    },
    email: {
      get: email,
      set: setEmail,
    },
    password: {
      get: password,
      set: setPassword,
    },
    login,
    logout,
    register,
  };
};

export { AuthContextState };
