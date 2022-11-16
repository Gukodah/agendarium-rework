import { createContext } from "react";
import { GlobalContextState } from "./GlobalContextState";

const GlobalContextProvider = () => {
  const globalState = GlobalContextState();

  return <GlobalContext.Provider value={() => globalState}></GlobalContext.Provider>;
};

export const GlobalContext = createContext({} as typeof GlobalContextState);

export { GlobalContextProvider };
