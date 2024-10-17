import React from 'react';
import CreatePost from '../components/CreatePost';

const CreatePostPage = ({ addPost }) => {
  return (
    <div>
      <CreatePost addPost={addPost} />
    </div>
  );
};

export default CreatePostPage;
