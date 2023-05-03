import React, { useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import { REMOVE_RESERVE_REQUEST } from '../../reducers/post';

function reserveBoardDetail() {
  const { admin } = useSelector((state) => state.admin);
  const location = useLocation();
  const { post } = location?.state;
  console.log(post);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteBoard = useCallback(() => {
    navigate('/board/reserve');
    return dispatch({
      type: REMOVE_RESERVE_REQUEST,
      data: post.id,
    });
  }, []);

  const updateBoard = useCallback(() => {
    navigate(`/board/reserve/${post.id}/update`, { state: { post } });
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
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{post.id}</td>
            <td>{post.admin.name}</td>
            <td>{post.reserveDate}</td>
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
export default reserveBoardDetail;
