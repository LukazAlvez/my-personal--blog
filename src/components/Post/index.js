import { Posts } from './styles';
import data from '../../json/posts.json';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../contextApi/theme-context';

export const Post = () => {
  const { theme } = useContext(ThemeContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(data);
  }, []);

  return (
    <Posts>
      {posts.length !== 0 || undefined ? (
        posts.map((post, index) => {
          return (
            <div
              key={index}
              className='post'
              style={{ background: theme.background }}
            >
              <div className='user'>
                <img src={post.user_img} alt={post.name} />
                <h3>{post.name}</h3>
              </div>
              <div className='content'>
                <p style={{ color: theme.color }}>{post.post}</p>
              </div>
            </div>
          );
        })
      ) : (
        <h2> Posts not found </h2>
      )}
    </Posts>
  );
};
