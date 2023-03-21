import React, { useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import AnnounceBoardList from './announceBoardList';
import { useSelector } from 'react-redux';
import AnnounceBoardWrite from './announceBoardWrite';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function announceBoardView() {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  const onWriteBoard = useCallback(() => {
    <Link to="/add" />;
  });
  return (
    <>
      {isLoggedIn && (
        <Link to="/board/announce/add">
          <Button>글쓰기</Button>
        </Link>
      )}
      {mainPosts.map((post, index) => (
        <AnnounceBoardList key={post.id} post={post} />
      ))}
    </>
  );
}
export default announceBoardView;
