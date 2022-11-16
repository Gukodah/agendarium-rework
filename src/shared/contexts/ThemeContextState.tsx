import { useState } from "react";

const ThemeContextState = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  return {
    isDarkMode: {
      get: isDarkMode,
      set: setIsDarkMode,
    },
  };
};

export { ThemeContextState };
