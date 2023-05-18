import React, { useCallback, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useInput from '../../hooks/useInput';
import { useLocation, useNavigate } from 'react-router-dom';
import { UPDATE_POST_REQUEST } from '../../reducers/post';
import { useDispatch, useSelector } from 'react-redux';

function announceBoardUpdate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { post } = location.state || {};
  const { imagePaths } = useSelector((state) => state.post);
  const [title, onChangeTitle] = useInput(post.title);
  const [text, onChangeText] = useInput(post.content);
  const imageInput = useRef();
  const { mainPosts } = useSelector((state) => state.post);

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      navigate('/board/announce/'); // 이전페이지로 이동
      return dispatch({
        type: UPDATE_POST_REQUEST,
        data: { postId: post.id, title: title, content: text },
      });
    },
    [title, text]
  );

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  return (
    <>
      <h1>글 수정하기</h1>
      <Form onSubmit={onSubmitForm}>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload} variant="info">
          이미지 업로드
        </Button>
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
          <Form.Label>내용</Form.Label>
          <Form.Control
            name="text"
            type="text"
            placeholder="내용을 입력해주세요. "
            value={text}
            onChange={onChangeText}
          />
        </Form.Group>
        <div>
          <Button variant="primary" type="submit">
            수정하기
          </Button>
        </div>
      </Form>
    </>
  );
}

export default announceBoardUpdate;
