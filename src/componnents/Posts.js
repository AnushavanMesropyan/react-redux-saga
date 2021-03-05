import React from 'react';
import {connect} from 'react-redux'
import Post from "./Post";
const Posts= ({syncPosts})=>{
    if(!syncPosts.length){
return(<p className={'text-center'}>Posts not found</p>)
    }
    return syncPosts.map(post=> <Post post={post} key={post.id}></Post>)
};
const mapStateToProps= state=>({
    syncPosts:state.posts.posts
})
export default connect(mapStateToProps,null)(Posts);