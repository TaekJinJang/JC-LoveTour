import React, { useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Modal, Form, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { INCREMENT_VIEWS_REQUEST } from '../../reducers/post';
import useInput from '../../hooks/useInput';

function reserveBoardList({ post }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [password, onChangePassword] = useInput('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const boardDetail = useCallback(() => {
    console.log(password, post.admin.password);
    if (post.admin.password == password) {
      navigate(`/board/reserve/${post.id}`, { state: { post } });
    } else setShowError(true);
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
            <th>뭐넣지</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={handleShow}>
            <td>{post.id}</td>
            <td>{post.user.name[0]}**님 예약글입니다.</td>
            <td>{post.reserveDate}</td>
            <td>{post.date}</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>예약하기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>예약 비밀번호</Form.Label>
              <Form.Control
                type="password"
                placeholder="비밀번호를 입력해주세요."
                value={password}
                onChange={onChangePassword}
                autoFocus
              />
              {showError && (
                <Alert
                  variant="danger"
                  onClose={() => setShowError(false)}
                  dismissible
                >
                  비밀번호가 틀렸습니다.
                </Alert>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={boardDetail}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default reserveBoardList;
