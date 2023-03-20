import React, { useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import useInput from '../hooks/useInput';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAction } from '../reducers';

function loginForm() {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  const dispatch = useDispatch();

  const onSubmitForm = useCallback(() => {
    console.log({
      id,
      password,
    });
    dispatch(loginAction({ id, password }));
  }, [id, password]);

  return (
    <div>
      <h1>관리자페이지</h1>

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
          <Link to="/">
            <Button variant="primary" type="submit">
              로그인
            </Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}

export default loginForm;
