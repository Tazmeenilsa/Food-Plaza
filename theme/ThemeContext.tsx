import React, { createContext, useContext, ReactNode } from 'react';
import { colors, ColorTheme } from './colors';

type ThemeContextType = {
  colors: ColorTheme;
};

const ThemeContext = createContext<ThemeContextType>({
  colors,
});

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={{ colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
