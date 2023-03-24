import React, { useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import GalleryBoardList from './galleryBoardList';
import { useSelector } from 'react-redux';

function galleryBoardView() {
  const { gallery } = useSelector((state) => state.post);
  console.log(gallery);
  return (
    <>
      {gallery.map((post, index) => (
        <GalleryBoardList key={post.id} post={post} />
      ))}
    </>
  );
}

export default galleryBoardView;
