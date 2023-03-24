import React, { useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

import useInput from '../hooks/useInput';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logInRequestAction, logOutRequestAction } from '../reducers/user';

function loginForm() {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const { logInLoading, logOutLoading, admin } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault(); // submit 후 새로고침 막기
      navigate('/');
      console.log({
        id,
        password,
      });
      dispatch(logInRequestAction({ id, password }));
    },
    [id, password]
  );
  const onLogout = useCallback(() => {
    dispatch(logOutRequestAction());
  }, []);

  console.log(admin);
  return (
    <div>
      <h1>관리자페이지</h1>
      {admin ? (
        <>
          <Button variant="danger" onClick={onLogout}>
            {logOutLoading ? (
              <Spinner animation="border" size="sm" />
            ) : (
              '로그아웃'
            )}
          </Button>
          <Link to="/">
            <Button variant="info">메인페이지 가기</Button>
          </Link>
        </>
      ) : (
        <Form onSubmit={onSubmitForm}>
          <Form.Group className="mb-3" controlId="admin-id">
            <Form.Label>관리자 아이디</Form.Label>
            <Form.Control
              name="admin-id"
              type="text"
              placeholder="ID를 입력해주세요. "
              value={id}
              onChange={onChangeId}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="admin-pw">
            <Form.Label>관리자 비밀번호</Form.Label>
            <Form.Control
              name="admin-pw"
              type="password"
              placeholder="패스워드를 입력해주세요"
              value={password}
              onChange={onChangePassword}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            {logInLoading ? <Spinner animation="border" size="sm" /> : '로그인'}
          </Button>
        </Form>
      )}
    </div>
  );
}

export default loginForm;
