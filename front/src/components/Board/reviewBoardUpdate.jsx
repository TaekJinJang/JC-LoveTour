import React, { useCallback, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useInput from '../../hooks/useInput';
import { useLocation, useNavigate } from 'react-router-dom';
import { REMOVE_IMAGE, UPDATE_REVIEW_REQUEST } from '../../reducers/post';
import { useDispatch, useSelector } from 'react-redux';

function reviewBoardUpdate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { post } = location.state || {};
  const { imagePaths } = useSelector((state) => state.post);

  const [name, onChangeName] = useInput(post.name);
  const [password, onChangePassword] = useInput(post.password);
  const [title, onChangeTitle] = useInput(post.title);
  const [phoneNum, onChangePhoneNum] = useInput(post.phoneNumber);
  const [text, onChangeText] = useInput(post.content);
  useEffect(() => {
    if (post?.Images) {
      console.log('object');
      const newImagePaths = [...imagePaths]; // 새로운 배열 생성
      post.Images.forEach((v) => newImagePaths.push(v.src));
      // imagePaths를 직접 수정하지 않고 새로운 배열에 값을 추가
      // newImagePaths에 새로운 이미지 경로들을 추가
      // useSelector 훅에서 반환하는 state.post.imagePaths는 변경되지 않음
    }
  }, [post]);
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      if (!text || !text.trim()) {
        return alert('게시글을 작성하세요');
      }
      navigate('/board/review/'); // 이전페이지로 이동
      return dispatch({
        type: UPDATE_REVIEW_REQUEST,
        data: {
          postId: post.id,
          name: name,
          password: password,
          title: title,
          phoneNumber: phoneNum,
          content: text,
        },
      });
    },
    [name, text, password, title, phoneNum]
  );
  const onRemoveImage = useCallback((index) => () => {
    dispatch({
      type: REMOVE_IMAGE,
      data: index,
    });
  });

  return (
    <>
      <h1>후기 수정하기</h1>
      <Form onSubmit={onSubmitForm}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>이름</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="이름을 입력해주세요. "
            value={name}
            onChange={onChangeName}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="예약 비밀번호를 입력해주세요 "
            value={password}
            onChange={onChangePassword}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phoneNum">
          <Form.Label>휴대폰번호</Form.Label>
          <Form.Control
            name="phoneNum"
            type="phoneNum"
            placeholder="010-0000-0000"
            value={phoneNum}
            onChange={onChangePhoneNum}
          />
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>제목</Form.Label>
            <Form.Control
              name="title"
              type="title"
              placeholder="제목을 입력해주세요."
              value={title}
              onChange={onChangeTitle}
            />
          </Form.Group>
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

        {/* 제거 */}
        <div>
          {post.Images &&
            post.Images.map((v, i) => (
              <div key={v} style={{ display: 'inline-block' }}>
                <img
                  src={`http://localhost:3005/${v.src}`}
                  style={{ width: '200px' }}
                  alt={v}
                />
                <div>
                  <Button variant="danger" onClick={onRemoveImage(i)}>
                    제거
                  </Button>
                </div>
              </div>
            ))}
        </div>
        <div>
          <Button variant="primary" type="submit">
            수정하기
          </Button>
        </div>
      </Form>
    </>
  );
}

export default reviewBoardUpdate;
