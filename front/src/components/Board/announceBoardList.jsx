import React, { useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function announceBoardList({ post }) {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  // const boardDetail = useCallback(() => {
  //   navigate(`/board/announce/{${post.id}`, post);
  // });

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
        {/* <Link to={`/board/announce/${post.id}`} post={post.id}> */}
        <tbody>
          <tr>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.admin.nickname}</td>
            <td>{post.date}</td>
            <td>{post.views}</td>
          </tr>
        </tbody>
        {/* </Link> */}
      </Table>
    </>
  );
}
export default announceBoardList;
