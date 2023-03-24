import React, { useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function announceBoardList({ post }) {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  const boardDetail = useCallback(() => {
    console.log(post);
    navigate(`/board/announce/${post.id}`, { state: { post } });
  }, [{ post }]);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>글번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={boardDetail}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.admin.nickname}</td>
            <td>{post.date}</td>
            <td>{post.views}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
export default announceBoardList;
