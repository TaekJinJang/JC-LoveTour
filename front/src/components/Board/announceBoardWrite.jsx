import React, { useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../reducers/post';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useInput from '../../hooks/useInput';

function announceBoardWrite() {
  const [title, onChangeTitle] = useInput('');
  const [text, onChangeText] = useInput('');

  const dispatch = useDispatch();
  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch(addPost);
  }, []);

  return (
    <>
      <h1>게시판 글쓰기</h1>
      <Form onSubmit={onSubmitForm}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>제목</Form.Label>
          <Form.Control
            name="title"
            type="text"
            placeholder="제목을 입력해주세요. "
            value={title}
            onChange={onChangeTitle}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="text">
          <Form.Label>제목</Form.Label>
          <Form.Control
            name="text"
            type="text"
            placeholder="내용을 입력해주세요. "
            value={text}
            onChange={onChangeText}
          />
        </Form.Group>
        <div>
          {/* <Link to="/board"> */}
          <Button variant="primary" type="submit">
            글쓰기
          </Button>
          {/* </Link> */}
        </div>
      </Form>
    </>
  );
}
export default announceBoardWrite;
