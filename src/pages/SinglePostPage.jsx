import React from 'react';
import { useParams, Link } from 'react-router-dom';

const SinglePostPage = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div>
      <div className="sep-post">
          <h3>Title: {post.title}</h3>
          <br/>
          <p>Content: <br/>{post.content}</p>
      </div>
      <br/>
      <Link to="/"><button class="button">Back to Blog List</button></Link>
    </div>
  );
};

export default SinglePostPage;
