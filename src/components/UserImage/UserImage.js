import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import './UserImage.css'
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

const UserImage = (props) => {
    const classes = useStyles();
    return (
        <div className="images-section">
           <Avatar alt="Remy Sharp" src={props.image.picture.large} className={classes.large} /> 
      </div>
    );
};

export default UserImage;