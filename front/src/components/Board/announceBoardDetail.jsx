import React, { useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import { REMOVE_POST_REQUEST } from '../../reducers/post';

function announceBoardDetail() {
  const { admin } = useSelector((state) => state.admin);
  // const { mainPosts, REMOVE_POST_REQUEST } = useSelector((state) => state.post);
  const location = useLocation();
  const { post } = location?.state;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(post);

  const deleteBoard = useCallback(() => {
    navigate('/board/announce');
    return dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });
  }, []);

  const updateBoard = useCallback(() => {
    navigate(`/board/announce/${post.id}/update`, { state: { post } });
  }, []);

  return (
    <>
      {post.Images.length > 0 && (
        <img
          src={post.Images[0].src}
          alt={post.Images[0].src}
          style={{ width: '300px', height: '200px' }}
        />
      )}

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
      {admin && (
        <>
          <Button variant="danger" onClick={deleteBoard}>
            삭제
          </Button>
          <Button variant="info" onClick={updateBoard}>
            수정
          </Button>
        </>
      )}
    </>
  );
}
export default announceBoardDetail;
