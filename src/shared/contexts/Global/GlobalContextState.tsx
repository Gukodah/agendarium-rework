import { AuthContextState } from "../AuthContextState";
import { ThemeContextState } from "../ThemeContextState";

const GlobalContextState = () => {
  return {
    auth: AuthContextState(),
    theme: ThemeContextState(),
  };
};

export { GlobalContextState };
