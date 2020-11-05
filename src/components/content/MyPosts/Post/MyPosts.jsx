import React from 'react';
import classForMyPosts from './MyPosts.module.css';
import PostOne from './PostOne/PostOne';

function MyPosts (props) {
 
  let postsParse = props.postsData
     .map( item => <PostOne message ={item.message} like ={item.like} />)
     let addPosts = (newText) => {
        props.dispatch({type: 'AddPost'});
     };
     let newPostElement = React.createRef();
     let onPostChange = () => {
         let newText = newPostElement.current.value;
      props.dispatch({type: 'UpdateNewPostText', newText: newText});
     };

   return(
   <div className={classForMyPosts.postBlock}>
       <h3>My post</h3>
       <div>
           <div>
                <textarea ref={newPostElement} onChange={onPostChange}></textarea>
           </div>
           <div>
                <button onClick={addPosts}>Add post</button>
           </div>

       </div>
     
      <div> {postsParse} </div>
   </div>
   )
};

export default MyPosts;