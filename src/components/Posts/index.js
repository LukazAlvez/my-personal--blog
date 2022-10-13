import '../Posts/styles.css'
import UserPicture from '../UserPicture';
import data from '../../json/posts.json';
import { useEffect, useState } from "react";;

const Post = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        setPosts(data)
    },[]);

    return (
        <div className="posts">
            {posts.length !== 0 || undefined ? posts.map((post, index)=>{
                return(
                    <div key={index} className="post">
                        <div className='user'>
                            <UserPicture url={post.user_img} alt={post.name}/>
                            <h3>{post.name}</h3>
                        </div>
                        <div className='content'>
                            <p>{post.post}</p>
                        </div>
                    </div>
                )
            }) : <h2> Posts not found </h2>
            } 
        </div>
    );
};

export default Post;