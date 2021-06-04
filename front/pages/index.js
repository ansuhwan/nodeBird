import React from 'react';
import { useSelector } from 'react-redux';
import AppLayout from '../compoments/AppLayout';
import PostCard from '../compoments/PostCard';
import PostForm from '../compoments/postForm';

const Home = () => {
  const { me } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
};

export default Home;
