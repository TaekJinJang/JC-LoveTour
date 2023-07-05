import React, { useCallback, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';

import useInput from '../hooks/useInput';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logInRequestAction, logOutRequestAction } from '../reducers/admin';

// 제목을 위한 로고 가져오기
import logo from '../assets/mainHeader-assets/logo.png';
import { Form, Button, Row, Figure } from 'react-bootstrap'; //부트스트랩 사용을 위한 임포트

function loginForm() {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const { logInLoading, logOutLoading, admin, logInError, logInDone } =
    useSelector((state) => state.admin);

  useEffect(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault(); // submit 후 새로고침 막기
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
    <div className="bg-success rounded">
      <Figure
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '10px',
          marginBottom: '0px',
        }}
      >
        <Figure.Image
          style={{ width: '100%' }}
          className="ps-0 pe-0 pt-0"
          src={logo}
          alt="logo"
        />
      </Figure>

      <div className="ms-2 me-2">
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
              <Form.Label style={{ color: 'white' }}>
                <h2>관리자 아이디</h2>
              </Form.Label>
              <Form.Control
                name="admin-id"
                type="text"
                placeholder="ID를 입력해주세요. "
                value={id}
                onChange={onChangeId}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="admin-pw">
              <Form.Label style={{ color: 'white' }}>
                <h2>관리자 비밀번호</h2>
              </Form.Label>
              <Form.Control
                name="admin-pw"
                type="password"
                placeholder="패스워드를 입력해주세요"
                value={password}
                onChange={onChangePassword}
              />
            </Form.Group>

            <Button variant="secondary" type="submit" className="w-100 mb-3">
              {logInLoading ? (
                <Spinner animation="border" size="sm" />
              ) : (
                '로그인'
              )}
            </Button>
          </Form>
        )}
      </div>
    </div>
  );
}

export default loginForm;
