import React from 'react';
import classN from './contentCss.module.css';
import MyPosts from './MyPosts/Post/MyPosts';
import ProfileInfo from './profileInfo/profileInfo';

function Profile (props) {
   return(
    <div className={classN.content}>
   <ProfileInfo />    
   <MyPosts postsData={props.postsData} dispatch={props.dispatch} />
    </div>
   )
};

export default Profile;