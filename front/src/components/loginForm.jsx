import React, { useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import useInput from '../hooks/useInput';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, logOutAction } from '../reducers/user';

function loginForm() {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const dispatch = useDispatch();

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault(); // submit 후 새로고침 막기
      console.log({
        id,
        password,
      });
      dispatch(loginAction({ id, password }));
    },
    [id, password]
  );
  const onLogout = useCallback(() => {
    dispatch(logOutAction());
  });

  return (
    <div>
      <h1>관리자페이지</h1>
      {isLoggedIn ? (
        <Button variant="danger" onClick={onLogout}>
          로그아웃
        </Button>
      ) : (
        <Form onSubmit={onSubmitForm}>
          <Form.Group className="mb-3" controlId="user-id">
            <Form.Label>관리자 아이디</Form.Label>
            <Form.Control
              name="user-id"
              type="text"
              placeholder="ID를 입력해주세요. "
              value={id}
              onChange={onChangeId}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="user-pw">
            <Form.Label>관리자 비밀번호</Form.Label>
            <Form.Control
              name="user-pw"
              type="password"
              placeholder="패스워드를 입력해주세요"
              value={password}
              onChange={onChangePassword}
            />
          </Form.Group>
          <div>
            {/* <Link to="/"> */}
            <Button variant="primary" type="submit">
              로그인
            </Button>
            {/* </Link> */}
          </div>
        </Form>
      )}
    </div>
  );
}

export default loginForm;
