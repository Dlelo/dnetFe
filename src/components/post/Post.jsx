import React from 'react';
import "./post.css"
import {MoreVert, Favorite, ThumbUp} from '@mui/icons-material';
import {Users} from "../../dummydata"

export default function Post({post}) {
  return (
  <div className='post'>
    <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className='postProfileImg' src={Users.filter((u)=> u.id === post.userID)[0].profilePicture} alt=""/>
                <span className='postUsername'>
                    {Users.filter((u)=> u.id === post.userID)[0].username}
                    </span>
                <span className='postDate'>{post.date}</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post.desc}</span>
            <img className='postImage' src={post.photo} alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <Favorite className='likeIcon'/>
                <ThumbUp className='likeIcon'/>
                <span className="postlikeCounter">{post.like}likes</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comment} Comments</span>
            </div>
        </div>
    </div>
  </div>
  );
}
