import React from 'react';
import BlogPost from './BlogPost';
import { Link } from 'react-router-dom';

const BlogList = ({ posts }) => {
  return (
    <div className="center">
        <br/><br/>
      <h2> </h2>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => {
        return(
        <>
        <div className="post">
        {post.id+"."} <BlogPost key={post.id} post={post}/>
        <Link to={`/post/${post.id}`}>
        <br/>
        <button className="button">Full Post</button>
        </Link>
        </div>
        <br/>
        <br/>
        </>
          )
        }
      )
      )}
    </div>
  );
};

export default BlogList;
