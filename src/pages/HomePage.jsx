import React from 'react';
import { Link } from 'react-router-dom';
import BlogList from '../components/BlogList';

const HomePage = ({ posts }) => {
  return (
    <div>
      <Link to="/create"><button>create new post</button></Link>
      <BlogList posts={posts} />
    </div>
  );
};

export default HomePage;
