import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({ post }) => {
  return (
    <div>
      <h3>Title: {post.title}</h3>
      <p>content:<br/>{post.content.substring(0,50)}...</p>
    </div>
  );
};

export default BlogPost;
