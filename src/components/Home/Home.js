import React, { useEffect, useState } from 'react';
import './Home.css'
import PostInformation from '../PostInformation/PostInformation';

const Home = () => {

    const [posts , setPosts] = useState([]);

    useEffect(()=>{
       const url ='https://jsonplaceholder.typicode.com/posts';
       fetch(url)
       .then(response => response.json())
       .then(data => setPosts(data));
    },[])
    
    return (
        <div className="post-continer">
            <h1 className="header"> Posts : </h1>
            <span className="color-bar"></span>
           <div className="grid-continer">
                {
                
                posts.map(post =><PostInformation post={post} key={post.id}>
          
                </PostInformation>)
                
                } 
          </div> 
           
    </div>
    );
};

export default Home;