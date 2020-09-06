import React, { useEffect, useState } from 'react';
import './UserComment.css'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));
const UserComent = (props) => {
   
   const {body,email,name,img} = props.comment;

     const classes = useStyles();
    ///console.log(commentorImg.length);
    return (
        
        <div className="container">
              <div className ="commnetor-img">
              <Avatar alt="Remy Sharp" src={img} className={classes.large} />
              </div>
                <div className="commnetor-information">
                 <h4>Name :{name}</h4>
                 <p>Body : {body}</p>
                 <p>Email : {email}</p>  
                </div>
            </div>
    );
};

export default UserComent;