import { useContext } from "react";
import { GlobalContext } from "../../../shared/contexts/Global/GlobalContextProvider";

const LoginView = () => {
  const { email, password } = useContext(GlobalContext)().auth;

  return (
    <div>
      
      <input type="password" value={password.get} onChange={(e) => password.set(e.target.value)} placeholder="senha"/>
    </div>
  );
};

export { LoginView };
