import React from 'react';
import classForMyPosts from './PostOne.module.css'

function PostOne (props) {
   return(
    <div className={classForMyPosts.item}>
        <img src='https://upload.wikimedia.org/wikipedia/ru/thumb/2/2f/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_2.jpg/198px-%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_2.jpg' />
        {props.message}
        <div>
            <span>{props.like}</span>
        </div>
    </div>
   )
};

export default PostOne;