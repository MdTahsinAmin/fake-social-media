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
    const  [commentor ,setCommnetor] = useState([]);
    useEffect(()=>{
       const url =`https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
       
       fetch(url)
       .then(response => response.json())
       .then(data => setCommnetor(data));
       
    },[])

   // Comment id
   const commentorId = commentor.map((comment =>(comment.id)));
   
   // count 
   let count = 5;

   const [images , setImages] = useState([]);

   useEffect(()=>{
       const url =`https://randomuser.me/api/?results=${count}`
       fetch(url)
       .then(response => response.json())
       .then(data =>setImages(data.results));
   },[])
  
   // userImages

   const userImages = images.map(image => image.picture.large);

   
   // comment and image

   let j = 0;
   const newCommentor = commentorId.map(id =>{
     
      const comments = commentor.find(comment => comment.id === id)

      if(j<=userImages.length){
          comments.img = userImages[j];
          j++;
      }
    return comments;
   }) 

   
    return (
        <div>
            <h1 className='header'>Post Id : {postId}</h1>
            <span className="color-bar"></span>
             <ExactPost post={post}></ExactPost>
             <h1 className='header'>User Comment</h1>
             <span className="color-bar"></span>
             <div className='commentor-section'>
             {
                 newCommentor.map(comment => <UserComent comment={comment} key ={comment.id}></UserComent>)
             }
             </div>

        </div>
    );
};

export default Review;