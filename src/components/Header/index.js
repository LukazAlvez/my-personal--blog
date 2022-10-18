import { useContext } from 'react';
import { ThemeContext } from '../../contextApi/theme-context';
import { Div } from './styles';

export const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Div className='header' style={{ backgroundColor: theme.background }}>
      <h1>Lucas Alves</h1>
      <span style={{ color: theme.color }}>Web Devoloper</span>
    </Div>
  );
};
