import { Post } from '../components/Post';
import { Header } from '../components/Header';
import { ThemeTogglerButton } from '../components/theme-toggler-button';
import { useContext } from 'react';
import { ThemeContext } from '../contextApi/theme-context';

export const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme.backgroundColor }}>
      <ThemeTogglerButton />
      <Header />
      <Post />
    </div>
  );
};
