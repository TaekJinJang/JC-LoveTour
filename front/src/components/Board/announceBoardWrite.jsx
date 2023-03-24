import React, { useCallback, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST } from '../../reducers/post';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useInput from '../../hooks/useInput';
import { useNavigate } from 'react-router-dom';

function announceBoardWrite() {
  const { imagePaths } = useSelector((state) => state.post);
  const [title, onChangeTitle] = useInput('');
  const [text, onChangeText] = useInput('');
  const imageInput = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      if (!text || !text.trim()) {
        return alert('게시글을 작성하세요');
      }
      const formData = new FormData();
      imagePaths.forEach((p) => {
        formData.append('image', p);
      });
      formData.append('content', text);

      navigate('/board/announce');
      return dispatch({
        type: ADD_POST_REQUEST,
        data: { title: title, content: text },
      });
    },
    [title, text, imagePaths]
  );

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onChangeImages = useCallback((e) => {
    console.log('images', e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
    console.log(imageFormData);
  }, []);

  return (
    <>
      <h1>게시판 글쓰기</h1>
      <Form encType="multipart/form-data" onSubmit={onSubmitForm}>
        <input
          type="file"
          multiple
          hidden
          ref={imageInput}
          onChange={onChangeImages}
        />
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
            글쓰기
          </Button>
        </div>
      </Form>
    </>
  );
}
export default announceBoardWrite;
