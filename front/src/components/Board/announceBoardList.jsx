import React, { useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { INCREMENT_VIEWS_REQUEST } from '../../reducers/post';
import styled from 'styled-components';

import '../UI/boardUI.css';

const Input_Tr = styled.tr`
  height: 50px;
`;
const Input_Td = styled.td`
  border-bottom: 1px solid #f2f2f2;
  border-left: 1px solid #f2f2f2;
`;

function announceBoardList({ post }) {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const boardDetail = useCallback(() => {
    console.log(post.views);
    navigate(`/board/announce/${post.id}`, { state: { post } });
    return dispatch({
      type: INCREMENT_VIEWS_REQUEST,
      data: post.id,
    });
  }, [{ post }]);

  return (
    <>
      <Input_Tr onClick={boardDetail}>
        <Input_Td>{post.id}</Input_Td>
        <Input_Td>{post.title}</Input_Td>
        <Input_Td>관리자</Input_Td>
        <Input_Td>{post.date}</Input_Td>
        <Input_Td>{post.views}</Input_Td>
      </Input_Tr>
    </>
  );
}
export default announceBoardList;
