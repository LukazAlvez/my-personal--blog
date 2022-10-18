import { Link } from 'react-router-dom';
import { Card } from '../components/Card';

export const Post = () => {
  return (
    <div>
      <Link to='/'>Voltar</Link>
      <Card />
    </div>
  );
};
