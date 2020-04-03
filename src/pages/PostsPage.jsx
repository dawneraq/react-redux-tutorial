import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/postsActions';
import Post from '../components/Post';

// dispatch gets added to props for connected component
const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts.</p>;

    return posts.map(post => <Post key={post.id} post={post} />);
  };

  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  );
};

const mapStateToProps = state => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors
});

// Specifying a mapStateToProps function will subscribe the wrapper component to Redux store updates
export default connect(mapStateToProps)(PostsPage);
