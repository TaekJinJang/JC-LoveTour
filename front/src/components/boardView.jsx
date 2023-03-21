import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import BoardList from './boardList';
import { useSelector } from 'react-redux';

function boardView() {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <>
      {mainPosts.map((post, index) => (
        <BoardList key={index} post={post} />
      ))}
    </>
  );
}
export default boardView;
