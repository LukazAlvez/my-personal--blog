import { useContext } from 'react';
import { ThemeContext, themes } from '../../contextApi/theme-context';
import { Button } from '../Button';

export const ThemeTogglerButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Button
      style={{ color: theme.color, background: theme.background }}
      onClick={() =>
        setTheme(theme === themes.light ? themes.dark : themes.light)
      }
    >
      {theme.name === 'Light' ? 'Dark' : 'Light'}
    </Button>
  );
};
