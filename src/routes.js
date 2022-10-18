import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Post } from './pages/Post';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/post' element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
