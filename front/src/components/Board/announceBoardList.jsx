import React, { useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { INCREMENT_VIEWS_REQUEST } from '../../reducers/post';

import '../UI/boardUI.css';

function announceBoardList({ post }) {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const boardDetail = useCallback(() => {
    console.log(post.views);
    navigate(`/board/announce/${post.id}`, { state: { post } });
    return dispatch({
      type: INCREMENT_VIEWS_REQUEST,
      data: { postId: post.id, views: post.views },
    });
  }, [{ post }]);

  return (
    <>
      <tbody>
        <tr onClick={boardDetail}>
          <td>{post.id}</td>
          <td>{post.title}</td>
          <td>{post.admin.nickname}</td>
          <td>{post.date}</td>
          <td>{post.views}</td>
        </tr>
      </tbody>
    </>
  );
}
export default announceBoardList;
