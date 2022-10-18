import { createContext, useState } from 'react';

export const themes = {
  light: {
    name: 'Light',
    color: '#111111',
    background: '#eeeeee',
  },
  dark: {
    name: 'Dark',
    color: '#ffffff',
    background: '#111111',
    backgroundColor: '#171717',
  },
};

export const ThemeContext = createContext({});
export const ThemeProvider = props => {
  const [theme, setTheme] = useState(themes.light);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
