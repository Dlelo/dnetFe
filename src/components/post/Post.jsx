import React from 'react';
import "./post.css"
import {MoreVert, Favorite, ThumbUp} from '@mui/icons-material'

export default function Post() {
  return (
  <div className='post'>
    <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className='postProfileImg' src="assets/person/1.jpeg" alt=""/>
                <span className='postUsername'>David kita</span>
                <span className='postDate'>5 mins ago</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">Hey this is my first</span>
            <img className='postImage' src="assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <Favorite className='likeIcon'/>
                <ThumbUp className='likeIcon'/>
                <span className="postlikeCounter">32 likes</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">9 Comments</span>
            </div>
        </div>
    </div>
  </div>
  );
}
