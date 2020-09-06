import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Help from './components/Help/Help';
import Review from './components/Review/Review';
import PostReview from './components/PostReview/PostReview';
function App() {
  return (
    <div>
       <Header></Header>
       <Router>
         <Switch>
           <Route path="/home">
             <Home/>
           </Route>
           <Route path={`/review/:postId`}>
             <Review></Review>
           </Route>
           <Route path='/post'>
             <PostReview/>
           </Route>
           <Route path='/help'>
             <Help/>
           </Route>
           <Route exact path='/'>
           <Home/>
           </Route>
           <Route path='*'>
             <NotFound/>
           </Route>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
