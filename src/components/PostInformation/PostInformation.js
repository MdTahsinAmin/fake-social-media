import React from 'react';
import "./PostInformation.css"
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const PostInformation = (props) => {
  
    const classes = useStyles();


     const history = useHistory();

     const {title , id,body} = props.post;

     const handleHistory = (id)=>{
        history.push(`/review/${id}`)
   }
   //onClick={()=>{handleHistory(props.post.id)}} 
    return (
      
        <div className='card-container'>   
             <div className='information-container'>
              <h2>Id : {id}</h2>
              <h4>Title : {title}</h4>
              <p>{body}</p>
              <Button onClick={()=>{handleHistory(props.post.id)}}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        See Details
      </Button>
             </div>
        </div>
        
    );
};

export default PostInformation;