import React, { useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Modal, Form, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { INCREMENT_VIEWS_REQUEST } from '../../reducers/post';
import useInput from '../../hooks/useInput';

function reviewBoardList({ post }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [password, onChangePassword] = useInput('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const boardDetail = useCallback(() => {
    if (post.password == password) {
      navigate(`/board/review/${post.id}`, { state: { post } });
    } else setShowError(true);
  }, [{ post }]);

  return (
    <>
      <Table striped="columns">
        <thead>
          <tr>
            <th>글번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={handleShow}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.name}</td>
            <td>{post.date}</td>
          </tr>
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>투어 후기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>후기 비밀번호</Form.Label>
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
export default reviewBoardList;
