import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
// 아직 수정중
function announceBoardDetail() {
  const { user } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  const location = useLocation();
  const { post } = location.state;
  console.log(location);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>글번호</th>
            <th>제목</th>
            <th>내용</th>
            <th>작성일</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.content}</td>
            <td>{post.date}</td>
            <td>{post.views}</td>
          </tr>
        </tbody>
      </Table>
      <Button variant="danger">삭제</Button>
    </>
  );
}
export default announceBoardDetail;
