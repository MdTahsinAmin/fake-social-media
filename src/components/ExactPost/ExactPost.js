import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './ExactPost.css'
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 17,
  },
  pos: {
    marginBottom: 12,
  },
});
const ExactPost = (props) => {
    //console.log(props);
    const classes = useStyles();
    return (
       <div className='exact-post'>
           <Card className={classes.root}>
      <CardContent>
         <Typography  color="textSecondary" gutterBottom>
          PostId : {props.post.id} UserId :{props.post.userId}
         </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Title : {props.post.title}
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
       Body :  {props.post.body}
          <br />
        </Typography>
      </CardContent>
    </Card>
       </div>
    );
};

export default ExactPost;