import React, { useCallback, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";

import useInput from "../hooks/useInput";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logInRequestAction, logOutRequestAction } from "../reducers/admin";

import { Form, Button, Row, Figure, Col } from "react-bootstrap"; //부트스트랩 사용을 위한 임포트

function loginForm() {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
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
    <Row className="vh-100 d-flex align-items-center justify-content-center ms-2">
      <Row className="mx-auto">
        {/* 관리자 로그인 제목 */}
        <Row className="p-0">
          <h4 className="text-success">관리자 로그인</h4>
          <hr />
        </Row>
        <Row className="bg-light mt-1" style={{ borderRadius: '10px' }}>
          <div className="ms-2 me-2">
            {admin ? (
              <>
                <Button variant="danger" onClick={onLogout}>
                  {logOutLoading ? (
                    <Spinner animation="border" size="sm" />
                  ) : (
                    "로그아웃"
                  )}
                </Button>
                <Link to="/">
                  <Button variant="info">메인페이지 가기</Button>
                </Link>
              </>
            ) : (
              <Form onSubmit={onSubmitForm}>
                {/* 아이디 부분 */}
                <Form.Group className="mb-3 mt-3" controlId="admin-id">
                  <Row className="d-flex align-items-center justify-content-between">
                    <Col sm={3} className="pe-0">
                      <h6>아이디</h6>
                    </Col>
                    <Col sm={8} className="ps-0 me-0">
                      <Form.Control
                        className="ps-0 pe-0"
                        style={{ background: "#dee2e6" }}
                        name="admin-id"
                        type="text"
                        value={id}
                        onChange={onChangeId}
                      />
                    </Col>
                  </Row>
                </Form.Group>

                {/* 비밀번호 부분 */}
                <Form.Group className="mb-3" controlId="admin-pw">
                  <Row className="d-flex align-items-center justify-content-between">
                    <Col sm={3} className="pe-0">
                      <h6>비밀번호</h6>
                    </Col>
                    <Col sm={8} className="ps-0 me-0">
                      <Form.Control
                        className="ps-0 pe-0"
                        style={{ background: "#dee2e6" }}
                        name="admin-pw"
                        type="password"
                        value={password}
                        onChange={onChangePassword}
                      />
                    </Col>
                  </Row>
                </Form.Group>
                {/* 로그인 버튼 부분 */}
                <Row className="d-flex justify-content-center">
                  <Button variant="success" type="submit" className="w-50 mb-3">
                    {logInLoading ? (
                      <Spinner animation="border" size="sm" />
                    ) : (
                      "로그인"
                    )}
                  </Button>
                </Row>
              </Form>
            )}
          </div>
        </Row>
      </Row>
    </Row>
  );
}

export default loginForm;
