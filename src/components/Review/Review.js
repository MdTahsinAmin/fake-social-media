import React, { useEffect, useState } from 'react';
import './Review.css'
import { useParams } from 'react-router-dom';
import ExactPost from '../ExactPost/ExactPost';
import UserComent from '../UsersComment/UserComent';


const Review = () => {

    const {postId} = useParams();
   
      // Exact Post
      const [post , setPost] = useState({});
      useEffect(()=>{
          const url =`https://jsonplaceholder.typicode.com/posts/${postId}`
          fetch(url)
          .then(response => response.json())
          .then(data => setPost(data))
      },[])
    
    // Comment
    const [commentor ,setCommnetor] = useState([]);
    useEffect(()=>{
       const url =`https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
       
       fetch(url)
       .then(response => response.json())
       .then(data => setCommnetor(data));
       
    },[])
    
   // count 
   
   let count = 5;

   const [images , setImages] = useState([]);

   useEffect(()=>{
       const url =`https://randomuser.me/api/?results=${count}`
       fetch(url)
       .then(response => response.json())
       .then(data =>setImages(data.results));
   },[])
   
   commentor.img = "";
   
   // comment and image

   for(let i = 0 ; i < images.length;i++){
       commentor[i].img = images[i].picture.large;
   }
   //console.log(commentor);

    return (
        <div>
            <h1 className='header'>Post Id : {postId}</h1>
            <span className="color-bar"></span>
             <ExactPost post={post}></ExactPost>
             <h1 className='header'>User Comment</h1>
             <span className="color-bar"></span>
             <div className='commentor-section'>
             {
                commentor.map(comment => <UserComent comment={comment} key ={comment.id}></UserComent>)
             }
             </div>

        </div>
    );
};

export default Review;