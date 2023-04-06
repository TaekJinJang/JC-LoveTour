import React, { useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { INCREMENT_VIEWS_REQUEST } from '../../reducers/post';

function reserveBoardList({ post }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const boardDetail = useCallback(() => {
    console.log(post.views);
    navigate(`/board/reserve/${post.id}`, { state: { post } });
    return dispatch({
      type: INCREMENT_VIEWS_REQUEST,
      data: { postId: post.id, views: post.views },
    });
  }, [{ post }]);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>글번호</th>
            <th>제목</th>
            <th>예약일</th>
            <th>작성일</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={boardDetail}>
            <td>{post.id}</td>
            <td>{post.user.name[0]}**님 예약글입니다.</td>
            <td>{post.reserveDate}</td>
            <td>{post.date}</td>
            <td>{post.views}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
export default reserveBoardList;
