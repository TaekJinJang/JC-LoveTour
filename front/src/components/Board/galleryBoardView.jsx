import React, { useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import GalleryBoardList from './galleryBoardList';
import { useSelector } from 'react-redux';

function galleryBoardView() {
  const { mainPosts } = useSelector((state) => state.post);
  console.log(mainPosts);
  return (
    <>
      {mainPosts.map((post, index) => (
        <GalleryBoardList key={post.id} post={post} />
      ))}
    </>
  );
}

export default galleryBoardView;
