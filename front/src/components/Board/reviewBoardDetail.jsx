import React, { useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import { REMOVE_REVIEW_REQUEST } from '../../reducers/post';

function reviewBoardDetail() {
  const location = useLocation();
  const { post } = location?.state;
  console.log(post);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteBoard = useCallback(() => {
    navigate('/board/review');
    return dispatch({
      type: REMOVE_REVIEW_REQUEST,
      data: post.id,
    });
  }, []);

  const updateBoard = useCallback(() => {
    navigate(`/board/review/${post.id}/update`, { state: { post } });
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>글번호</th>
            <th>예약자명</th>
            <th>예약일</th>
            <th>작성일</th>
            <th>내용</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{post.id}</td>
            <td>{post.name}</td>
            <td>{post.date}</td>
            <td>{post.titleDate}</td>
            <td>{post.content}</td>
          </tr>
        </tbody>
      </Table>
      {post.Images &&
        post.Images.map((image, index) => (
          <img
            key={index}
            src={`http://localhost:3005/${image.src}`}
            alt={`http://localhost:3005/${image.src}`}
            // 사진 크기는 수정 해야함
            style={{ width: '300px', height: '200px' }}
          />
        ))}
      <>
        <Button variant="danger" onClick={deleteBoard}>
          삭제
        </Button>
        <Button variant="info" onClick={updateBoard}>
          수정
        </Button>
      </>
    </>
  );
}
export default reviewBoardDetail;
