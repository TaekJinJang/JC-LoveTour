import React, { useCallback, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { LOAD_SEARCH_POSTS_REQUEST } from '../../reducers/post';
import AnnounceBoardList from './announceBoardList';

function announceBoardSearch() {
  const location = useLocation();
  const dispatch = useDispatch();
  const search = location?.state;
  const { searchPosts } = useSelector((state) => state.post);
  console.log(search);

  useEffect(() => {
    dispatch({
      type: LOAD_SEARCH_POSTS_REQUEST,
      data: search,
    });
  }, []);
  console.log({ searchPosts });
  return (
    <>
      {searchPosts.map((post, index) => (
        <AnnounceBoardList key={post.id} post={post} />
      ))}
    </>
  );
}

export default announceBoardSearch;
